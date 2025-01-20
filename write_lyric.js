import fs from 'node:fs'
import path from 'node:path'
import axios from 'axios'
import * as cheerio from 'cheerio'
import dotenv from 'dotenv'
dotenv.config()

import { AssemblyAI } from 'assemblyai'
const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY
})

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// Пути к папкам и файлам
const musicFolderPath = './public/music'
const lyricFolderPath = './src/static_data'
const lyricFolderFile = 'songs_text.json'

const musicListFile = 'music_list.json'
const apiUrl = 'https://genius.com'

const lyricFolderFileTimecodes = 'songs_text_with_timecodes.json'
const apiUrlTimecodes = 'https://api.textyl.co'

const lyricFolderFileTimecodesAssemblyAI = 'songs_text_with_timecodes_assembly_ai.json'

// Чтение и запись JSON файлов с обработкой ошибок
async function readJsonFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8')
    return JSON.parse(data)
  } catch (err) {
    console.error(`Ошибка при чтении файла ${filePath}:`, err)
    return null
  }
}

async function writeJsonFile(filePath, data) {
  try {
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2))
    console.log(`Файл ${filePath} успешно обновлен`)
  } catch (err) {
    console.error(`Ошибка при записи файла ${filePath}:`, err)
  }
}

// Получение текста песни и сохранение в JSON файл
async function fetchLyricsAndSave(songTitle, originalName, lyricsData, outputFilePath) {
  if (lyricsData[originalName] || lyricsData[originalName] === '') {
    console.log(`Данные для ${originalName} уже есть, запрос к API пропущен.`)
    return
  }
  try {
    const formatBandName = (songTitle) =>
      songTitle.replace(/\s+/g, '-').replace('---', '-').replace('.', '').toLowerCase()
    const formatSongTitle = formatBandName(songTitle)
    const requestUrl = `${apiUrl}/${formatSongTitle}-lyrics`
    const response = await axios.get(requestUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    })
    const $ = cheerio.load(response.data)

    const lyricContainers = $('*[data-lyrics-container="true"]')

    // Объединяем содержимое всех найденных элементов
    const content = lyricContainers
      .map(function () {
        return $(this).html()
      })
      .get()
      .join('\n')
    // console.log(content)
    const removeLinks = (text) => text.replace(/<a[^>]*>(.*?)<\/a>/gi, '$1')
    const contentWithoutLinks = removeLinks(content)
    lyricsData[originalName] = contentWithoutLinks || ''
    await writeJsonFile(outputFilePath, lyricsData)
    console.log(`Текст песни для ${songTitle} сохранен в ${outputFilePath}`)
  } catch (error) {
    lyricsData[originalName] = ''
    await writeJsonFile(outputFilePath, lyricsData)
    if (error.response.status !== 404) {
      console.error(`Ошибка при запросе текста песни для ${songTitle}:`, error)
    } else {
      console.warn(`Песня ${songTitle} в ${apiUrl} не найдена.`)
    }
  }
}

// Получение текста песни и сохранение в JSON файл в таймкодах
async function fetchLyricsAndSaveTimecodes(
  songTitle,
  originalName,
  lyricsDataTimecodes,
  outputFilePathTimecodes
) {
  if (lyricsDataTimecodes[originalName]) {
    console.log(`Данные для ${originalName} уже есть, запрос к API пропущен.`)
    return
  }

  try {
    const requestUrl = `${apiUrlTimecodes}/api/lyrics?q=${encodeURIComponent(songTitle)}`
    const response = await axios.get(requestUrl)

    lyricsDataTimecodes[originalName] = response.data || []
    await writeJsonFile(outputFilePathTimecodes, lyricsDataTimecodes)
    console.log(`Текст песни для ${songTitle} сохранен в ${outputFilePathTimecodes}`)
  } catch (error) {
    lyricsDataTimecodes[originalName] = []
    await writeJsonFile(outputFilePathTimecodes, lyricsDataTimecodes)
    if (error.response.status !== 404) {
      console.error(`Ошибка при запросе текста песни для ${songTitle}:`, error)
    } else {
      console.warn(`Песня ${songTitle} в ${apiUrlTimecodes} не найдена.`)
    }
  }
}

async function fetchLyricsAndSaveTimecodesAssemblyAI(
  songTitle,
  originalName,
  lyricsDataTimecodes,
  outputFilePathTimecodes
) {
  if (lyricsDataTimecodes[originalName]) {
    // console.log(`Данные для ${originalName} уже есть, запрос к API пропущен.`)
    return
  }

  try {
    const fileUrl = musicFolderPath + '/' + originalName
    const data = {
      audio: fileUrl
    }
    const transcript = await client.transcripts.transcribe(data)
    // console.log(transcript.words)
    if (transcript.words?.length) {
      const mappedTranscript = transcript.words.map((item) => ({
        text: item.text,
        secondsEnd: item.end / 1000
      }))

      // экспериментально
      const timeToNextLine = 1
      const mappedTranscriptByLines = mappedTranscript.reduce(
        (acc, curr) => {
          const lastElement = acc[acc.length - 1]
          if (curr.secondsEnd - lastElement[lastElement.length - 1]?.secondsEnd > timeToNextLine) {
            acc.push([])
          }
          lastElement.push(curr)
          return acc
        },
        [[]]
      )

      const songWithTimeCode = mappedTranscriptByLines.reduce((acc, curr) => {
        const lyrics = curr
          .reduce((accStr, currStr) => (accStr += `${currStr?.text || ''} `), '')
          .trim()
        acc.push({ lyrics, seconds: curr[0]?.secondsEnd })
        return acc
      }, [])
      // console.log(fileUrl, songWithTimeCode)
      lyricsDataTimecodes[originalName] = songWithTimeCode || []
      await writeJsonFile(outputFilePathTimecodes, lyricsDataTimecodes)
      console.log(`Текст песни для ${songTitle} сохранен в ${outputFilePathTimecodes}`)
    }
  } catch (error) {
    lyricsDataTimecodes[originalName] = []
    await writeJsonFile(outputFilePathTimecodes, lyricsDataTimecodes)
  }
}

// Проверка и обновление списка песен
async function checkAndUpdateMusicList(fileName, musicListPath, musicList) {
  if (!musicList.some((item) => item.songName === fileName)) {
    musicList.push({ songName: fileName })
    await writeJsonFile(musicListPath, musicList)
    // console.log(`Добавлена новая песня: ${fileName}`)
  } else {
    // console.log(`Песня "${fileName}" уже существует в списке.`)
  }
}

// Основная логика обработки файлов
async function processMusicFiles() {
  try {
    const files = await fs.promises.readdir(musicFolderPath)

    const musicListPath = path.join(lyricFolderPath, musicListFile)
    const musicList = (await readJsonFile(musicListPath)) || []

    const outputFilePath = path.join(lyricFolderPath, lyricFolderFile)
    const lyricsData = (await readJsonFile(outputFilePath)) || {}

    const outputFilePathTimecodes = path.join(lyricFolderPath, lyricFolderFileTimecodes)
    const lyricsDataTimecodes = (await readJsonFile(outputFilePathTimecodes)) || {}

    const outputFilePathTimecodesAssemblyAI = path.join(
      lyricFolderPath,
      lyricFolderFileTimecodesAssemblyAI
    )
    const lyricsDataTimecodesAssemblyAI =
      (await readJsonFile(outputFilePathTimecodesAssemblyAI)) || {}

    await Promise.all(
      files.map(async (file) => {
        if (path.extname(file) === '.mp3') {
          const fileNameWithoutExtension = path.basename(file, '.mp3').replace(/-/g, ' ')
          await checkAndUpdateMusicList(file, musicListPath, musicList)
          await fetchLyricsAndSave(fileNameWithoutExtension, file, lyricsData, outputFilePath)
          await fetchLyricsAndSaveTimecodes(
            fileNameWithoutExtension,
            file,
            lyricsDataTimecodes,
            outputFilePathTimecodes
          )
          if (process.env.ASSEMBLYAI_API_KEY) {
            await fetchLyricsAndSaveTimecodesAssemblyAI(
              fileNameWithoutExtension,
              file,
              lyricsDataTimecodesAssemblyAI,
              outputFilePathTimecodesAssemblyAI
            )
          }
        }
      })
    )
  } catch (err) {
    console.error('Ошибка при обработке музыкальных файлов:', err)
  }
}

// Запуск обработки файлов
processMusicFiles()

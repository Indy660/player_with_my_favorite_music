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
    console.log(`Текст песни для ${songTitle} сохранен в ${outputFilePath}`)
  } catch (error) {
    lyricsData[originalName] = ''
    if (error.response.status !== 404) {
      console.error(`Ошибка при запросе текста песни для ${songTitle}:`, error)
    } else {
      console.warn(`Песня ${songTitle} в ${apiUrl} не найдена.`)
    }
  } finally {
    await writeJsonFile(outputFilePath, lyricsData)
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
    console.log(`Текст песни для ${songTitle} сохранен в ${outputFilePathTimecodes}`)
  } catch (error) {
    lyricsDataTimecodes[originalName] = []
    if (error.response.status !== 404) {
      console.error(`Ошибка при запросе текста песни для ${songTitle}:`, error)
    } else {
      console.warn(`Песня ${songTitle} в ${apiUrlTimecodes} не найдена.`)
    }
  } finally {
    await writeJsonFile(outputFilePathTimecodes, lyricsDataTimecodes)
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
    let result = []
    if (transcript.words?.length) {
      const minConfidence = 0.75
      const minWords = 10
      const realAverageConfidence =
        transcript.words.reduce((sum, item) => sum + item.confidence, 0) / transcript.words.length
      if (realAverageConfidence >= minConfidence && transcript.words.length >= minWords) {
        result = transcript.words
      }
    }
    lyricsDataTimecodes[originalName] = result
    console.log(`Текст песни для ${songTitle} сохранен в ${outputFilePathTimecodes}`)
  } catch (error) {
    console.error(error)
    lyricsDataTimecodes[originalName] = []
  } finally {
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
async function downloadBandLogo(bandName) {
  try {
    const normalizedBandName = bandName.replace(/\s+/g, '-')
    // console.log('normalizedBandName', normalizedBandName)
    const geniusUrl = `https://genius.com/artists/${normalizedBandName}`

    const imageDir = 'src/assets/images'
    const imagePath = path.join(imageDir, `${bandName}.jpg`)

    if (fs.existsSync(imagePath)) {
      console.log(`Изображение для "${bandName}" уже существует. Пропускаем загрузку.`)
      return
    }

    const { data } = await axios.get(geniusUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    })

    const $ = cheerio.load(data)
    const imageUrl = $('meta[property="og:image"]').attr('content')

    if (!imageUrl) {
      throw new Error('Не удалось найти логотип через og:image')
    }

    // console.log('imageUrl:', imageUrl)

    const imageResponse = await axios.get(imageUrl, {
      responseType: 'arraybuffer'
    })

    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true })
    }

    fs.writeFileSync(imagePath, imageResponse.data)
    console.log(`Изображение для "${bandName}" успешно сохранено: ${imagePath}`)
  } catch (error) {
    console.error(`Ошибка при обработке "${bandName}":`, error.message)
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
          const fileNameWithoutExtension = path.basename(file, '.mp3')
          const fileNameWithoutExtensionWithSpace = fileNameWithoutExtension.replace(/-/g, ' ')
          const bandName = fileNameWithoutExtension.split('-')[0].trim() // Предположим, что первая часть — имя группы

          await checkAndUpdateMusicList(file, musicListPath, musicList)
          await fetchLyricsAndSave(fileNameWithoutExtensionWithSpace, file, lyricsData, outputFilePath)
          await fetchLyricsAndSaveTimecodes(
            fileNameWithoutExtensionWithSpace,
            file,
            lyricsDataTimecodes,
            outputFilePathTimecodes
          )
          if (process.env.ASSEMBLYAI_API_KEY) {
            await fetchLyricsAndSaveTimecodesAssemblyAI(
              fileNameWithoutExtensionWithSpace,
              file,
              lyricsDataTimecodesAssemblyAI,
              outputFilePathTimecodesAssemblyAI
            )
          }
          await downloadBandLogo(bandName)
        }
      })
    )
  } catch (err) {
    console.error('Ошибка при обработке музыкальных файлов:', err)
  }
}

// Запуск обработки файлов
processMusicFiles()




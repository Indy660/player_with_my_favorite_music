const fs = require('fs')
const path = require('path')
const axios = require('axios')
const cheerio = require('cheerio')

const apiUrl = 'https://genius.com'

// TODO: для быстрых тестов
// axios
//   .get('https://genius.com/As-i-lay-dying-the-sound-of-truth-lyrics', {
//     headers: {
//       'User-Agent':
//         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     }
//   })
//   .then((response) => {
//     const $ = cheerio.load(response.data)
//
//     const lyricContainers = $('*[data-lyrics-container="true"]')
//
//     // Объединяем содержимое всех найденных элементов
//     const combinedLyrics = lyricContainers
//       .map(function () {
//         return $(this).html()
//       })
//       .get()
//       .join('\n')
//     console.log(combinedLyrics)
//     const removeLinks = (text) => text.replace(/<a[^>]*>(.*?)<\/a>/gi, '$1')
//     const contentWithoutLinks = removeLinks(combinedLyrics)
//     console.log(1312313, contentWithoutLinks)
//   })
//   .catch((error) => {
//     console.error(error)
//   })
async function fetchLyricsAndSave(songTitle, originalName, lyricsData, outputFilePath) {
  if (lyricsData[originalName]) {
    console.log(`Данные для ${originalName} уже есть, запрос к API пропущен.`)
    return
  }
  try {
    const formatBandName = (songTitle) =>
      songTitle.replace(/\s+/g, '-').replace('---', '-').replace('.', '').toLowerCase()
    const formatSongTitle = formatBandName(songTitle)
    console.log(formatSongTitle)
    const requestUrl = `${apiUrl}/${formatSongTitle}-lyrics`
    const response = await axios.get(requestUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    })
    const $ = cheerio.load(response.data)
    console.log(response.data)
    const lyricContainers = $('*[data-lyrics-container="true"]')

    const content = lyricContainers
      .map(function () {
        return $(this).html()
      })
      .get()
      .join('\n')
    console.log(content)
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

async function writeJsonFile(filePath, data) {
  try {
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2))
    console.log(`Файл ${filePath} успешно обновлен`)
  } catch (err) {
    console.error(`Ошибка при записи файла ${filePath}:`, err)
  }
}

fetchLyricsAndSave(
  'August Burns Red - Truth of a Liar',
  'August Burns Red - Truth of a Liar.mp3',
  {},
  'src/static_data/songs_text_new.json'
)

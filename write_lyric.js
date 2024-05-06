const fs = require('fs')
const path = require('path')
const axios = require('axios')
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// Путь к папке с музыкой
const musicFolderPath = './public/music'
const lyricFolderPath = './src/static_data'
const lyricFolderFile = 'songs_text_experiment.json'

// URL API для запроса текстов песен
const apiUrl = 'https://lyrics.lyricfind.com/_next/data/K8lnjb_309zmz7XOhQHFu/en-US/lyrics/'

// https://api.textyl.co/api/lyrics?q=The%20Doors%20%20Alabama%20song

// https://lyrics.lyricfind.com/_next/data/K8lnjb_309zmz7XOhQHFu/en-US/lyrics/between-the-buried-and-me-swim-to-the-moon.json?songSlug=between-the-buried-and-me-swim-to-the-moon
// pageProps
// songData
// lyrics

// TODO: сделать проверку ключа, чтобы не было до запросов
// TODO: "type": "module" заменить на  "type": "commonjs" в пекедже
// Функция для получения текста песни и сохранения его в JSON файл
async function fetchLyricsAndSave(songTitle, originalName) {
  // Формируем URL для запроса к API
  // const requestUrl = `${apiUrl}${encodeURIComponent(songTitle)}`
  const requestUrl =
    'https://lyrics.lyricfind.com/_next/data/K8lnjb_309zmz7XOhQHFu/en-US/lyrics/between-the-buried-and-me-swim-to-the-moon.json?songSlug=between-the-buried-and-me-swim-to-the-moon'
  console.log('requestUrl', requestUrl)
  const outputFilePath = path.join(lyricFolderPath, lyricFolderFile)
  let lyricsData = {}
  // Асинхронно читаем файл, если он существует
  if (
    await fs.promises
      .access(outputFilePath)
      .then(() => true)
      .catch(() => false)
  ) {
    const fileContent = await fs.promises.readFile(outputFilePath, 'utf8')
    lyricsData = JSON.parse(fileContent)
  }
  // Если данные уже есть, пропускаем запрос к API
  if (lyricsData[originalName]) {
    console.log(`Данные для ${originalName} уже есть, запрос к API пропущен.`)
    return
  }
  try {
    // Выполняем запрос к API
    const response = await axios.get(requestUrl)
    // Проверяем, не пустой ли ответ
    if (response.data) {
      console.log(response.data)
      if (response.data?.pageProps?.songData?.lyrics) {
        console.log(response.data?.pageProps?.songData?.lyrics)
        // Добавляем новую песню в объект
        lyricsData[originalName] = response.data
        // Асинхронно записываем данные обратно в файл
        await fs.promises.writeFile(outputFilePath, JSON.stringify(lyricsData, null, 2))
        console.log(`Текст песни для ${songTitle} сохранен в ${outputFilePath}`)
      }
    } else {
      console.log(`Текст песни для ${songTitle} не найден`)
      lyricsData[originalName] = []
      // Асинхронно записываем данные обратно в файл
      await fs.promises.writeFile(outputFilePath, JSON.stringify(lyricsData, null, 2))
    }
  } catch (error) {
    console.log(`Ошибка при запросе текста песни для ${songTitle}`)
    lyricsData[originalName] = []
    // Асинхронно записываем данные обратно в файл
    await fs.promises.writeFile(outputFilePath, JSON.stringify(lyricsData, null, 2))
  }
}

fetchLyricsAndSave(
  'between-the-buried-and-me-swim-to-the-moon',
  'Between The Buried And Me - Swim To The Moon.mp3'
)

// .promises

// Получаем все файлы MP3 в папке
// расскоментировать
// fs.readdir(musicFolderPath, async (err, files) => {
//   if (err) {
//     console.error('Ошибка при чтении папки:', err)
//     return
//   }
//   for (const file of files) {
//     if (path.extname(file) === '.mp3') {
//       const fileNameWithoutExtension = path.basename(file, '.mp3')
//       const fileNameWithoutExtensionAndDashes = fileNameWithoutExtension.replace(/-/g, ' ')
//       // Вызываем функцию для каждого MP3 файла
//       await fetchLyricsAndSave(fileNameWithoutExtensionAndDashes, file)
//     }
//   }
// })

////////////////////////////
// синхронное чтение

// async function fetchLyricsAndSave(songTitle, originalName) {
//   try {
//     // Формируем URL для запроса к API
//     const requestUrl = `${apiUrl}${encodeURIComponent(songTitle)}`
//     // Выполняем запрос к API
//     const response = await axios.get(requestUrl)
//
//     // Проверяем, не пустой ли ответ
//     if (response.data) {
//       // Формируем путь для сохранения результата
//       const outputFilePath = path.join(lyricFolderPath, 'songs_text_with_timecodes2.json')
//
//       // Загружаем существующий файл или создаем новый объект, если файл не существует
//       let lyricsData = {}
//       if (fs.existsSync(outputFilePath)) {
//         const fileContent = fs.readFileSync(outputFilePath, 'utf8')
//         lyricsData = JSON.parse(fileContent)
//       }
//
//       // Добавляем новую песню в объект
//       lyricsData[originalName] = response.data
//
//       // Сохраняем результат в файл
//       fs.writeFileSync(outputFilePath, JSON.stringify(lyricsData, null, 2))
//
//       console.log(`Текст песни для ${songTitle} сохранен в ${outputFilePath}`)
//     } else {
//       console.log(`Текст песни для ${songTitle} не найден`)
//     }
//   } catch (error) {
//     console.error(`Ошибка при запросе текста песни для ${songTitle}:`)
//   }
// }
//
// // Получаем все файлы MP3 в папке
// fs.readdir(musicFolderPath, (err, files) => {
//   if (err) {
//     console.error('Ошибка при чтении папки:', err)
//     return
//   }
//
//   files
//     .filter((file) => path.extname(file) === '.mp3')
//     .forEach((file) => {
//       // Извлекаем название файла без расширения и тире
//       const fileNameWithoutExtension = path.basename(file, '.mp3')
//       const fileNameWithoutExtensionAndDashes = fileNameWithoutExtension.replace(/-/g, ' ')
//
//       // Вызываем функцию для каждого MP3 файла
//       fetchLyricsAndSave(fileNameWithoutExtensionAndDashes, file)
//     })
// })

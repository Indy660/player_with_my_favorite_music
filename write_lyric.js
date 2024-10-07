const fs = require('fs')
const path = require('path')
const axios = require('axios')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// Путь к папке с музыкой
const musicFolderPath = './public/music'
const lyricFolderPath = './src/static_data'
const lyricFolderFile = 'songs_text_with_timecodes.json'
const musicListFile = 'music_list.json'

// URL API для запроса текстов песен
const apiUrl = 'https://api.textyl.co/api/lyrics?q='

// https://api.textyl.co/api/lyrics?q=The%20Doors%20%20Alabama%20song

// https://lyrics.lyricfind.com/_next/data/K8lnjb_309zmz7XOhQHFu/en-US/lyrics/between-the-buried-and-me-swim-to-the-moon.json?songSlug=between-the-buried-and-me-swim-to-the-moon
// pageProps
// songData
// lyrics

// TODO: "type": "module" заменить на  "type": "commonjs" в пекедже
// Функция для получения текста песни и сохранения его в JSON файл
async function fetchLyricsAndSave(songTitle, originalName) {
  // Формируем URL для запроса к API
  const requestUrl = `${apiUrl}${encodeURIComponent(songTitle)}`
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
      // Добавляем новую песню в объект
      lyricsData[originalName] = response.data
      // Асинхронно записываем данные обратно в файл
      await fs.promises.writeFile(outputFilePath, JSON.stringify(lyricsData, null, 2))
      console.log(`Текст песни для ${songTitle} сохранен в ${outputFilePath}`)
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

// Получаем все файлы MP3 в папке
fs.readdir(musicFolderPath, async (err, files) => {
  if (err) {
    console.error('Ошибка при чтении папки:', err)
    return
  }
  for (const file of files) {
    await checkAndUpdateMusicList(file, path.join(lyricFolderPath, musicListFile))
    if (path.extname(file) === '.mp3') {
      const fileNameWithoutExtension = path.basename(file, '.mp3')
      const fileNameWithoutExtensionAndDashes = fileNameWithoutExtension.replace(/-/g, ' ')
      // Вызываем функцию для каждого MP3 файла
      await fetchLyricsAndSave(fileNameWithoutExtensionAndDashes, file)
    }
  }
})

async function readJsonFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8')
    return JSON.parse(data)
  } catch (err) {
    console.error('Ошибка при чтении файла:', err)
    return []
  }
}

async function writeJsonFile(filePath, data) {
  try {
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2))
    console.log('Файл успешно обновлен')
  } catch (err) {
    console.error('Ошибка при записи файла:', err)
  }
}

async function checkAndUpdateMusicList(filePath, musicListPath) {
  const musicList = await readJsonFile(musicListPath)

  // Проверяем наличие пути в списке песен
  const foundIndex = musicList.findIndex((item) => item.songName === filePath)

  if (foundIndex !== -1) {
    console.log(`Песня "${filePath}" уже существует в списке.`)
  } else {
    musicList.push({ songName: filePath })
    await writeJsonFile(musicListPath, musicList)
    console.log(`Добавлена новая песня: ${filePath}`)
  }
}

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

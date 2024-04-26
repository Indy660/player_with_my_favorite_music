const fs = require('fs')
const path = require('path')
const axios = require('axios')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// Путь к папке с музыкой
const musicFolderPath = './public/music'
const lyricFolderPath = './src/static_data'

// URL API для запроса текстов песен
const apiUrl = 'https://api.textyl.co/api/lyrics?q='

// TODO: сделать проверку ключа, чтобы не было до запросов
// TODO: "type": "module" заменить на  "type": "commonjs" в пекедже
// Функция для получения текста песни и сохранения его в JSON файл
async function fetchLyricsAndSave(songTitle, originalName) {
  try {
    // Формируем URL для запроса к API
    const requestUrl = `${apiUrl}${encodeURIComponent(songTitle)}`
    // Выполняем запрос к API
    const response = await axios.get(requestUrl)

    // Проверяем, не пустой ли ответ
    if (response.data) {
      // Формируем путь для сохранения результата
      const outputFilePath = path.join(lyricFolderPath, 'songs_text_with_timecodes2.json')

      // Загружаем существующий файл или создаем новый объект, если файл не существует
      let lyricsData = {}
      if (fs.existsSync(outputFilePath)) {
        const fileContent = fs.readFileSync(outputFilePath, 'utf8')
        lyricsData = JSON.parse(fileContent)
      }

      // Добавляем новую песню в объект
      lyricsData[originalName] = response.data

      // Сохраняем результат в файл
      fs.writeFileSync(outputFilePath, JSON.stringify(lyricsData, null, 2))

      console.log(`Текст песни для ${songTitle} сохранен в ${outputFilePath}`)
    } else {
      console.log(`Текст песни для ${songTitle} не найден`)
    }
  } catch (error) {
    console.error(`Ошибка при запросе текста песни для ${songTitle}:`)
  }
}

// Получаем все файлы MP3 в папке
fs.readdir(musicFolderPath, (err, files) => {
  if (err) {
    console.error('Ошибка при чтении папки:', err)
    return
  }

  files
    .filter((file) => path.extname(file) === '.mp3')
    .forEach((file) => {
      // Извлекаем название файла без расширения и тире
      const fileNameWithoutExtension = path.basename(file, '.mp3')
      const fileNameWithoutExtensionAndDashes = fileNameWithoutExtension.replace(/-/g, ' ')

      // Вызываем функцию для каждого MP3 файла
      fetchLyricsAndSave(fileNameWithoutExtensionAndDashes, file)
    })
})

////////////////////////////

// async function fetchLyricsAndSave(songTitle, songName) {
//   try {
//     // Формируем URL для запроса к API
//     const requestUrl = `${apiUrl}${encodeURIComponent(songTitle)}`
//
//     // Формируем путь для сохранения результата
//     const outputFilePath = path.join(lyricFolderPath, 'songs_text_with_timecodes.json')
//
//     // Загружаем существующий файл или создаем новый объект, если файл не существует
//     let lyricsData = {}
//     if (fs.existsSync(outputFilePath)) {
//       const fileContent = fs.readFileSync(outputFilePath, 'utf8')
//       lyricsData = JSON.parse(fileContent)
//     }
//
//     // Проверяем, есть ли уже такой ключ в файле
//     // if (lyricsData[songName]) {
//     //   console.log(
//     //     `Текст песни для ${songTitle} уже сохранен в ${outputFilePath} под ключом ${songName}`
//     //   )
//     //   return
//     // }
//
//     // Выполняем запрос к API
//     const response = await axios.get(requestUrl)
//
//     // Проверяем, не пустой ли ответ
//     if (response.data) {
//       // Добавляем новую песню в объект
//       lyricsData[songName] = response.data
//
//       // Сохраняем результат в файл
//       fs.writeFileSync(outputFilePath, JSON.stringify(lyricsData, null, 2))
//
//       console.log(
//         `Текст песни для ${songTitle} сохранен в ${outputFilePath} под ключом ${songName}`
//       )
//     } else {
//       console.log(`Текст песни для ${songTitle} не найден`)
//     }
//   } catch (error) {
//     // console.error(`Ошибка при запросе текста песни для ${songTitle}:`, error)
//     console.error(`Ошибка при запросе текста песни для ${songTitle}`)
//   }
// }

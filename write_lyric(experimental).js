const fs = require('fs')
const path = require('path')
const axios = require('axios')
const cheerio = require('cheerio')
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

axios
  .get('https://lyrics.lyricfind.com/lyrics/between-the-buried-and-me-swim-to-the-moon', {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  })
  .then((response) => {
    const $ = cheerio.load(response.data)

    // Найдем элемент по классу
    // const content = $('.MuiBox-root.css-1i43dhb').html() // Извлекаем текст элемента
    // console.log('Content:', content)
    const lyricsContainer = $('.MuiBox-root css-165casq')
    console.log(lyricsContainer)
    // Находим все элементы с атрибутом data-testid="lyrics.lyricLine"
    const lyrics = []
    lyricsContainer.find('[data-testid="lyrics.lyricLine"]').each((i, element) => {
      const lineText = $(element).text() // Извлекаем текст каждой строки
      lyrics.push(lineText) // Добавляем строки в массив
    })

    console.log('Lyrics:', lyrics.join('\n')) // Выводим весь текст как строки

    // const title = $('title').text()
    // console.log('Title:', title)
  })
  .catch((err) => console.error(err))

// TODO: lyricfind требует CORS
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
  // TODO: rapidapi тоже не работает
  // https://rapidapi.com/collection/lyrics-apis - ни один из бесплатых не работает
  //https://rapidapi.com/Sridurgayadav/api/chart-lyrics
  //   const options = {
  //     method: 'GET',
  //     url: 'https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect',
  //     params: {
  //       artist: 'michael jackson',
  //       song: 'bad'
  //     },
  //     headers: {
  //       'X-RapidAPI-Key': '5f4a9a2d91msh1f09c2b6a09fc35p1e5f11jsn01afb8fe9627',
  //       'X-RapidAPI-Host': 'sridurgayadav-chart-lyrics-v1.p.rapidapi.com'
  //     }
  //   }
  //
  //   try {
  //     const response = await axios.request(options)
  //     console.log(response.data)
  //   } catch (error) {
  //     console.error(error)
  //   }

  try {
    // Выполняем запрос к API
    const response = await axios.get(requestUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // Проверяем, не пустой ли ответ
    console.log('response', response)
    if (response.data) {
      console.log(response.data)
      if (response.data?.pageProps?.songData?.lyrics) {
        console.log(response.data?.pageProps?.songData?.lyrics)
        // Добавляем новую песню в объект
        lyricsData[originalName] = response.data.pageProps.songData.lyrics
        // Асинхронно записываем данные обратно в файл
        await fs.promises.writeFile(outputFilePath, JSON.stringify(lyricsData, null, 2))
        console.log(`Текст песни для ${songTitle} сохранен в ${outputFilePath}`)
      }
    } else {
      console.log(`Текст песни для ${songTitle} не найден`)
      // lyricsData[originalName] = ''
      // Асинхронно записываем данные обратно в файл
      await fs.promises.writeFile(outputFilePath, JSON.stringify(lyricsData, null, 2))
    }
  } catch (error) {
    console.log(error)
    console.log(`Ошибка при запросе текста песни для ${songTitle}`)
    // lyricsData[originalName] = ''
    // Асинхронно записываем данные обратно в файл
    await fs.promises.writeFile(outputFilePath, JSON.stringify(lyricsData, null, 2))
  }
}

// fetchLyricsAndSave(
//   'between-the-buried-and-me-swim-to-the-moon',
//   'Between The Buried And Me - Swim To The Moon.mp3'
// )

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

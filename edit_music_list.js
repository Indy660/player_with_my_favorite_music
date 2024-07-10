const fs = require('fs')
const path = require('path')

// Шаг 1: Чтение JSON-файла
function readJsonFile(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (err) {
    console.error(`Ошибка чтения файла ${filePath}: `, err)
    return []
  }
}

// Шаг 2: Обход директории с музыкой и добавление новых песен
function addNewSongsToMusicList(jsonFilePath, musicDirPath) {
  // Получаем текущий список песен
  const musicList = readJsonFile(jsonFilePath)

  // Обходим директорию с музыкой
  fs.readdir(musicDirPath, { withFileTypes: true }, (err, files) => {
    if (err) throw err

    files.forEach((file) => {
      if (path.extname(file.name) === '.mp3') {
        const songName = path.basename(file.name, '.mp3') // Извлекаем имя песни без расширения
        const existingSongIndex = musicList.findIndex((song) => song.songName === songName)

        // Если песня еще не добавлена, добавляем ее
        if (existingSongIndex === -1) {
          musicList.push({ songName })
          console.log(`Добавлена новая песня: ${songName}`)
        }
      }
    })

    // Шаг 5: Записываем изменения обратно в файл
    fs.writeFileSync(jsonFilePath, JSON.stringify(musicList, null, 2), 'utf8')
  })
}

// Использование функции
const jsonFilePath = path.join('./src/static_data/music_list.json')
const musicDirPath = path.join('./public/music')
addNewSongsToMusicList(jsonFilePath, musicDirPath)

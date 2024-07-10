const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

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
        // (file.name, '.mp3') // Извлекаем имя песни без расширения
        const existingSongIndex = musicList.findIndex((song) => song.songName === file.name)

        // Если песня еще не добавлена, добавляем ее
        if (existingSongIndex === -1) {
          musicList.push({ songName: file.name })
          console.log(`Добавлена новая песня: ${file.name}`)
        }
      }
    })
    // Шаг 5: Записываем изменения обратно в файл
    fs.writeFileSync(jsonFilePath, JSON.stringify(musicList, null, 2), 'utf8')
  })
}
const jsonFilePath = path.join('./src/static_data/music_list.json')
const musicDirPath = path.join('./public/music')
addNewSongsToMusicList(jsonFilePath, musicDirPath)

// запуск соседнего скрипта для текста песен
function runNodeScript(scriptPath) {
  exec(`node ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Ошибка при запуске скрипта ${scriptPath}: `, error)
      return
    }
    console.log(`Результат выполнения скрипта ${scriptPath}:`)
    console.log(stdout)
    if (stderr) {
      console.error(`Ошибка выполнения скрипта ${scriptPath}:`, stderr)
    }
  })
}
const scriptToRunAfter = './write_lyric_with_timecode.js'
runNodeScript(scriptToRunAfter)

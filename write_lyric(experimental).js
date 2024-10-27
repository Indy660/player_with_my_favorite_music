const fs = require('fs')
const path = require('path')
const axios = require('axios')
const cheerio = require('cheerio')

// TODO: разобраться в проблме
// The Doors - Alabama song.mp3
// P.O.D. - Youth of the Nation.mp3
// As I Lay Dying - The Sound Оf Truth

// August-burns-red-the-truth-of-a-liar-lyrics
// As-i-lay-dying-the-sound-of-truth-lyrics
axios
  .get('https://genius.com/As-i-lay-dying-the-sound-of-truth-lyrics', {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  })
  .then((response) => {
    const $ = cheerio.load(response.data)

    const lyricContainers = $('*[data-lyrics-container="true"]')

    // Объединяем содержимое всех найденных элементов
    const combinedLyrics = lyricContainers
      .map(function () {
        return $(this).html()
      })
      .get()
      .join('\n')
    console.log(combinedLyrics)
    const removeLinks = (text) => text.replace(/<a[^>]*>(.*?)<\/a>/gi, '$1')
    const contentWithoutLinks = removeLinks(combinedLyrics)
    console.log(1312313, contentWithoutLinks)
  })
  .catch((error) => {
    console.error(error)
  })

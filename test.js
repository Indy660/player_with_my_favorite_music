// // const axios = require('axios')
// // const cheerio = require('cheerio')
// // const fs = require('fs')
// // const path = require('path')
 
import fs from 'node:fs'
import path from 'node:path'
import axios from 'axios'
import * as cheerio from 'cheerio'

async function downloadBandLogo(bandName) {
  try {
    const normalizedBandName = bandName.replace(/\s+/g, '-')
    console.log('normalizedBandName', normalizedBandName)
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

    console.log('imageUrl:', imageUrl)

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

// Пример использования
const songName = 'Nirvana - Smells Like Teen Spirit'
const bandName = songName.split('-')[0].trim()
console.log('bandName', bandName)
downloadBandLogo(bandName)

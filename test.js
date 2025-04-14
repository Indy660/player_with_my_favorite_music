// const axios = require('axios')
// const cheerio = require('cheerio')
// const fs = require('fs')
// const path = require('path')

import fs from 'node:fs'
import path from 'node:path'
import axios from 'axios'
import * as cheerio from 'cheerio'

async function downloadBandLogo(bandName) {
  try {
    const normalizedBandName = bandName.toLowerCase().replace(/\s+/g, '-')
    const geniusUrl = `https://genius.com/artists/${normalizedBandName}`
    // Проверяем, существует ли уже файл
    const imageDir = 'src/assets/images'
    const imagePath = path.join(imageDir, `${bandName}.jpg`) // Предполагаем jpg, но можно изменить

    if (fs.existsSync(imagePath)) {
      console.log(`Изображение для "${bandName}" уже существует. Пропускаем загрузку.`)
      return
    }

    // Получаем HTML страницы
    const { data } = await axios.get(geniusUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    })

    // Парсим HTML
    const $ = cheerio.load(data)
    // console.log($, $?.innerText)
    // Находим элемент с изображением
    const miniCard = $('mini-song-card').first()
    if (!miniCard.length) {
      throw new Error('Не найден элемент mini-song-card')
    }

    const thumbnailDiv = miniCard.find('.mini_card-thumbnail').first()
    if (!thumbnailDiv.length) {
      throw new Error('Не найден элемент с классом mini_card-thumbnail')
    }

    // Извлекаем URL изображения из style атрибута
    const style = thumbnailDiv.attr('style')
    const imageUrlMatch = style.match(/url\(["']?(.*?)["']?\)/)
    if (!imageUrlMatch) {
      throw new Error('Не удалось извлечь URL изображения из style атрибута')
    }
    console.log(imageUrl)
    const imageUrl = imageUrlMatch[1]

    // Скачиваем изображение
    const imageResponse = await axios.get(imageUrl, {
      responseType: 'arraybuffer'
    })

    // Создаем директорию, если её нет
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true })
    }

    // Сохраняем изображение
    fs.writeFileSync(imagePath, imageResponse.data)
    console.log(`Изображение для "${bandName}" успешно сохранено: ${imagePath}`)
  } catch (error) {
    console.error(`Ошибка при обработке "${bandName}":`, error.message)
  }
}

// Пример использования
const songName = 'Nirvana - Smells Like Teen Spirit'
const bandName = songName.split('-')[0].trim() // Извлекаем название группы
downloadBandLogo(bandName)

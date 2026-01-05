// bot.js
const TelegramBot = require('node-telegram-bot-api')

// Вставьте сюда токен, который дали BotFather
const token = '7294087476:AAH_lVxRhCzZSqwzBKrWeUyuIXHC67ilDU8'

// Создаём бота с polling (он будет получать новые сообщения)
const bot = new TelegramBot(token, { polling: true })

// Обрабатываем команду /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id

  // Отправляем сообщение с кнопкой Web App
  bot.sendMessage(chatId, 'Открываем приложение:', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Открыть Vue App',
            web_app: { url: 'https://indy660.github.io/player_with_my_favorite_music/' }
          }
        ]
      ]
    }
  })
})

require('dotenv').config();

module.exports = {
  // 🔑 Session ID (PAIR / QR)
  SESSION_ID: process.env.SESSION_ID || '',

  // 👤 Owner Number (with country code)
  BOT_ADMIN: process.env.BOT_ADMIN || '923220225993',

  // 🌐 Server Port
  PORT: parseInt(process.env.PORT) || 3000,

  // 🐙 GitHub Username (optional)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'niazi-bot',

  // 🔐 Bot Login Password (8 digits)
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,

  // 🔑 Admin Panel Password (FIXED BUG HERE ✅)
  ADMIN_PASSWORD: parseInt(process.env.ADMIN_PASSWORD) || 11223344,

  // 🤖 Telegram Bot Token (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',

  // ⚡ Features
  ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  AUTO_READ: process.env.AUTO_READ || 'true',
  WELCOME_MSG: process.env.WELCOME_MSG || 'true',

  // 💎 Premium Settings
  PREMIUM_KEY: process.env.PREMIUM_KEY || '',
  MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
  EXPIRY: process.env.EXPIRY || '31-12-2026',

  // 🧾 Bot Info
  BOT_NAME: "MIAN x NIAZI",
  OWNER_NAME: "MIAN x NIAZI"
};

const { Bot } = require("grammy");

// Create a bot object
const bot = new Bot("7681418703:AAGvU7hBpr9eJBYBrMnZRpiyO9gho90lcuY"); // <-- place your bot token in this string

// Register listeners to handle messages
bot.on("message:text", (ctx) => ctx.reply("Echo: " + ctx.message.text));

// Start the bot (using long polling)
bot.start();
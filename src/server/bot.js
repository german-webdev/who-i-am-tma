import { Bot } from "grammy";

// Create a bot object
const bot = new Bot("7681418703:AAGvU7hBpr9eJBYBrMnZRpiyO9gho90lcuY"); // <-- place your bot token in this string

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));

bot.start();
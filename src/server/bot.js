import { Bot, Keyboard } from "grammy";

// Создаём объект бота
const bot = new Bot("7681418703:AAGvU7hBpr9eJBYBrMnZRpiyO9gho90lcuY"); // Замените на свой токен

// Устанавливаем команды бота
bot.api.setMyCommands([
    { command: "start", description: "Запуск игры" },
    { command: "help", description: "Помощь" },
    { command: "list", description: "Список приложений" },
]);

// Обработка callback_query для запуска игры
bot.on("callback_query:game_short_name", async (ctx) => {
    await ctx.answerCallbackQuery({ url: "https://t.me/UkubonaBot/WIA" });
});

// Команда /start запускает игру
bot.command("start", async (ctx) => {
    await ctx.replyWithGame("WIA");
});

// Текст для команды /help
const helpText = "Я бот! Вот что я умею:\n\n" +
    "/start - Запуск игры\n" +
    "/help - Помощь\n" +
    "/list - Список приложений";

const labels = [
    "Запуск игры",
    "Помощь",
    "Список приложений",
];

const buttonRows = labels.map((label) => [Keyboard.text(label)]);
const keyboard = Keyboard.from(buttonRows).oneTime();

// Обработчик команды /help
bot.command("help", async (ctx) => {
    await ctx.reply(helpText, {
        reply_markup: keyboard,
    });
});

bot.on("message", async (ctx) => {
    const text = ctx.message.text;

    switch (text) {
        case "Запуск игры":
            await ctx.replyWithGame("WIA");
            break;
        case "Помощь":
            await ctx.reply(helpText, {
                reply_markup: keyboard,
            });
            break;
        case "Список приложений":
            await ctx.reply("Извини, тут пока ничего нет!!!");
            break;
        default:
            await ctx.reply("Я не понимаю, что ты имеешь в виду. Попробуй выбрать кнопку.");
            break;
    }
});

bot.command("list", async (ctx) => {
    await ctx.reply("Извини, тут пока ничего нет!!!");
});

// Запуск бота
bot.start({
    drop_pending_updates: true,
    onStart: () => console.log("Бот запущен!"),
});

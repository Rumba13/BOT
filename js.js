const { Telegraf, Markup } = require('telegraf')
require('dotenv').config();
let url = 'https://rt.pornhub.com/';
const bot = new Telegraf(process.env.BOT_TOKEN)
var express = require('express');
var app = express();

//! WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK
app.set('port', (process.env.PORT || 5000));
app.get('/', function (request, response) {
	var result = 'App is running'
	response.send(result);
}).listen(app.get('port'), function () {
	console.log('App is running, server is listening on port ', app.get('port'));
});
//!WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK

bot.start((ctx) => ctx.reply('Я тебе помогать не обязан'))
bot.help((ctx) => ctx.reply('Я тебе помогать не обязан'))
bot.on('sticker', (ctx) => ctx.reply('👍'))


bot.hears('lapit', (ctx) => ctx.reply('НИХУ!! нЕ АДНАГО 99919	888слова блядь'))
bot.hears('Влад лох', (ctx) => ctx.reply('Пошёл нахуй пидарсич Сам лох чмо ебАне'))
bot.hears('Влад пидр', (ctx) => ctx.reply('Сам ты пидарас!!! Гандон еБанный'))
bot.hears('а', (ctx) => ctx.reply(this))
bot.hears('С лерой?', (ctx) => ctx.reply(url))
bot.hears('тест?', (ctx) => ctx.chatMember)



bot.hears('пидр', (ctx) => ctx.reply(`САМ таки Уёбищны! ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Конча'}`))
bot.hears('ставь', (ctx) => {
	setInterval(() => {
		ctx.reply('💩💩💩 Я обосрался 💩💩💩')
	}, 1000);
})
bot.hears('КОД15', (ctx) => {
	setInterval(() => {
		ctx.reply('💩💩💩 Я обосрался 💩💩💩')
	}, 100);
})

bot.command('cum', (ctx) => {
	ctx.replyWithHTML('<b>Я гей?</b>', Markup.inlineKeyboard(
		[
			[Markup.button.callback('Да', 'loh1')], [Markup.button.callback('Кому ты нахер нужен?', 'loh3')], [Markup.button.callback('Не я', 'loh5')],
			[Markup.button.callback('Конечно, нет', 'loh2')], [Markup.button.callback('Я гей', 'loh4')], [Markup.button.callback('  ', 'loh6')],
		]
	))

	bot.action('loh1', (ctx) => ctx.reply('ПИЗДА! САм такой пидорок Оп Оп'))
	bot.action('loh2', (ctx) => ctx.reply('Обаа! Пасиба Браток!'))
	bot.action('loh3', (ctx) => ctx.reply('ИДИ ТЫ НАХУЙ!! Я лерке ценнее еды, Пёс-гавнавоз'))
	bot.action('loh4', (ctx) => ctx.reply('Вот и папалася пидарасня!'))
	bot.action('loh5', (ctx) => ctx.reply('Пиздишь!'))
	bot.action('loh6', (ctx) => ctx.reply('Хм? Чаго грустим?!'))

})
bot.hears('КОД1', (ctx) => {
	setTimeout(() => {
		ctx.reply('Вот знащит на днях, ряшыу с лерой шпёхнуцаа')
		setTimeout(() => {
			ctx.reply('Ну.. КАк Обычно сзаадин блядь падошёл и схватыл за жирок')
			setTimeout(() => {
				ctx.reply('Я на лерку сматрю, а У НЕе СТАИЦЬ')
				setTimeout(() => {
					ctx.reply('Больше блядь, чем у меня!')
					setTimeout(() => {
						ctx.reply('И лерка как блядь втставить аграгат!!')
						setTimeout(() => {
							ctx.reply('ААААААаАа!!1 ОЧКО РВЕЦЦА!!!1!! АААА!')
						}, 3750);
					}, 3750);
				}, 3750);
			}, 3750);
		}, 3750);
	}, 2000);
})


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

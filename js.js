const { Telegraf, Markup } = require('telegraf')
require('dotenv').config();
var ctxV = null
// let url = 'https://rt.pornhub.com/';
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Я т11888ебе помогать не обязан'))
bot.help((ctx) => ctx.reply('Я т11ебе помогать не обязан'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
var express = require('express');
var app = express();

const url = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=5&tags=genshin_impact&json=1&id=`
let tags = ''
let r34Folder = []
let body = { mode: 'no-cors' }
let i = 1

//! WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK
app.set('port', (process.env.PORT || 5000));
app.get('/', function (request, response) {
	var result = 'App is running'
	response.send(result);
}).listen(app.get('port'), function () {
	console.log('App is running, server is listening on port ', app.get('port'));
});
//!WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK-WEBHOOK

bot.hears('lapit', (ctx) => ctx.reply('НИХУ1!!1111 нЕ АДНАГО 99919	888слова блядь'))
bot.hears('Влад лох', (ctx) => ctx.reply('Пошёл нахуй пидарсич Сам лох чмо ебАне'))
bot.hears('Влад пидр', (ctx) => ctx.reply('Сам ты пидарас!!! Гандон еБанный'))
bot.hears('а', (ctx) => ctx.reply(this))
bot.hears('С лерой?', (ctx) => ctx.reply(url))
bot.hears('1', (ctx) => ctx.reply(ctx.message.from.id, ctx.message.text))



bot.hears('пидр', (ctx) => ctx.reply(`САМ таки Уёбищны! ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Конча'}`))
bot.hears('ставь', (ctx) => {
	setInterval(() => {
		ctx.reply('💩💩💩 Я обосрался 💩💩💩')
	}, 1000);
})
bot.hears('КОД15', (ctx) => {
	// setInterval(() => {
	// 	ctx.reply('💩💩💩 Я обосрался 💩💩💩')
	// }, 100);
})

bot.hears('hentai', (ctx) => {
	getArt(i)

	function getArt(id) {
		fetch(url)
			.then(response => response.json())
			.then(art => { r34Folder = art; compile1() })
	}

	function compile1() {
		for (let i1 = 0; i1 < r34Folder.length; i1++) {
			showArt(r34Folder[i1].file_url, r34Folder[i1].preview_url, r34Folder[i1].sample_url)
		}
	}

	function showArt(file, preview, sample) {
		ctx.reply(preview)
	}
})
// bot.hears('нахуй', (ctx) => {

// })
bot.command('cum', (ctx) => {
	ctx.replyWithHTML('<b>Я гей?</b>', Markup.inlineKeyboard(
		[
			[Markup.button.callback('Да', 'loh1')], [Markup.button.callback('Кому ты нахер нужен?', 'loh3')], [Markup.button.callback('Не я', 'loh5')],
			[Markup.button.callback('Конечно, нет', 'loh2')], [Markup.button.callback('Я гей', 'loh4')], [Markup.button.callback('  ', 'loh6')],
		]
	))

	// bot.action('loh1', (ctx) => ctx.reply(ctx.message))
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
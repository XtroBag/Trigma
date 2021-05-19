const Discord = require('discord.js');


module.exports = {
    name: "help",
    description: "bob!",


async run(client, message, args) {
  const help = new Discord.MessageEmbed()
	.setColor('#FCC124')
	.setTitle('Help menu')
	.setURL('')
	.setAuthor(message.author, message.author.avatarURL(), 'https://discord.com/api/oauth2/authorize?client_id=836395464462696468&permissions=8&scope=bot')
	.setDescription("Hello! I'm Trigma, It's so nice to meet you to get started check the info below to get more info about how i work so you can use all of my super fun commands!")
	.setThumbnail(message.guild.iconURL())
	.addFields(
		{ name: '⚠ | ``Information``', value: '**#1** This bot is very new and is still under development\n **#2** If there are any problems please report it to ``Darkshark#2000``\n **#3** If you would like to reccomend things to the bot go to the support server'},
		{ name: '\u200B', value: '\u200B' },
		{ name: '💬 | ``Commands``', value: '``T!fun`` » Fun commands\n ``T!mod`` » Mod commands\n``T!general`` » general commands\n``T!music`` » Music commands', inline: true },
		{ name: '📣 | ``Support``', value: '《 Darks District 》  https://discord.io/DarksDistrict\n 《 Trigma Support 》  https://discord.io/Trigma', inline: true },
	)
	.addField('📢 | ``Updates``', 'New commands are being added every few weeks. Also new embeds are coming soon with new info about the bot and to show some more commands. That you can use to have fun with the bot so please wait while this is all in process of being done.', false)
	.setImage('')
	.setTimestamp()
	.setFooter('Make sure to use T! before all commands', '');

message.channel.send(help);


const help2 = new Discord.MessageEmbed()
	.setColor('#FC4A24')
	.setTitle('Other Info')
	.setURL('')
	.setAuthor('', message.author.avatarURL(), '')
	.setDescription('Thank you for adding our bot to your server! it shows your support so thank you very much i hope you have a great day.')
	.setThumbnail(message.guild.iconURL())
	.addFields(
		{ name: '🔔 | ``Credits``', value: "This bot was made by ``Darkshark`` But i've also gotten help from one of my other javascript deverlopers **error404** So thank you for helping me create this amazing bot!" },
		{ name: '\u200B', value: '\u200B' },
		{ name: '👋 | ``Owner info``', value: "So my name is darkshark and i'm new to discord.js development i've tried making javascript bots before but it didn't go as good as this new project. I've started this bot on like 4/20/21 i think and so far this bot is doing so good my goal is to grow this bot alot and get it out to others so it can help their servers in as many ways as possible. I hope everyone can enjoy this bot like i do i'm so glad i've made it and i hope it grows to help :)", inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', false)
	.setImage('')
	.setTimestamp()
	.setFooter('Make sure to use T! before all commands', '')

message.channel.send(help2)


}}
const Discord = require('discord.js')

module.exports = {
    name: "howgay",
    description: "bob!",


async run (client, message, args) {
    let member = message.mentions.users.first() || message.author

    let rng = Math.floor(Math.random() * 101);

    const howgayembed = new Discord.MessageEmbed()
    .setTitle(`Gay Machine`)
    .setDescription(`${member.username} is ` + rng + "% gay 🏳‍🌈")
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send(howgayembed)
}}
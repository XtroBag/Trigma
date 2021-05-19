const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js')

module.exports = {
  name: "unlock",
  description: "bob!",

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You do not have enough perms to use this cmd!")
    const channel = message.mentions.channels.first()
    if (!channel) {
    let embedthree = new Discord.MessageEmbed()
      .setTitle("Please mention a valid channel!")
      .setColor("#CE0505")
      return message.channel.send(embedthree)
    }
    const roletofind = args.slice(1).join(" ")
    const role = message.guild.roles.cache.find(r => r.id === roletofind)
    if (!role) {
    let embedtwo = new Discord.MessageEmbed()
      .setTitle("Please give a valid role ID")
      .setColor("#CE0505")
    
      return message.channel.send(embedtwo)
    }
    let embed = new Discord.MessageEmbed()
      .setTitle("channel unlocked!")
      .setColor("#71CE05")
      .setDescription(`This channel has been locked by ${message.author.tag}`)
      .setTimestamp()
    channel.updateOverwrite(role, {
      SEND_MESSAGES: true
    })
    await channel.send(embed)
  }
}
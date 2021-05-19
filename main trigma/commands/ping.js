const Discord = require('discord.js')

module.exports = {
  name: "ping",
  description: "bob!",

  async run(client, message, args) {
    message.channel.send(`Pong! ` + Math.round(client.ws.ping) + ` ms!`)
  }
}
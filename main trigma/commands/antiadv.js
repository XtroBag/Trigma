const Discord = require('discord.js')

module.exports = {
  name: "antiadv",
  description: "bob!",

  async run(client, message) {
    const db = require('quick.db')
    const bool = db.fetch(`adv_${message.guild.id}`)


    if (bool === false || bool === null) {
      db.set(`adv_${message.guild.id}`, true)

      const systemon = new Discord.MessageEmbed()
        .setTitle('✅ | The advertisement system has been **enabled** in this server!')
        .setColor('#3ECE05')
        .setDescription('You can now send ads in this server anywhere!');
      message.channel.send(systemon);
      return
    }

    if (bool === true) {
      db.set(`adv_${message.guild.id}`, false)
      const systemoff = new Discord.MessageEmbed()
        .setTitle('⛔ | The advertisement has been **disabled** in this server!')
        .setColor("#B00404")
        .setDescription('You now can not send ads in any channels!');
      message.channel.send(systemoff);
      return
    }
  }
}
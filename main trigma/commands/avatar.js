const Discord = require('discord.js');


module.exports = {
    name: "avatar",
    description: "bob!",


async run(client, message, args) {
    if (message.mentions.users.size) {
        let member = message.mentions.users.first();
        if (member) {
          const emb = new Discord.MessageEmbed()
            .setImage(member.displayAvatarURL({ dynamic: true }))
            .setTitle(member.username);
          message.channel.send(emb);
        } else {
          message.channel.send("Couldn't find specified user!")
        }
      } else {
        const emb = new Discord.MessageEmbed()
          .setImage(message.author.displayAvatarURL({ dynamic: true }))
          .setTitle(message.author.username)
        message.channel.send(emb)
      }
    }
}
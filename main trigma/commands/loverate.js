const Discord = require('discord.js');

module.exports = {
  name: "loverate",
  description: "bob!",

  async run(client, message, args) {
    const member = message.mentions.members.first();

    const love = Math.random() * 100;
    const loveIndex = Math.floor(love / 10);
    const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

    const embed = new Discord.MessageEmbed()
      .setColor("#ffb6c1")
      .addField(`☁ **${message.author.username}** loves **${message.author.username}** this much:`,
        `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

    message.channel.send(embed);
  }
}
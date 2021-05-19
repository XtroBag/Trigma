const Discord = require('discord.js');

module.exports = {
    name: "nickname",
    description: "bob!",


    async run(client, message, args) {
      const member = message.mentions.members.first();

      if (!member) return message.reply("Please specify a member!");
  
      const arguments = args.slice(1).join(" ");
  
      if (!arguments) return message.reply("Please specify a nickname!");
  
      try {
        member.setNickname(arguments);
      } catch (err) {
        console.log(err);
        message.reply(
          "I do not have permission to set " + member.toString() + " nickname!"
        );
      }
    },
  };
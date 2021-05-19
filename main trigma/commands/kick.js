const Discord = require("discord.js")

module.exports = {
    name: "kick",
    description: "bob!",

    async run(client, message, args) {
        if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) {
            return message.channel.send(
              "You need the ``KICK_MEMBERS`` permission!"
            );
          }
      
          if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(
              "I need the ``KICK_MEMBERS`` permission!"
            );
          }
      
          if (message.mentions.users.size === 0) {
            return message.channel.send("You need to specify a user to kick!");
          }
      
          let banMember = message.mentions.members.first();
          if (!banMember) {
            return message.channel.send('User not found!');
          }
      
          const member = message.guild.member(banMember);
      
          if (banMember.id === message.author.id) {
            return message
              .reply('You cant kick yourself!')
              .then(m => m.delete({ timeout: 5000 }));
          }
      
          banMember.ban().then(member => {
            message.channel.send(
              `${member.displayName} has been successfully kicked!`
            );
          });
}}
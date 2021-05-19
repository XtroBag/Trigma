const Discord = require("discord.js")

module.exports = {
    name: "ban",
    description: "bob!",

    async run(client, message, args) {
        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
            return message.channel.send(
              'You need the ``BAN_MEMBERS`` permission!'
            );
          }
      
          if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(
              "I need the ``BAN_MEMBERS`` permission!"
            );
          }
      
          if (message.mentions.users.size === 0) {
            return message.channel.send("You need to specify a user to ban!");
          }
      
          let banMember = message.mentions.members.first();
          if (!banMember) {
            return message.channel.send('User not found!');
          }
      
          const member = message.guild.member(banMember); 
      
          if (banMember.id === message.author.id) {
            return message
              .reply('You cant ban yourself!')
              .then(m => m.delete({ timeout: 5000 }));
          }
      
          banMember.ban().then(member => {
            message.channel.send(
              `${member.displayName} has been successfully banned!`
            );
          });
}}
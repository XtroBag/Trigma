const Discord = require('discord.js');
const db = require('quick.db')

module.exports = class Features {
    static Adv(client) {
        client.on('message', message => {
          if (message.author.bot) return;
            if (message.channel.type === 'dm' || message.author.bot) return

            const bool = db.fetch(`adv_${message.guild.id}`)



            if (bool === true) {
              if (message.author.bot) return;
                if (message.content.includes('discord.gg')) {
                    message.delete()
                    return message.channel.send('Please do not advertise here!').then((m) => m.delete({
                        timeout: 4000
                    }));
                }
            }

        });



    }


}
const Discord = require("discord.js");

module.exports = {
    name: "listbans",
    description: "bob!",

    async run(client, message, args) {
        message.guild.fetchBans().then(bans => {

            const bansembed = new Discord.MessageEmbed().setTitle(`Amount of bans: ${bans.size} `);

            if (message.author.bot) {
                exampleEmbed.setColor('RANDOM');
            }

            message.channel.send(bansembed)
        })

    }
}
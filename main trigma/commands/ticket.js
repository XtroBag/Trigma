const Discord = require('discord.js');


module.exports = {
    name: "ticket",
    description: "bob",

    async run(client, message, args) {
        const ticket = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Ticket system')
        .setURL('')
        .setAuthor('')
        .setDescription('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n Click the reaction \n -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
        .setThumbnail('')
        .setImage('')
        .setTimestamp()
        .setFooter('Ticket setup');
        let sent = await message.channel.send(ticket)
        sent.react('🎫');







    }
}




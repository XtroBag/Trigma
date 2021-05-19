const Discord = require('discord.js');


module.exports = {
    name: "slap",
    description: "bob!",

async run(client, message) {
const member = message.mentions.members.first();

if (!member) return message.reply("Please specify a member!");

const messages = ['slaps you', 'wanted to slap you so hard','is so pissed off at you right now']

const photos = ['https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif','https://media.giphy.com/media/k1uYB5LvlBZqU/giphy.gif','https://media.giphy.com/media/jTU09JLRaYCt2/giphy.gif','https://media.giphy.com/media/m6etefcEsTANa/giphy.gif','https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif','https://media.giphy.com/media/LB1kIoSRFTC2Q/giphy.gif','https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif','https://media.giphy.com/media/RXGNsyRb1hDJm/giphy.gif','https://media.giphy.com/media/a7HKjDb3UJ0kM/giphy.gif'];


    message.channel.send({embed: { 
        color: 'RANDOM', description: ` ${message.author.username} ` + messages[Math.floor(Math.random() * messages.length)] +  ` ${member.displayName} `, 
        image:  {
            url: photos[Math.floor(Math.random() * photos.length)]
        }
    }});

}}
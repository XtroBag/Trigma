const Discord = require('discord.js');


module.exports = {
    name: "kiss",
    description: "bob!",

async run(client, message) {
const member = message.mentions.members.first();

if (!member) return message.reply("Please specify a member!");

const messages = ['Give a huge kiss', 'shows their love to','loves you so much']

const photos = ['https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif','https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif','https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif','https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif','https://media.giphy.com/media/kU586ictpGb0Q/giphy.gif','https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif','https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif','https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif','https://media.giphy.com/media/l1J9Ed7r0BM7FBeIo/giphy.gif'];


    message.channel.send({embed: { 
        color: 'RANDOM', description: ` ${message.author.username} ` + messages[Math.floor(Math.random() * messages.length)] +  ` ${member.displayName} `, 
        image:  {
            url: photos[Math.floor(Math.random() * photos.length)]
        }
    }});

}}


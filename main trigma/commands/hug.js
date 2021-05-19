const Discord = require('discord.js');


module.exports = {
    name: "hug",
    description: "bob!",

async run(client, message) {
const member = message.mentions.members.first();

if (!member) return message.reply("Please specify a member!");

const messages = ['Give you a hug', 'shows their effection','wants to hug you so hard']

const photos = ['https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif','https://media.giphy.com/media/GMFUrC8E8aWoo/giphy.gif','https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif','https://media.giphy.com/media/YpueTEU32wnss/giphy.gif','https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif','https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif','https://media.giphy.com/media/143v0Z4767T15e/giphy.gif','https://media.giphy.com/media/wnsgren9NtITS/giphy.gif','https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif'];


    message.channel.send({embed: { 
        color: 'RANDOM', description: ` ${message.author.username} ` + messages[Math.floor(Math.random() * messages.length)] +  ` ${member.displayName} `, 
        image:  {
            url: photos[Math.floor(Math.random() * photos.length)]
        }
    }});

}}
const canvacord = require("canvacord");
const Discord = require('discord.js')

module.exports = {
    name: "invert",
    description: "some shit",


    async run(client, message, args) {

const user = message.mentions.users.first() || message.author;

let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

const image = await canvacord.Canvas.invert(avatar);
const canvacorddumb = new Discord.MessageAttachment(image, "invert.png")

message.channel.send(canvacorddumb);

}}
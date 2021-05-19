const canvacord = require("canvacord");
const Discord = require('discord.js')

module.exports = {
    name: "rainbow",
    description: "some shit",


    async run(client, message, args) {

const user = message.mentions.users.first() || message.author;

let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

const image = await canvacord.Canvas.rainbow(avatar);
const canvacorddumb = new Discord.MessageAttachment(image, "rainbow.png")

message.channel.send(canvacorddumb);

}}
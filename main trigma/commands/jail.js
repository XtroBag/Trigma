const canvacord = require("canvacord");
const Discord = require('discord.js')

module.exports = {
    name: "jail",
    description: "some shit",


    async run(client, message, args) {

const user = message.mentions.users.first() || message.author;

let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

const image = await canvacord.Canvas.jail(avatar);
const canvacorddumb = new Discord.MessageAttachment(image, "jail.png")

message.channel.send(canvacorddumb);

}}
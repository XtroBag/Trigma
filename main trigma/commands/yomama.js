const Discord = require("discord.js");
const fetch = require('node-fetch');
const yoMamma = require('yo-mamma').default;

module.exports = {
    name: "yomama",
    description: "bob!",

 async run(client, message, args) {
    let insult;
     
    // get random joke
    insult = yoMamma()

    message.channel.send({embed: {
        color: 3447003,
        description: `${insult}`
      }});
}}
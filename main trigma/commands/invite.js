const Discord = require("discord.js");


module.exports = {
    name: "invite",
    description: "bob!",


    async run(client, message, args) {
    const bicon = client.user.displayAvatarURL;
    
    const inviteEmbed = new Discord.MessageEmbed()
    .setDescription("[**Invite Me**](https://discord.com/api/oauth2/authorize?client_id=836395464462696468&permissions=8&scope=bot)")
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setTimestamp();
       
    message.channel.send(inviteEmbed);

    }
}

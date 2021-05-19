const Discord = require("discord.js")


module.exports = {
    name: "slot",
    description: "bob",

    async run(client, message, args) {
        let slots = ["💚", "💙", "🤎"];
        let result1 = Math.floor((Math.random() * slots.length));
        let result2 = Math.floor((Math.random() * slots.length));
        let result3 = Math.floor((Math.random() * slots.length));
        let name = message.author.displayName;
        let icon = message.author.displayAvatarURL;

        if (slots[result1] === slots[result2] && slots[result3]) {
            let embed = new Discord.MessageEmbed()
                .setFooter('You won!', icon)
                .setTitle(':slot_machine: Slots :slot_machine:')
                .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
                .setColor(0xF4E842)
            message.channel.send(embed);

        } else {
            let embed2 = new Discord.MessageEmbed()
                .setFooter('You lost!', icon)
                .setTitle(':slot_machine: Slots :slot_machine:')
                .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
                .setColor(0xF4E842)
            message.channel.send(embed2);
        }
    }
}
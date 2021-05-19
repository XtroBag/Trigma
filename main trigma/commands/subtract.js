const { MessageEmbed } = require('discord.js') 

module.exports = {
  name: 'subtract',
  callback: (message, args) => { 
    const num1 = +args[0] 
    const num2 = +args[1] 

    if (!num1) return message.channel.send(`You need to specify 2 **numbers.**`)
    if (!num2) return message.channel.send(`You need to specify 2 **numbers.**`)
    
if(isNaN(num1)) return message.channel.send(`The first number you entered is not a number!`);

if(isNaN(num2)) return message.channel.send(`The second number you entered is not a number!`) 

    message.channel.send(`The answer is **${num1 - num2}**.`) 
  }
} 
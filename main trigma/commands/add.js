module.exports = {
    name: 'add',
    description: "Add cmd",
    minArgs: 2,
    maxArgs: 2,
    expectedArgs: '<num1> <num2>',
    callback: (message, arguments) => {
      const num1 = +arguments[0]
      const num2 = +arguments[1]
  
      if (!num1) return message.channel.send(`You need to specify 2 **numbers.**`)
      if (!num2) return message.channel.send(`You need to specify 2 **numbers.**`)
    
  if(isNaN(num1)) return message.channel.send(`The first number you entered is not a number!`);
  
  if(isNaN(num2)) return message.channel.send(`The second number you entered is not a number!`) 
  
  
      message.channel.send(`The sum is **${num1 + num2}**.`)
    }
  }
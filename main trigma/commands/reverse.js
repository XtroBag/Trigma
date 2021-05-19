module.exports = {
    name: "reverse",
    description: "Reverses the given text",

     async run (client, message, args) {
        const text = args.join(" ")
        if(!text) return message.reply("Please give something to reverse!")
        if (message.content.includes(`@`)) return message.channel.send("No pings")
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        message.channel.send(result)
    }
}


// var, let, const 
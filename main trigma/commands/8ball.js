const Discord = require("discord.js")

module.exports = {
    name: "8ball",
    description: "bob!",

    async run(client, message, args) {
        let answers = [
            'As I see it, yes.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            `Don't count on it.`,
            `It is certain.`,
            `It is decidedly so.`,
            `Most likely.`,
            `My reply is no.`,
            `My sources say no.`,
            `Outlook not so good.`,
            `Outlook good.`,
            `Reply hazy, try again.`,
            `Signs point to yes.`,
            `Very doubtful.`,
            `Without a doubt.`,
            `Yes.`,
            `Yes - definitely.`,
            `You may rely on it.`
        ] // This array holds the 20 original answers that was found on the icosahedron dice inside the magic 8 ball !
        const BallNumber = Math.floor(Math.random() * answers.length); // We have to select a number that ranges in from 0 to the number of elements in the answers array
        const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec)); //New promise to create a delay (in milliseconds) to wait before moving on.
        msg = await message.channel.send(`Hmm, you ask a difficult questions!\nLet me think about it!`); // This sends a message to the channel and we await so we can edit the message later
        await delay(4000); //We await for 4 seconds before an answer is given
        msg.edit(answers[BallNumber]); //This simply edits the previously sent message, and instead gives you an answer from the answers array.

    }
}

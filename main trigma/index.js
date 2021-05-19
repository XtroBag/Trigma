const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const mongoose = require('mongoose');
const path = require('path');
const db = require('quick.db')
const fs = require('fs');
const { CommandFormatError } = require('discord.js-commando');
const { Adv } = require('./features/antiadd');

client.snipes = new Map();


client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./commands/')
  .filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

client.on('ready', async () => {
  console.log('+---------------------------------------+--------------------------+')
  console.log('| ⚠️  The bot is online                  | 🔹 Commands loaded!      |')
  console.log(`| 📣 Logged in as: ${client.user.tag}™️         | 🔹 Events loaded!        |`)
  console.log(`| ⚙️  Bot Servers: ${client.guilds.cache.size} servers             | 🔹 Node modules loaded!  |`)
  console.log(`| 🧤 Bot users: ${client.users.cache.size} people              | 🔹 Package.json loaded!  |`)
  console.log(`| ☂️  Bot Uptime: ${client.uptime}                      | 🔹                       |`)
  console.log(`| 👑  Bot ping: ${client.ws.ping}                      | 🔹                       |`)
  console.log('+---------------------------------------+ 🔹                       +-------------------------------------------------------------------------------------------------------+')
  console.log(`                                        | 🔸 This bot was created by Darkshark Please do not steal or copy and or break anything created or the bot will not work right.\n                                        |     Credits go to Darkshark and to Error404 for making this bot with teamwork!\n                                        |     If you need any help getting this bot to work please contact darkshark on discord at Darkshark#4000 thanks`)
  console.log(`                                        +----------------------------------------------------------------------------------------------------------------------------------+`)
  client.user.setPresence({
    status: "idle",
    activity: {
      name: `T!help - ${client.guilds.cache.size} servers`,
      type: "WATCHING",
      url: "https://twitch.tv/whatever",
    }
  });

Adv(client);

});
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

client.on('message', msg => {
  if (msg.channel.type == "dm") {
    msg.author.send("Hey! I'm Trigma and this is my auto Dm message, But anyways i'm a new discord bot and i'm so glad to meet you! \n So i'm gonna tell you some info about me. So i'm developed by ``Darkshark`` and i took very long to make. \n Anyways i have alot of fun commands you can use later on when you go back to your server! \n If you would like to see my commands list and more run the command ``T!help``.");
    return
  }
});


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



client.on('message', message => {
  const prefix = db.get(`guild_${message.guild.id}_prefix`) || 'T!';
  let messageArray = message.content.split(' ');
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}purge`) {
    if (message.deletable) {
      message.delete();
    }

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.channel.send('You need the ``MANAGE_MESSAGES`` permission!').then(m => m.delete(5000));
    }

    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
      return message.channel.send('I need the ``MANAGE_MESSAGES`` permission!').then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
      return message.channel.send('This is not a number, or it is 0.').then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
      return message.channel.send("The maximum amount of messages I can delete is 100!")
    } else {
      deleteAmount = parseInt(args[0]);
    }
    message.channel.send('Messages Deleted.');

    message.channel
      .bulkDelete(deleteAmount, true)
      .catch(err => message.reply(`Something went wrong: ${err}`));
  }
});


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


client.on('message', message => {
  const prefix = db.get(`guild_${message.guild.id}_prefix`) || 'T!';
  if (!message.guild) return;
  if (message.channel.type == 'dm') return;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.substring(prefix.length).split(' ');

  if (message.content.startsWith(`${prefix}setprefix`)) {
    if (!message.member.hasPermission('MANAGE_GUILD'))
      return message.channel.send(
        'mate u need manage guild'
      );
    if (!args[1]) return message.channel.send('no prefix specified');
    if (args[1].length > 3)
      return message.channel.send(
        'gotto be less dan 3 characters'
      );

    if (args[1] == 'T!') db.delete(`guild_${message.guild.id}_prefix`);
    db.set(`guild_${message.guild.id}_prefix`, args[1]);
    return message.channel.send(
      `prefix has been set **${args[1]}**`
    );

    if (id === null) {
      console.log('id is null');
    }
  }
});



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


client.on("message", message => {
  if (!message.guild) return;
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith(`T!eval`)) {
    if (message.author.id !== "809606228300005377") return;
    const clean = text => {
      if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      return text;
    }
    try {

      const code = args.slice().join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), { code: "xl" });
    } catch (err) {
      console.log(`${clean(err)}`);
message.channel.send("error :(, but error404 is god")
    }
  }
});

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

client.on('messageDelete', function(message, guild) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  });
});

client.on('message', message => {
  const prefix = db.get(`guild_${message.guild.id}_prefix`) || 'T!';

  if(message.content.startsWith(`${prefix}snipe`)) {

    const msg = client.snipes.get(message.channel.id);
    if (!msg) return message.channel.send("no snipe rip")

    const SEmbed = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
    .setDescription(msg.content)
    .setColor("RANDOM")
    .setImage(msg.image)
    message.channel.send(SEmbed);
  }
})






//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

client.on('message', message => {
  const prefix = db.get(`guild_${message.guild.id}_prefix`) || 'T!';
if (message.content.includes("836395464462696468")) {
message.channel.send(`Prefix is ${prefix}`)
}
});


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

client.on('message', message => {
  const prefix = db.get(`guild_${message.guild.id}_prefix`) || 'T!';
  if (!message.guild) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    client.commands.get('ping').run(client, message, args);
  }
  if (command === 'serverinfo') {
    client.commands.get('serverinfo').run(client, message, args);
  }
  if (command === 'kick') {
    client.commands.get('kick').run(client, message, args);
  }
  if (command === 'ban') {
    client.commands.get('ban').run(client, message, args);
  }
  if (command === '8ball') {
    client.commands.get('8ball').run(client, message, args);
  }
  if (command === 'invite') {
    client.commands.get('invite').run(client, message, args);
  }
  if (command === 'kill') {
    client.commands.get('kill').run(client, message, args);
  }
  if (command === 'pepe') {
    client.commands.get('pepe').run(client, message, args);
  }
  if (command === 'rate') {
    client.commands.get('rate').run(client, message, args);
  }
  if (command === 'yomama') {
    client.commands.get('yomama').run(client, message, args);
  }
  if (command === 'weather') {
    client.commands.get('weather').run(client, message, args);
  }
  if (command === 'lenny') {
    client.commands.get('lenny').run(client, message, args);
  }
  if (command === 'userinfo') {
    client.commands.get('userinfo').run(client, message, args);
  }
  if (command === 'cow') {
    client.commands.get('cow').run(client, message, args);
  }
  if (command === 'icon') {
    client.commands.get('icon').run(client, message, args);
  }
  if (command === 'avatar') {
    client.commands.get('avatar').run(client, message, args);
  }
  if (command === 'help') {
    client.commands.get('help').run(client, message, args);
  }
  if (command === 'nickname') {
    client.commands.get('nickname').run(client, message, args);
  }
  if (command === 'reset') {
    client.commands.get('reset').run(client, message, args);
  }
  if (command === 'slot') {
    client.commands.get('slot').run(client, message, args);
  }
  if (command === 'unban') {
    client.commands.get('unban').run(client, message, args);
  }
  if (command === 'stats') {
    client.commands.get('stats').run(client, message, args);
  }
  if (command === 'meme') {
    client.commands.get('meme').run(client, message, args);
  }
  if (command === 'howgay') {
    client.commands.get('howgay').run(client, message, args);
  }
  if (command === 'rps') {
    client.commands.get('rps').run(client, message, args);
  }
  if (command === 'add') {
    client.commands.get('add').callback(message, args);
  }
  if (command === 'subtract') {
    client.commands.get('subtract').callback(message, args);
  }
  if (command === 'multiply') {
    client.commands.get('multiply').callback(message, args);
  }
  if (command === 'divide') {
    client.commands.get('divide').callback(message, args);
  }
  if (command === 'addrole') {
    client.commands.get('addrole').run(client, message, args);
  }
  if (command === 'slowmode') {
    client.commands.get('slowmode').run(client, message, args);
  }
  if (command === 'listbans') {
    client.commands.get('listbans').run(client, message, args);
  }
  if (command === 'deepfry') {
    client.commands.get('deepfry').run(client, message, args);
  }
  if (command === 'coinflip') {
    client.commands.get('coinflip').run(client, message, args);
  }
  if (command === 'reverse') {
    client.commands.get('reverse').run(client, message, args);
  }
  if (command === 'trigger') {
    client.commands.get('trigger').run(client, message, args);
  }
  if (command === 'trash') {
    client.commands.get('trash').run(client, message, args);
  }
  if (command === 'shit') {
    client.commands.get('shit').run(client, message, args);
  }
  if (command === 'sharpen') {
    client.commands.get('sharpen').run(client, message, args);
  }
  if (command === 'rip') {
    client.commands.get('rip').run(client, message, args);
  }
  if (command === 'rainbow') {
    client.commands.get('rainbow').run(client, message, args);
  }
  if (command === 'jail') {
    client.commands.get('jail').run(client, message, args);
  }
  if (command === 'invert') {
    client.commands.get('invert').run(client, message, args);
  }
  if (command === 'deep') {
    client.commands.get('deep').run(client, message, args);
  }
  if (command === 'moji') {
    client.commands.get('moji').run(client, message, args);
  }
  if (command === 'ticket') {
    client.commands.get('ticket').run(client, message, args);
  }
  if (command === 'antiadv') {
    client.commands.get('antiadv').run(client, message, args);
  }
  if (command === 'kiss') {
    client.commands.get('kiss').run(client, message, args);
  }
  if (command === 'hug') {
    client.commands.get('hug').run(client, message, args);
  }
  if (command === 'slap') {
    client.commands.get('slap').run(client, message, args);
  }
  if (command === 'hack') {
    client.commands.get('hack').run(client, message, args);
  }
  if (command === 'lockdown') {
    client.commands.get('lockdown').run(client, message, args);
  }
  if (command === 'unlock') {
    client.commands.get('unlock').run(client, message, args);
  }
  if (command === 'loverate') {
    client.commands.get('loverate').run(client, message, args);
  }
});




client.login("ODM2Mzk1NDY0NDYyNjk2NDY4.YIdX-g.Id35o2HayhR54W8iy79qssTz8fQ"
)
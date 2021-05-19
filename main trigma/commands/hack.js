const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms');

module.exports = {
    name: "hack",
    description: "bob!",


async run (client, message, args) {
    function wait(ms){
        let start = new Date().getTime();
        let end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    const hackperson = message.mentions.users.first()
    if (!hackperson) return message.channel.send("Please mention the person you want to HACK.")
    
    const Name = ['Tom', 'Jeff', 'Bob', 'Bill', 'Jack', 'Asher', 'Shawn', 'ErrorDaGod', 'Mary', 'Jill', 'Ace'] 

    const Age = ['23','84','12','4','17','16','15','13','39','53','10','73','45','31','67','5']

    const Email = ['erroristhegoat@gmail.com', 'supeveryone@yahoo.com', 'therrealerror404official@gmail.com', 'bobbyiscool@gmail.com', 'lololololllllll@gmail.com', 'trigma=god@gmail.com', 'bobbbybybyby@gmail.com', 'quinn@hotmail.com','chronos@hotmail.com','tkrotchko@sbcglobal.net','wagnerch@verizon.net','nweaver@mac.com','blixem@optonline.net','burniske@aol.com','sriha@hotmail.com','rkobes@me.com','yzheng@sbcglobal.net','webinc@comcast.net','quantaman@gmail.com']  
    
    const PhoneNumber = ['(264) 384-7239','(987) 259-0422','(488) 361-4529','(281) 849-4140','(976) 808-1564','(451) 250-1714','(620) 799-5582','(517) 937-2751']

    const Location = ['7609 Mckinley Ave', '680 E 47th St', '909-1/2 E 49th St', '9400 S Normandie Ave', '6736 S Sherbourne Dr', '5723 Morgan Ave']

    let user = message.author;
    let timeout = 60000;
    let author = await db.fetch(`hack_${user.id}`);
    

    if (author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));
      const embed = new Discord.MessageEmbed()
        .setDescription(`⏱ This command is on cooldown. ||error is cool||`)
        .setColor("RANDOM")
        message.delete()
      return message.channel.send(embed).then(msg => msg.delete({timeout: 4000}));
    } else {


    const hacking = new Discord.MessageEmbed()
    .setTitle(`Hacking ${hackperson.username}`)
    .setColor('RANDOM')


    message.channel.send(hacking).then(message => {
    message.edit(hacking.setTitle("Status 0%"))
   
    message.edit(hacking.setTitle("Status 7%"))

    message.edit(hacking.setTitle("Status 8%"))

    message.edit(hacking.setTitle("Status 9%"))

    message.edit(hacking.setTitle("Status 12%"))

    message.edit(hacking.setTitle("Status 14%"))

    message.edit(hacking.setTitle("Status 17%"))

    message.edit(hacking.setTitle("Status 20%"))

    message.edit(hacking.setTitle("Status 21%"))

    message.edit(hacking.setTitle("Status 22%"))

    message.edit(hacking.setTitle("Status 26%"))

    message.edit(hacking.setTitle("Status 29%"))

    message.edit(hacking.setTitle("Status 33%"))

    message.edit(hacking.setTitle("Status 36%"))

    message.edit(hacking.setTitle("Status 40%"))

    message.edit(hacking.setTitle("Status 47%"))

    message.edit(hacking.setTitle("Status 51%"))

    message.edit(hacking.setTitle("Status 55%"))

    message.edit(hacking.setTitle("Status 59%"))

    message.edit(hacking.setTitle("Status 62%"))

    message.edit(hacking.setTitle("Status 68%"))

    message.edit(hacking.setTitle("Status 70%"))

    message.edit(hacking.setTitle("Status 74%"))

    message.edit(hacking.setTitle("Status 80%"))

    message.edit(hacking.setTitle("Status 82%"))

    message.edit(hacking.setTitle("Status 85%"))

    message.edit(hacking.setTitle("Status 89%"))

    message.edit(hacking.setTitle("Status 93%"))

    message.edit(hacking.setTitle("Status 97%"))

    message.edit(hacking.setTitle("Status 100%"))

    let name = Name[Math.floor(Math.random() * Name.length)]
    
    let loc = Location[Math.floor(Math.random() * Location.length)]
    
    let ph = PhoneNumber[Math.floor(Math.random() * PhoneNumber.length)]
    
    let email = Email[Math.floor(Math.random() * Email.length)]
    
    let age = Age[Math.floor(Math.random() * Age.length)]
    
    message.edit(hacking.setTitle(`${hackperson.username} Info\n Name: ${name} \n Age: ${age} \n Email: ${email}\n Phone number: ${ph} \n Location: ${loc}`))
})

  db.set(`hack_${user.id}`, Date.now())

}

}}
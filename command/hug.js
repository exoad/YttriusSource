const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js');
module.exports = {
  config: {
    name: `hug`,
    category: '',
    description: '',
    aliases: []
  },
  run: async (bot, message, args) => {
    try {
      let rety = message.mentions.users.first();
      //word filter
      if (message.content.includes('nigger') || message.content.includes('nigger') || message.content.includes('shit') || message.content.includes('@everyone') || message.content.includes('@here') || message.content.includes('fucker') || message.content.includes('fuckers') || message.content.includes('dipshit') || message.content.includes('nigers') || message.content.includes('Nigger') || message.content.includes('niger') || message.content.includes('shithead') || message.content.includes('bitch')) 
      {
        message.channel.send("Uh no.").then(r =>{
          r.delete({ timeout: 5000 })
        })
      }
      else if (!rety || rety == undefined) return message.channel.send('Hmm I didn\'t find that user. Try again.').then(r => { r.delete({ timeout: 5000 }) })
      const { url } = await fetch('https://nekos.life/api/hug').then(m => m.json())
      
      const embed = new MessageEmbed()
        .setDescription(`**${message.author.username} hugs ${message.mentions.members.first().user.username}!** ( つ´∀｀)つ`)
        .setImage(`${url}`)
        .setColor("RANDOM")

      message.channel.send({ embed })
      /*

      else if (rety == '709776016314204283' && message.guild.id != '792194075599568926') return message.channel.send('You hugged my developer! He hugs you back **⊂( ・▽・⊂)**')
      else if (rety == message.author.id) return message.repl("Here have a hug (っ∩_∩)っ");
      else{
        message.channel.send(`${message.author.username} ( つ´∀｀)つ ${rety.join(" ")}`)
      }
      */
    } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred\nPlease try again later.`);
    }
  }
}

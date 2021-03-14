const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
const Discord = require('discord.js');
module.exports = {
  config: {
    name: `encode`,
    description: '',
    category: '',
    aliases: [``]
  },
  run: async (bot, message, args) => {
    try {
        const rety = message.content.split(" ").slice(3);
        if (message.content.includes('nigger') || message.content.includes('nigger') || message.content.includes('shit') || message.content.includes('@everyone') || message.content.includes('@here') || message.content.includes('fucker') || message.content.includes('fuckers') || message.content.includes('dipshit') || message.content.includes('nigers') || message.content.includes('Nigger') || message.content.includes('niger') || message.content.includes('shithead') || message.content.includes('bitch')) {
          return bot.channels.cache.get('806244836633608202').send(`**Message Author:** ${message.author.id}\n**Guild** ${message.guild.id}\n**Parameter entered**${rety}`);
        }
        if(!args[0] || !rety || rety == undefined || args[0] == undefined || args[1] == undefined || !args[1]){
          const embed = new MessageEmbed()
          .setTitle("How to use encode Command")
          .setDescription('How to use the `encode` command\nIf you have further issues, you can join my discord server: `https://discord.gg/QwNTcpyZbF`')
          .addField("Avaliable Parameters:", "`base64, binary, decodebinary, decode64`")
          .addField("Directional Controller", "`to, from`\nThese are used to determine if you are going to \"encode\" or \"decode\"")
          .addField("Command Formatting", "`>>encode [directional controller] [parameter] [user message]`")
          .addField("Example Usage", "`>>encode tobinary hello world!`")
          
          message.channel.send({ embed });
        } else if(args[1] == "base64" && args[0] == "to"){
          const { body } = await superagent.get(`https://some-random-api.ml/base64?encode=${rety.join("%20")}`);
          const embed = new MessageEmbed()
          .setTitle("Encode to Base64")
          .addField("Original Message", `${rety.join(" ")}`)
          .addField("Encoded Form", body.base64)

          message.channel.send({ embed })
        } else {
          const embed = new MessageEmbed()
          .setTitle("How to use encode Command")
          .setDescription('How to use the `encode` command\nIf you have further issues, you can join my discord server: `https://discord.gg/QwNTcpyZbF`')
          .addField("Avaliable Parameters:", "`tobase64, tobinary, todecodebinary, todecode64`")
          .addField("Command Formatting", "`>>encode [parameter] [user message]`")
          .addField("Example Usage", "`>>encode tobinary hello world!`")
          
          message.channel.send({ embed });
        }
    } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
  }
}

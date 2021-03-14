const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
module.exports = {
  config: {
    name: `crypto`,
    description: '',
    category: '',
    aliases: [``]
  },
  run: async (bot, message, args) => {
    try {
      const { body } = await superagent.get('https://random-data-api.com/api/crypto/random_crypto');
      const embed = new MessageEmbed()
      .setTitle("Crypto Raw")
      .setDescription("Might work, might not.\nNote this is not data mining nor is this crypto mining")
      .addField('MD5', body.md5, true)
      .addField("SHA1", body.sha1, true)
      .addField("SHA256", body.sha256, true)

      message.channel.send({ embed })
    } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
  }
}

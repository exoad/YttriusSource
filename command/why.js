const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
module.exports = {
  config: {
    name: `why`,
    category: '',
    description: '',
    aliases: [`why?`, `wtf?`]
  },
  run: async (bot, message, args) => {
    try {
      const { body } = await superagent
        .get('https://nekos.life/api/v2/why');

      const embed = new MessageEmbed()
        .setTitle('Why? Why? Why?')
        .setDescription(body.why)
        .setColor("RANDOM")

      message.channel.send({ embed })
    } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred!\nThis error has been marked in the devlogs and will be reviewed soon\n*Sorry for the inconvenience.`);
      bot.channels.cache.get('').send(`${err.stack}`)
    }
  }
}

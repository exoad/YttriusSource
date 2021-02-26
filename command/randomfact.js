const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
module.exports = {
  config: {
    name: `fact`,
    category: '',
    description: '',
    aliases: [`coolfact`, `randomfact`, `dumbfact`]
  },
  run: async (bot, message, args) => {
    try {
      const { body } = await superagent
        .get("https://nekos.life/api/v2/fact");

      const embed = new MessageEmbed()
        .setTitle('Random Facts')
        .setDescription(body.fact)
        .setColor("RANDOM")
        .setTimestamp()

      message.channel.send({ embed }).then(m => {
      })
    } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred!\nThis error has been marked in the devlogs and will be reviewed soon\n*Sorry for the inconvenience.`);
      bot.channels.cache.get('806244787191414824').send(`${err.stack}`)
    }
  }
}

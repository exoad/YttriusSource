//https://foodish-api.herokuapp.com/api
const superagent = require('superagent');
const { MessageEmbed } = require('discord.js');
module.exports = {
  config: {
    name: `food`,
    description: '',
    category: '',
    aliases: [``]
  },
  run: async (bot, message, args) => {
    try {
      const { body } = await superagent.get('https://foodish-api.herokuapp.com/api');
      const embed = new MessageEmbed()
      .setTitle("Random Food")
      .setImage(`${body.image}`)
      .setColor("RANDOM")

      message.channel.send({ embed });
    } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
  }
}

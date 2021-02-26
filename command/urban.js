const urban = require('urban');
const { MessageEmbed } = require('discord.js');
module.exports = {
  config: {
      name: `urban`,
      category: '',
      description: '',
      aliases: [`define`, `urbandefine`]
  },
  run: async (bot, message, args) => {
    try {
      if (args.length < 1) {
        return message.channel.send('Error, nothing entered.');
    }
    let word = args.join(' ');

    urban(word).first(json => {
        if (!json) {
            return message.channel.send('Found nothing.');
        }
        const embed = new MessageEmbed()
            .setTitle(`Word: ${json.word}`)
            .setDescription(`**Definition:** ${json.definition}`)
            .setColor('#16a5b8')
            .addField('Upvotes', json.thumbs_up, true)
            .addField('Downvotes', json.thumbs_down, true)
            .addField('Requested by:', `${message.author.tag}`, true)
            .setTimestamp(new Date())
            .setFooter(`Defined by Urban Dictionary`);

        message.channel.send({ embed });
    });
  } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
  }
}
}

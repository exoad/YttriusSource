const Discord = require('discord.js');
module.exports = {
  config: {
      name: `bann`,
      description: 'Joke ban command, but be careful',
      category: 'Fun',
      aliases: [`van`]
  },
  run: async (bot, message, args) => {
    try {
      let banreason = args.slice(1).join(' ');
      let banMember = message.mentions.members.first();
      if (!message.mentions.users.first())
      return message.channel.send("Found no one to bann");
      if(!banreason) banreason = 'This is legit 101 :D';
      const embed = new Discord.MessageEmbed()
      .setColor(14839836)
      .setTitle(`${banMember.user.tag} has been banned by ${message.author.tag}`)
      .setImage('https://images-ext-1.discordapp.net/external/PKqRHYWVHo8gYsZZu3KNhYes5Vm8m9Uj1Rr90MIBjd0/https/media.tenor.com/images/56bc17988e02b6534d824f82ffc8236a/tenor.gif?width=209&height=212')
      .setFooter('legit 101')
      .setDescription(`**Reason:** ${banreason}`)
      .setTimestamp()
    message.channel.send({ embed })
    } catch (err) {
        console.log(err)
        return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
  }
}

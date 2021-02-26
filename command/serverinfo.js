const { MessageEmbed } = require('discord.js');
module.exports = {
  config: {
    name: `serverinfo`,
    aliases: [`svinfo`]
  },
  run: async (bot, message, args) => {
    if (!message.guild) {
      message.reply('This command can only be used in a guild.')
    }
    const d = new Date(message.guild.createdTimestamp);
    let day;
    let month;
    if (d.getDate() < 10) {
      day = `0${d.getDate()}`;
    } else {
      day = d.getDate();
    }
    if (d.getMonth() + 1 < 10) {
      month = `0${d.getMonth() + 1}`;
    } else {
      month = d.getMonth();
    }

    const guild = message.guild;
    const members = message.guild.members.cache.array();
    const Embed = new MessageEmbed()
      .setTitle(`Guild name: ` + message.guild.name)
      .setThumbnail(message.guild.iconURL())
      .addFields([
        { name: "Guild-Owner:", value: `<@${guild.ownerID}>`, inline: true },
        { name: "Server-Region:", value: guild.region, inline: true },
        { name: "Member Count:", value: guild.memberCount, inline: true },
        { name: "Verification Level:", value: message.guild.verificationLevel, inline: true },
        { name: "Channel Count:", value: message.guild.channels.cache.size, inline: true },
        { name: "Roles:", value: message.guild.roles.cache.size, inline: true },
      ])
      .setFooter(
        `Server ID: ${guild.id} | Server Created: ${day}/${month}/${d.getFullYear()}`
      );

    message.channel.send(Embed);
    //error handler and listener
    const token = process.env.token;
    bot.on("error", () => { bot.login(token) });
  }
}
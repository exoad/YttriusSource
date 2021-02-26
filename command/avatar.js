const Discord =  require('discord.js');
module.exports = {
    config: {
        name: `avatar`,
        aliases: [`av`],
        description: 'Get the avatar of a user',
        category: 'Info'
    },
    run: async (bot, message, args) => {
        let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
        if (message.mentions.users.size > 0) {
          const embed = new Discord.MessageEmbed()
            .setColor(10812580)
            .setTitle(`:white_check_mark: ${message.mentions.users.first().username}\'s Profile Picture:`)
            .setImage(`${avatar}`)
            message.channel.send({embed});
        } else {
          const embed = new Discord.MessageEmbed()
          .setColor(10812580)
          .setTitle(`:white_check_mark: ${message.author.username}\'s Profile Picture:`)
          .setImage(`${avatar + "?size=2048"}`)
          message.channel.send({embed});
        }
            //error handler and listener
    const { token } = require(`/mnt/chromeos/removable/Jack/yttrius_bot/import/botconfig.json`);
    bot.on("error", () => { bot.login(token) });
    }
};
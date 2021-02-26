const { MessageEmbed } = require("discord.js");
module.exports = {
    config: {
        name: `gulag`,
        category: 'Fun',
        description: 'Send someone to gulag',
        aliases: [``]
    },
    run: async (bot, message, args) => {
        if (!message.mentions.users.first())
        return message.channel.send("Who are you going to send to gulag dum dum?");

        if (message.mentions.users.first() == message.author) {
          message.reply("You can't send yourself to gulag");
        } else {
          const Embed = new MessageEmbed()
            .setTitle(
              `${message.author.tag} has sent ${
                message.mentions.users.first().tag} to gulag:`)
            .setImage('https://dyatlovpass.com/resources/340/Gulag-01-cropped.jpg')
            message.channel.send(Embed);
        }
            //error handler and listener

            const { token } = require(`/mnt/chromeos/removable/Jack/yttrius_bot/import/botconfig.json`);
    bot.on("error", () => { bot.login(token) });
        }
}
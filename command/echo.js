const Discord = require('discord.js');
module.exports = {
    config: {
        name: `echo`,
        category: 'Fun',
        description: 'Echo your message!',
        aliases: [``]
    },
    run: async (bot, message, args) => {
        let rety = message.content.split(" ").slice(1);
    message.delete().catch(error => {
        if (error.code !== Discord.Constants.APIErrors.UNKNOWN_MESSAGE) {
            message.channel.send("Error | Invalid Permissions Met")
        }
    });
    if (message.content.includes("@everyone")  || message.content.includes("nigger") || message.content.includes("@here") || message.content.includes("niggers") || message.content.includes("porn") || message.content.includes("bitch")) return message.reply("Wtf are you trying to make me do");
    message.channel.send(rety.join(" ")).cleanContent;
        //error handler and listener

        const { token } = require(`/mnt/chromeos/removable/Jack/yttrius_bot/import/botconfig.json`);
        bot.on("error", () => { bot.login(token) });
    }
}

module.exports = {
    config: {
        name: `embedecho`,
        category: 'Fun',
        description: 'Say something in embed format!',
        aliases: [``]
    },
    run: async (bot, message, args) => {
        let userMessage = args.slice(0).join(' ');
        if(!userMessage) return message.reply("``Error`` Apply a message!")
        message.delete().catch(error => {
            if (error.code !== Discord.Constants.APIErrors.UNKNOWN_MESSAGE) {
                message.channel.send("Error | Invalid Permissions Met")
            }
        });
        const embed = {
            "description":`${userMessage}`,
            "color": "RANDOM"
        }
        message.channel.send({ embed })
            //error handler and listener

            const { token } = require(`/mnt/chromeos/removable/Jack/yttrius_bot/import/botconfig.json`);
    bot.on("error", () => { bot.login(token) });
    }
}
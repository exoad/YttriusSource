module.exports = {
    config: {
        name: `invite`,
        category: 'Info',
        description: 'Invite this bot to your own server(s) Or join the support server!',
        aliases: [`yttrius`]
    },
    run: async (bot, message, args) => {
        const embed = {
                "title": "**Invite Yttrius to your own discord!**",
                "description": "You can use this link: ``https://discord.com/api/oauth2/authorize?client_id=792193904614703114&permissions=2147483639&scope=bot``\n\nYou can also join the support Discord Server!: ``https://discord.gg/wTAcPZxwqq``\n\nYou can also vote for me here: ``https://top.gg/bot/792193904614703114/vote``",
                "color": 2420855,
                "footer": {
                  "text": "Thanks! ~exoad#4166"
                }
        }
        message.reply({embed});
            //error handler and listener
    const { token } = require(`/mnt/chromeos/removable/Jack/yttrius_bot/import/botconfig.json`);
    bot.on("error", () => { bot.login(token) });
    }
}
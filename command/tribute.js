module.exports = {
    config: {
        name: `tribute`,
        category: 'Others',
        description: 'Pay tribute to our long lost Flash',
        aliases: [`tri`]
    },
    run: async (bot, message, args) => {
        const embed =
            {
                "title": "**Rest in peace...Flash 1996 - 12/31/2020**",
                "description": "\"It has been a truly exciting and fun journey, hasn't it?\"\n\n*Thank you for the memories <3* \n https://youtu.be/IUmITwV8icI",
                "author": {
                  "name": "RIP Flash",
                  "icon_url": "https://elearningindustry.com/wp-content/uploads/2015/08/flash-logo1.png"
                },
                "color": 13506576,
                "footer": {
                  "text": "We will miss you.",
                  "icon_url": "https://elearningindustry.com/wp-content/uploads/2015/08/flash-logo1.png"
                },
                "image": "https://elearningindustry.com/wp-content/uploads/2015/08/flash-logo1.png"
            }
        message.channel.send({ embed }).then(embed => {
            embed.react("🇫")

        })
            //error handler and listener
            const { token } = require(`/mnt/chromeos/removable/Jack/yttrius_bot/import/botconfig.json`);
    bot.on("error", () => { bot.login(token) });
    }
}
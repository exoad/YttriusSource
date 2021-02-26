const Discord = module.require("discord.js");
module.exports = {
    config: {
        name: `triggered`,
        category: 'Fun',
        description: 'Triggered',
        aliases: [``]
    },
    run: async (bot, message, args) => {
        const user = message.mentions.members.first();
        if (!user) {
            return message.channel.send("Who is triggered?");
        }
        const avatar = user.user.displayAvatarURL({ size: 2048, format: "png" });

        await message.channel.send({ files: [{ attachment: `https://some-random-api.ml/canvas/triggered?avatar=${avatar}`, name: 'file.png' }] })

          //error handler and listener
    const { token } = require(`/mnt/chromeos/removable/Jack/yttrius_bot/import/botconfig.json`);
    bot.on("error", () => { bot.login(token) });
    }
}
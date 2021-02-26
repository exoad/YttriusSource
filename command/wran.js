module.exports = {
    config: {
        name: `wran`,
        category: 'Fun',
        description: 'A meme warn command',
        aliases: [``]
    },
    run: async (bot, message, args) => {
        let reason = args.slice(1).join(' ');
        if (!message.mentions.users.first())
        return message.channel.send("Mention someone first");
        else {
            message.channel.send(`${message.author} has wranned ${message.mentions.users.first()}. \n **Reason**: ${reason}`)
        }
    //error handler and listener
    const { token } = require(`/mnt/chromeos/removable/Jack/yttrius_bot/import/botconfig.json`);
    bot.on("error", () => { bot.login(token) });
    }
}

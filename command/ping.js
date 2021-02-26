const talkedRecently = new Set();

module.exports = {
    config: {
        name: `ping`,
        description: 'See the bot latency!',
        category: 'Info'
    },
    
    run: async (bot, message, args) => {
        if (talkedRecently.has(message.author.id)) {
            message.reply("Woah! Relax! This command is on cooldown for 1 minute! ");
    } else {

        message.channel.send(":ping_pong: Pinging...").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;
            var clientPing = Math.round(bot.pi);
  
            m.edit(`>>> **<:connection_orange:792583821748731934> Pong!** \n Bot Ping: ${ping}ms`);
        });

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
        //error handler and listener
        const { token } = require(`/mnt/chromeos/removable/Jack/yttrius_bot/import/botconfig.json`);
        bot.on("error", () => { bot.login(token) });
    }
}
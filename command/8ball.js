module.exports = {
    config: {
        name: `8ball`,
        category: 'Fun',
        description: '8ball, yea',
        aliases: []
    },
    run: async (bot, message, args) => {
        if(message.content.includes == 'cyberpunk' || message.content.includes == '2077') return message.channel.send('Think you already know the answer >:D');
        function doRandHT() {
            var rand = [
            ":8ball: As I see it, yes.", 
            ":8ball: Ask again later.", 
            ":8ball: Better not tell you now.", 
            ":8ball: Cannot predict now.", 
            ":8ball: Concentrate and ask again.", 
            ":8ball: Don’t count on it.", 
            ":8ball: It is certain.", 
            ":8ball: It is decidedly so.", 
            ":8ball: Most likely.", 
            ":8ball: My reply is no.", 
            ":8ball: My sources say no.", 
            ":8ball: Outlook not so good.", 
            ":8ball: Outlook good.", 
            ":8ball: Reply hazy, try again.", 
            ":8ball: Signs point to yes.", 
            ":8ball: Very doubtful.", 
            ":8ball: Without a doubt.", 
            ":8ball: Yes.", 
            ":8ball: Yes – definitely.", 
            ":8ball: You may rely on it."
        ]
            return rand[Math.floor(Math.random()*rand.length)];
        }
        const embed = {
          description: doRandHT(),
          color: 16777215,
          }
          message.reply({embed})
              //error handler and listener
    const { token } = require(`/mnt/chromeos/removable/Jack/yttrius_bot/import/botconfig.json`);
    bot.on("error", () => { bot.login(token) });
    }
}
const Discord = module.require("discord.js");
const flip = require("flip");
module.exports = {
    config: {
        name: `flip`,
        category: 'Fun',
        description: 'Flip your text upside down :D',
        aliases: [`textflip`]
    },
    run: async (bot, message, args) => {
        if (args.length < 1) {
            return message.channel.send("Message can't be blank")
          }
      args.reverse();
      var flipped = [];
      
      args.forEach((arg) => {
          flipped.push(flip(arg));
      });
      
      message.channel.send(flipped.join(" "));

          //error handler and listener
    const { token } = require(`/mnt/chromeos/removable/Jack/yttrius_bot/import/botconfig.json`);
    bot.on("error", () => { bot.login(token) });
    }
}
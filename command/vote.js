const { developer } = require('/mnt/chromeos/removable/Jack/yttrius_bot/config.json');
module.exports = {
    config: {
        name: `vote`,
        category: 'Fun',
        description: 'A simple vote command',
        aliases: []
    },
    run: async (bot, message, args) => {
        try {
            if (message.author.id != `${developer}`) return message.reply("This command is currently down for maintenance!\nFor a list of down commands use `>>down`")
            let rety = message.content.split(" ").slice(1);
            if(!rety) return message.channel.send("`Error!` Argument of `user_message` is missing!\n> **Usage** `>>vote {user_message}`")
            else if (rety == undefined) { return message.channel.send("`Error!` Your message content contained invalid characters!\nPlease try again...").then(m => m.delete('5000'))}
        } catch(error) {
            messa.channel.send('**Something went wrong!**\n1. Invalid Characters!\n2.Hyperlinks?\n3.Internal Error!\n*The devs will be notified shortly! Sorry for the inconvenience*');
            bot.channels.get('806245388095979560').message.channel.send(`${error}`);
            console.log(error);
        }
    }
}
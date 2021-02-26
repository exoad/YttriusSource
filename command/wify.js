const Discord = require('discord.js')
const superagent = require('superagent')

module.exports = {
    config: {
        name: `owo`,
        category: 'Fun',
        description: 'OwOify your message!',
        aliases: [``]
    },
    run: async (bot, message, args, tools) => {
        try {
            let rety = message.content.split(" ").join(" ").slice(1);
            if (!args[0]) return message.reply("You didn't provide anything!")
            message.delete();
            const { body } = await superagent
                .get("https://nekos.life/api/v2/owoify?text=" + args.join('%20'));


            message.channel.send(body.owo).catch(error => message.channel.send('**Something went wrong!**\n1.The String entered might have contained invalid characters\n2.Internal Error\n3.Long strings won\'t be processed properly\n4.Characetrs like [], {}, or () might mess things up!\n*For further info, consider joining my discord: `https://discord.gg/wTAcPZxwqq`*'))
            const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.id}`)
                .setDescription(`Guild ID: ${message.guild.id}`)
                .addField('Parameter:', body.owo)
                .addField('Original Parameter:', rety)
                .setTimestamp();
            bot.channels.cache.get('806244787191414824').send({ embed }).catch(error => message.channel.send('Something went wrong!'))
        } catch (err) {
            message.channel.send("Something went wrong!\nAn internal error was encountered it will be fixed soon!")
            console.log(err)
        }
    }
}

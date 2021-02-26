const {MessageEmbed, version} = require('discord.js');
module.exports = {
    config: {
        name: `botinfo`,
        description: `Get info on the bot!`,
        catgory: 'Info',
        aliases: [`systeminfo`,`os`,`binfo`]
    },
    run: async (bot, message, args) => {
            try {

                let totalSeconds = (bot.uptime / 1000);
                let days = Math.floor(totalSeconds / 86400);
                totalSeconds %= 86400;
                let hours = Math.floor(totalSeconds / 3600);
                totalSeconds %= 3600;
                let minutes = Math.floor(totalSeconds / 60);
                let seconds = Math.floor(totalSeconds % 60);
                let uptime = `${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;

                const embed = new MessageEmbed()
                  .setColor(15257933)
                  .setTitle('Yttrius is currently operating on: ``Temporary Server``')
                  .setDescription('Yttrius can be moved from the Primary to the Temporary Server depending on the situations.')
                  .addField('``System Specs:``', `**System Memory:** ${(process.memoryUsage().heapUsed / 4096 / 4096).toFixed(2)}MBS/4,096 MB\nCPU: Intel(R) Xeon Platinum 8276 @2.20GHz\n**OS:** Linux Debian/Ubuntu (x64)`)
                  .addField("Uptime:", `${uptime}`)
                  .addField('``DiscordJS & NodeJS version``', `**Node.js:** ${process.version}\n**Discord.js:** ${version}`)
                  .addField('``Creator:``', 'exoad#4166')
                  .addField('``Amount of Servers``:', `${bot.guilds.cache.size}`)
                  .setTimestamp();
                message.channel.send(embed);
              } catch (e) {
                console.log(`${e.message}`);
                console.error;
                message.channel.send(`Oh no, an error occurred!\n${e.message}`);
              }
    }   
}
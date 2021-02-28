const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const request = require('node-superfetch');
module.exports = {
  config: {
    name: `gituser`,
    description: '',
    category: '',
    aliases: [``]
  },
  run: async (bot, message, args) => {
    try {
      let rety = args[0];
      if(!rety || rety == undefined || rety == " ") {
        const embed = new MessageEmbed()
        .setTitle('Command Usage')
        .setDescription('Command usage is `>>gituser <username>`\nThis command is to get information on a github user')
        .setTimestamp()

        message.channel.send({ embed });
      } else {
        const { text } = await request.get(`https://api.github.com/users/${rety}`);
        const body = JSON.parse(text);

        const embed = new MessageEmbed()
        .setTitle('Github UserInfo')
        .setDescription(`User Info for user: \`${body.login}\``, true)
        .addField('User ID:', body.id, true)
        .setThumbnail(`${body.avatar_url}`)
        .setURL(`${body.url}`)
        .addField('Client Type:', body.type, true)
        .addField('Site Admin', body.site_admin, true)
        .addField('Company', body.company, true)
        .addField('Blog', body.blog, true)
        .addField('Is up for hire?', body.hireable, true)
        .addField('User Bio', body.bio, true)
        .addField('Twitter', body.twitter_username, true)
        .addField('Public Repos', body.public_repos, true)
        .addField('Public Gists', body.public_gist, true)
        .addField('Followers Count', body.followers, true)
        .addField('Following Count', body.following, true)
        .addField('Account Creation Date', body.created_at, true)
        .addField('Last Update', body.updated_at, true)
        .setTimestamp()
        .setColor()

        message.channel.send({ embed })
      }

    } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
  }
}

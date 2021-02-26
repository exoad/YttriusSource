const flags = {
  DISCORD_EMPLOYEE: `:<:yttrius_discord:802601271713988638> \`Discord Employee\``,
  DISCORD_PARTNER: `<:yttrius_partnered:802601271684366346> \`Partnered Server Owner\``,
  BUGHUNTER_LEVEL_1: `<:yttrius_bughunter:802601556633452594>\`Bug Hunter (Level 1)\``,
  BUGHUNTER_LEVEL_2: `<:yttrius_bughunter:802601556633452594> \`Bug Hunter (Level 2)\``,
  HYPESQUAD_EVENTS: `<:yttrius_events:802601271684235264> \`HypeSquad Events\``,
  HOUSE_BRAVERY: `<:yttrius_bravery:802599936579469392> \`House of Bravery\``,
  HOUSE_BRILLIANCE: `<:yttrius_brilliance:802599936356515871> \`House of Brilliance\``,
  HOUSE_BALANCE: `<:yttrius_balance:802599936385744916> \`House of Balance\``,
  EARLY_SUPPORTER: `<:yttrius_early:802600221061283890> \`Early Supporter\``,
  TEAM_USER: 'Team User',
  SYSTEM: 'System',
  VERIFIED_BOT: `<:yttrius_bot:802600345045172254><a:8740_developer_transparent:802599936939917352> \`Verified Bot\``,
  VERIFIED_DEVELOPER: `<a:8740_developer_transparent:802599936939917352> \`Early Verified Bot Developer\``
};

const status = {
  online: `:green_circle: \`Online\``,
  idle: `:yellow_circle: \`Idle\``,
  offline: `:black_circle: \`Offline/Invisible\``,
  dnd: `:red_circle: \`Do Not Disturb\``
};
const moment = require('moment');
const { MessageEmbed } = require('discord.js');
module.exports = {
  config: {
    name: `userinfo`,
    aliases: [`uinfo`]
  },
  run: async (bot, message, args) => {
    /*if(message.author.id != '709776016314204283') return message.reply('Hey there!\nThis command is currently being improved/worked on!\nJoin my discord server for further info: ``https://discord.gg/wTAcPZxwqq``\n*Sorry for the inconvenience*\n||To Check for all down commands use >>down||') */
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });

    var user;
    if (!member && !args[0]) {
      user = message.author;
    } else if (args[0] && !member) {
      if (isNaN(args[0])) return message.reply("I could not find a user with that ID!");
      user = bot.users.get(args[0]);
      if (!user) return message.reply("I could not find that user!");
    } else {
      user = member;
    }

    var game;
    if (!user.presence.game) {
      game = "No Status Detected";
    } else {
      game = user.presence.game.name;
    }
    const embed = new MessageEmbed()
      .setTitle(`User Info for ${user.user.tag}`)
      .setDescription('Requested by:' + message.author.tag)
      .addField('Username:', member, true)
      .addField('User ID:', member.id, true)
      .addField('User Status:', `${status[member.user.presence.status]}`, true)
      .addField('Highest Guild Role:', member.roles.highest, true)
      .addField('Color Roles:', member.roles.color || '`None`', true)
      .addField('Joined this guild on:', moment(member.joinedAt).format('MMM DD YYYY'), true)
      .addField('User bot:', member.user.bot ? "True" : "False", true)
      .addField('Application status:', `${game}`, true)
      .addField('Joined Discord on:', moment(member.user.createdAt).format('MMM DD YYYY'), true)
      .setThumbnail(`${avatar}`)
      .setTimestamp()
      .setFooter('YttriusProfiles')
      .setColor("RANDOM");

    message.channel.send({ embed })
    //error handler and listener
    const token = process.env.token;
    bot.on("error", () => { bot.login(token) });
  },
};
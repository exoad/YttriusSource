module.exports = {
  config: {
    name: `token`,
    aliases: [`gimmetoken`, `authtoken`, `authkey`, `bottoken`]
  },
  run: async (bot, message, args) => {
    message.reply('no, go away');
  }
}
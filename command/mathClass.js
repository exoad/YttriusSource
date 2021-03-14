const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
module.exports = {
  config: {
    name: `concan`,
    description: '',
    category: '',
    aliases: [``]
  },
  run: async (bot, message, args) => {
    try {
        if(!args[0] || args[0] == undefined){
            const embed = new MessageEmbed()
            .setTitle("How to use Evaluate Command")
            .setDescription("This command is much more simpler and is much more directed towards general math (e.g. Addition, Square Root, etc.)\nIf you have further questions, consider joining my discord server: `https://discord.gg/QwNTcpyZbF`")
            .addField("Avaliable Parameters", "**In general using the parameter `evaluate(expression)` is a good choice**\n\n\n`add(value, value) | sqrt(value, power) | cos(value) | log(value) | derivative(values) | round(values) | atan2(values)` etc.")
            .addField("Other uses", "Though this is much more simplified, this command can still handle cosine, sine, etc.\nThey can be achieved with `{operation}(value)`\nExample: `cos(1)`")
            .addField("Example", "Input: `>>evaluate add(2,3)`\nOutput: `5`\n\nInput: `>>evaluate sqrt(2,3)`\nOutput: `8`")
  
            message.channel.send({ embed })
        } else {
        const body = await superagent.get('https://api.mathjs.org/v4/?expr='+args.join(' '));
        const embed = new MessageEmbed()
        .setTitle("Evaluation")
        .addField("Input", args[0])
        .addField("Output", body.text)
        

        message.channel.send({ embed })

        } if(args[0] == "?" || args[0] == "help"){
          const embed = new MessageEmbed()
          .setTitle("How to use Evaluate Command")
          .setDescription("This command is much more simpler and is much more directed towards general math (e.g. Addition, Square Root, etc.)\nIf you have further questions, consider joining my discord server: `https://discord.gg/QwNTcpyZbF`")
          .addField("Avaliable Parameters", "**In general using the parameter `evaluate(expression)` is a good choice**\n\n\n`add(value, value) | sqrt(value, power) | cos(value) | log(value) | derivative(values) | round(values) | atan2(values)` etc.")
          .addField("Other uses", "Though this is much more simplified, this command can still handle cosine, sine, etc.\nThey can be achieved with `{operation}(value)`\nExample: `cos(1)`")
          .addField("Example", "Input: `>>evaluate add(2, 3)`\nOutput: `5`\n\nInput: `>>evaluate sqrt(2, 3)`\nOutput: `8`")

          message.channel.send({ embed })
        }
    } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
  }
}
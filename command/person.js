//https://pipl.ir/v1/getPerson
const Discord = require('discord.js');
const superagent = require('superagent');
const { MessageEmbed } = require('discord.js');
module.exports = {
  config: {
    name: `leakmyinfo`,
    description: '',
    category: '',
    aliases: [``]
  },
  run: async (bot, message, args) => {
    try {
      const { body } = await superagent.get('https://pipl.ir/v1/getPerson');

      const embed  = new MessageEmbed()
      .setTitle('Some Random Info (BETA)')
        .setDescription('BETABETABETABETABETABETABETABETABETABETA')
        .addField(`Education`, `Certificate: ${body.person.education.certificate}\nUniversity: ${body.person.education.university}`)
        .addField('Family', `Children(s): ${body.person.marriage.children}\nMarried: ${body.person.marriage.married}\nSpouse: ${body.person.marriage.spouse_name}`)
        .addField('CyberData', `Email: ${body.person.online_info.email}\nIP Address: ${body.person.online_info.ip_address}\nIPv6: ${body.person.online_info.ipv6_address}\nPassword: ${body.person.online_info.password}\nPassword (md5): ${body.person.online_info.password_md5}\nUser Agent: ${body.person.online_info.user_agent}\nUsername: ${body.person.online_info.username}`)
        .addField('Personal Info', `Age: ${body.person.personal.age}\nBlood Type: ${body.person.personal.blood}\nPlace of Birth: ${body.person.personal.born_place}\nNumber: ${body.person.personal.cellphone}\nCity of residence: ${body.person.personal.country}\nEye Color: ${body.person.personal.eye_color}\nBiological Father: ${body.person.personal.father_name}\nGender: ${body.person.personal.gender}\nHeight: ${body.person.personal.height}\nLast name: ${body.person.personal.last_name}`)
        .addField('System', `National Code: ${body.person.personal.national_code}\nSystem ID: ${body.person.personal.system_id}`)
        .addField('Work', `Country Code: ${body.person.work.country_code}\nInsurance: ${body.person.work.inusrance}\nPosition: ${body.person.work.position}\nSalary: ${body.person.work.salary}`)
        .setFooter('legit 101')
        .setColor("RANDOM")


        message.channel.send({ embed })
      } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
  }
}

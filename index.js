/*
  Created by: exoad#4166
  Operated by Yttrium Terminus
  2020-2021
  Destructive code will be instantly terminated
  To use this code and contribute, please contact exoad through discord: https://discord.gg/wTAcPZxwqq
*/

const Discord = require('discord.js');
const client = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
var keepalive = require('./keep_alive.js');

client.once(`ready`, () => {
    console.log (`${client.user.tag} is now online!`)
});
    /*let activities = [`nothing`],i = 0;
  
    setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"LISTENING",url:"https://github.com/"}), 50000)
    */

var token = require('./botconfig.js');
var { prefix } = require('./botconfig.js')
client.on('message', message => {
  if(messag.content == ``)
})




client.login(token)
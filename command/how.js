const { MessageEmbed } = require('discord.js');
module.exports = {
    config: {
        name: `how`,
        aliases: []
    },
    run: async (bot, message, args) => {
      try{
	    let rety = args[0];
		if(!rety || rety == undefined) {
            const embed = new MessageEmbed()
            .setTitle('Required field missing!')
            .setDescription('The command `how` requires certain arguments/parameters to wok properly!\nRead below for more info or join my support discord: `https://discord.gg/b8zwdwy2Hz`')
            .addField('Arguments', 'Arguments are supplied after the main command name.\nFor example `>>how iq`, the argument here is `iq`')
            .addField('`gay`', ':rainbow_flag: How gay are you?')
            .addField('`iq`', `How smart are you?`)
            .addField('`cool`', 'Are you cool? How cool are you?')
            .addField('`penis`', "How- Yea no")
						.addField('`ugly`', ":moyai: How ugly are you?")
            .setFooter("In no way shall these be taken seriously ;D")
            .setColor("RED")

            message.channel.send({ embed })
        } else if(rety == "penis") {
            let userChoice = args[1];
            if(!userChoice) { userChoice = message.author.username; }
            function doRandHT() {
                var rand = [
                            "8=D", 
                            "8==D", 
                            "8===D", 
                            "8====D",
                            "8=====D", 
                            "8======D", 
                            "8=======D", 
                            "8========D", 
                            "8=========D", 
                            "8==========D", 
                            "8===========D", 
                            "8============D", 
                            "8=============D", 
                            "8==============D", 
                            "8===============D", 
                            "8================D", 
                            "8=================D", 
                            "8==================D", 
                            "8===================D", 
                            "8====================D",
                            "woman"
                        ]
                return rand[Math.floor(Math.random()*rand.length)];
            }
            const embed = {
                title: `${userChoice}'s PP`,
                description: ""+doRandHT()+"",
                color: "RANDOM",
                }
            message.channel.send({ embed });
        } else if(rety == 'gay'){
					if(message.author.id != "648006855745863682" && message.author.id != "716668062140465234") {
						
            let userChoice = args[1];
            if(!userChoice) { userChoice = message.author.username; }
            function doRandHT() {
                var rand = ["0", "1", "2", "16", "4", "5", "19", "20", "22", "25", "27", "31", "34", "28", "52", "41", "32", "33", "54", "38", "36", "89", "100", "44", "67", "69", "89", "49", "79", "74", "73", "83", "86", "99", "98", "100"];
      
                return rand[Math.floor(Math.random()*rand.length)];
            }
            const embed = {
              "description": ":rainbow_flag: You are " + doRandHT() + "% gay",
              "color": "RANDOM",
              "title": `${userChoice}'s gay percentage`,
            }
            message.channel.send({ embed })
					} 
					if(message.author.id == "716668062140465234"){
						const embed = new MessageEmbed()
						.setTitle(`${message.author.username}'s gay percentage'`)
						.setDescription(":rainbow_flag: You are 50% gay")
						.setColor("RANDOM")
						message.channel.send({ embed })
					}
					if(message.author.id == "648006855745863682"){
						const embed = new MessageEmbed()
						.setTitle(`${message.author.username}'s gay percentage'`)
						.setDescription(":rainbow_flag: You are 100% gay")
						.setColor("RANDOM")

						message.channel.send({ embed })
					}
        } else if(rety == 'iq'){
            let userChoice = args[1];
            if(!userChoice) { userChoice = message.author.username; }
            function doRandHT() {
                var rand = [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "8",
                    "10",
                    "15",
                    "16",
                    "17",
                    "20",
                    "21",
                    "22",
                    "24",
                    "26",
                    "28",
                    "30",
                    "45",
                    "40",
                    "100",
                    "133",
                    "210",
                    "145",
                    "112",
                    "120",
                    "101",
                    "99",
                    "400",
                    "103",
                    "403",
                    "50103",
                    "Infinite",
                    "156",
                    "146",
                    "137",
                    "118",
                    "105",
                    "104",
                    "76",
                    "69",
                    "98",
                    "902",
                    "179",
                    "39",
                    "50",
                    "54",
                    "48"
                ]
                return rand[Math.floor(Math.random()*rand.length)];
            }
            const embed = {
                "description":`${userChoice}'s iq is `+doRandHT(),
                "color":"RANDOM",
                "title":`${userChoice}'s IQ`
            }
            message.channel.send({ embed });
        } else if(rety == 'cool'){
            let userChoice = args[1];
            if(!userChoice) { userChoice = message.author.username; }
            function doRandHT(){
                var rand = ["0", "1", "2", "16", "4", "5", "19", "20", "22", "25", "27", "31", "34", "28", "52", "41", "32", "33", "54", "38", "36", "89", "100", "44", "67", "69", "89", "49", "79", "74", "73", "83", "86", "99", "98", "100"]
                return rand[Math.floor(Math.random()*rand.length)];
            }
            const embed = {
                "description":`${userChoice} is `+doRandHT()+"% cool",
                "color":"RANDOM",
                "title":`${userChoice}'s coolness`
            }
            message.channel.send({ embed })
        } else if(rety == "ugly"){
					  let userChoice = args[1];
            if(!userChoice) { userChoice = message.author.username; }
            function doRandHT(){
                var rand = ["0", "1", "2", "16", "4", "5", "19", "20", "22", "25", "27", "31", "34", "28", "52", "41", "32", "33", "54", "38", "36", "89", "100", "44", "67", "69", "89", "49", "79", "74", "73", "83", "86", "99", "98", "100"]
                return rand[Math.floor(Math.random()*rand.length)];
            }
            const embed = {
                "description":`:moyai: ${userChoice} is `+doRandHT()+"% ugly",
                "color":"RANDOM",
                "title":`${userChoice}'s ugliness`
            }
            message.channel.send({ embed })
				} else {
            const embed = new MessageEmbed()
            .setTitle('Required field missing!')
            .setDescription('The command `how` requires certain arguments/parameters to wok properly!\nRead below for more info or join my support discord: `https://discord.gg/b8zwdwy2Hz`')
            .addField('Arguments', 'Arguments are supplied after the main command name.\nFor example `>>how iq`, the argument here is `iq`')
            .addField('`gay`', ':rainbow_flag: How gay are you?')
            .addField('`iq`', `How smart are you?`)
            .addField('`cool`', 'Are you cool? How cool are you?')
            .addField('`penis`', "How- Yea no")
            .setFooter("In no way shall these be taken seriously ;D")
            .setColor("RED")

            message.channel.send("**That argument doesn't seem to exist! Check below:**\n")
            message.channel.send({ embed })
        }
      } catch(error) {
        message.channel.send("Something went wrong!")
        console.log(error)
        bot.channels.get('806244787191414824').message.channe.send(`${error}`)
      }
    }
}

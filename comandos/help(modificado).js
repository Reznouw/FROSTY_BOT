const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
    name: "help",
    aliases: ["help"],
    run: async (client, message, args) => {
        //--------------------------------------S T A R T---------------------------------------

        //--------------------EMBEDS------------------------

        const embed = new Discord.MessageEmbed()
            .setTitle("FROSTY")
            .setColor("RANDOM")
            .setDescription(`Hola Soy Frosty, un gusto conocerlos, soy un bot enfocado en Diversión y estoy aqui para servirles.
・。・。・。・。・。・。
**CATEGORIAS:**
────────
•**Información**
────────
•**Diversión**
────────
•**Interacción**
────────
・。・。・。・。・。・。
Para observar los categorías presionar encima de cada uno:
            
            `)
            .setFooter(" FROSTY ", client.user.avatarURL())
            .setImage('https://i.pinimg.com/originals/f6/56/eb/f656eb54d79d6e2e4c1cb1e5320c6ad6.png')
            .setThumbnail(message.client.user.displayAvatarURL())
            .setTimestamp()
            .setURL("https://i.pinimg.com/originals/df/1b/91/df1b91f79f0c347c1b29ef60b35e6e1b.png")

        const embed1 = new Discord.MessageEmbed()
            .setTitle("FROSTY")
            .setColor("RANDOM")
            .addField("Información", " `help, botinfo, user, avatar, ping, invite, sabiasque, mianimal, anecdota, mathset` ")
            .addField("─━━━━━━⊱❄⊰━━━━━━─", " Para mostrar algún comando colocar: ` f,[Comando] ` ")
            .setFooter(" FROSTY ", client.user.avatarURL())
            .setImage('https://i.pinimg.com/originals/95/90/84/9590842eb2d6562a7c5c1f5f1f4eeeae.png')
            .setThumbnail(message.client.user.displayAvatarURL())
            .setTimestamp()
            .setURL("https://bots.discordthings.com/bot/802529653712748554")

        const embed2 = new Discord.MessageEmbed()
        .setTitle("FROSTY")
        .setColor("RANDOM")
        .addField("Diversión", " `hola, comoestas , elmasguapo, lamasguapa, amigos, dance, kill, 9ball, impostor, mipoder, ship, ban`")
        .addField("─━━━━━━⊱❄⊰━━━━━━─", " Para mostrar algún comando colocar: ` f,[Comando] ` ")
        .setFooter(" FROSTY ", client.user.avatarURL())
        .setImage('https://i.pinimg.com/originals/ff/66/8b/ff668b09f1bd59b27943f51cfa3bf527.png')
        .setThumbnail(message.client.user.displayAvatarURL())
        .setTimestamp()
        .setURL("https://bots.discordthings.com/bot/802529653712748554")

        const embed3 = new Discord.MessageEmbed()
        .setTitle("FROSTY")
        .setColor("RANDOM")
        .addField("Interacción", " `hug, chocolat, uwu, flowers, kiss, sing, pat, poke, smug `")
        .addField("─━━━━━━⊱❄⊰━━━━━━─", " Para mostrar algún comando colocar: ` f,[Comando] ` ")
        .setFooter(" FROSTY ", client.user.avatarURL())
        .setImage('https://i.pinimg.com/originals/2d/fc/08/2dfc08adb1ab4ab6f7b087b14a96d2f3.png')
        .setThumbnail(message.client.user.displayAvatarURL())
        .setTimestamp()
        .setURL("https://bots.discordthings.com/bot/802529653712748554")

        const embed4 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`
El quien lo lee esto es wap@, tiene que saber que l@ quiero 💖    
NOTA:Por ahora no hay más porque no me alcanzo tiempo xD`);

        //--------------------EMBEDS------------------------

        //--------------------Buttons------------------------

        let button1 = new MessageButton()
            .setLabel(`Información`)
            .setID(`help1`)
            .setEmoji(`📚`)
            .setStyle("blurple");

        let button2 = new MessageButton()
            .setLabel(`Diversión`)
            .setID(`help2`)
            .setEmoji(`🎭`)
            .setStyle("blurple");

        let button3 = new MessageButton()
            .setLabel(`Interacción`)
            .setID(`help3`)
            .setEmoji(`👄`)
            .setStyle("blurple");

        let button4 = new MessageButton()
            .setLabel(`Devpeloper`)
            .setID(`help4`)
            .setEmoji(`🔩`)
            .setStyle("blurple");

        let row = new MessageActionRow()
            .addComponents(button1, button2, button3, button4);

        //--------------------Buttons------------------------

        const MESSAGE = await message.channel.send(embed, row);

        const filter = (button) => button.clicker.user.id === message.author.id
        const collector = MESSAGE.createButtonCollector(filter, { time: 60000 });

        collector.on('collect', async (b) => {

            if (b.id == "help1") {

                MESSAGE.edit(embed1, row);
                await b.reply.defer()

            }

            if (b.id == "help2") {

                MESSAGE.edit(embed2, row);
                await b.reply.defer()

            }

            if (b.id == "help3") {

                MESSAGE.edit(embed3, row);
                await b.reply.defer()

            }

            if (b.id == "help4") {

                MESSAGE.edit(embed4, row);
                await b.reply.defer()

            }


        })

        collector.on('end', (b) => {
            MESSAGE.edit(`Este help menu ha expirado, vuelve a intentarlo.`)
        })

    }
};
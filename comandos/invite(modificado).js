const { MessageEmbed } = require("discord.js")
const disbut = require("discord-buttons");
const { MessageButton, MessageActionRow } = require("discord-buttons");
module.exports = {
  name: "101011",
  alias: ["10101"],
  run: async (client, message, args) => {

    let embed = new MessageEmbed()
      .setTitle("FROSTY")
      .setColor("RANDOM")
      .setDescription(` **Invitación**
      ─━━━━━━⊱:snowflake:⊰━━━━━━─
      Si es que deseas invitarme aqui dejo mi link :hugging:.`)
      .setFooter(" FROSTY ", client.user.avatarURL())
      .setImage('https://i.pinimg.com/originals/00/05/74/0005744a254548fcabc119ad94d3df2f.png')
      .setTimestamp()
      .setURL("https://bots.discordthings.com/bot/802529653712748554")

    let button = new disbut.MessageButton()
      .setStyle('url')
      .setURL('https://discord.com/api/oauth2/authorize?client_id=802529653712748554&permissions=8&scope=bot')
      .setLabel('Invitame!')
      .setEmoji("📎")

    let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setURL('https://discord.gg/VfTUZR3bVZ')
      .setLabel('Mi servidor!')
      .setEmoji("📡")
    let row = new MessageActionRow()
      .addComponents(button, button2);

    message.channel.send(embed, row);
  }
}
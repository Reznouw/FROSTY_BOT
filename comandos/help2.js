const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "diversion",
	alias: ["diversión"],
	run: async(client, message, args) => {
	let embed = new MessageEmbed()
  .setTitle("FROSTY")
    .setColor("RANDOM")
    .addField("Diversión", " `hola, comoestas , elmasguapo, lamasguapa, amigos, dance, kill, 9ball, impostor, mipoder, ship, ban`")
    .addField("─━━━━━━⊱❄⊰━━━━━━─", " Para mostrar algún comando colocar: ` f,[Comando] ` ")
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setImage('https://i.pinimg.com/originals/ff/66/8b/ff668b09f1bd59b27943f51cfa3bf527.png')
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setURL("https://bots.discordthings.com/bot/802529653712748554")
  message.channel.send(embed);
	}
}
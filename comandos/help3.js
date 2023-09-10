const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "interaccion",
	alias: ["interacción"],
	run: async(client, message, args) => {
	let embed = new MessageEmbed()
    .setTitle("FROSTY")
    .setColor("RANDOM")
    .addField("Interacción", " `hug, chocolat, uwu, flowers, kiss, sing, pat, poke, smug `")
    .addField("─━━━━━━⊱❄⊰━━━━━━─", " Para mostrar algún comando colocar: ` f,[Comando] ` ")
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setImage('https://i.pinimg.com/originals/2d/fc/08/2dfc08adb1ab4ab6f7b087b14a96d2f3.png')
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setURL("https://bots.discordthings.com/bot/802529653712748554")
  message.channel.send(embed);
	}
}
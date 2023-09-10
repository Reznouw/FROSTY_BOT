const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "informacion",
	alias: ["información"],
	run: async(client, message, args) => {
	let embed = new MessageEmbed()
  .setTitle("FROSTY")
    .setColor("RANDOM")
    .addField("Información", " `help, botinfo, user, avatar, ping, invite, jumbo, sabiasque, mianimal, anecdota, mathset` ")
    .addField("─━━━━━━⊱❄⊰━━━━━━─", " Para mostrar algún comando colocar: ` f,[Comando] ` ")
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setImage('https://i.pinimg.com/originals/95/90/84/9590842eb2d6562a7c5c1f5f1f4eeeae.png')
    .setTimestamp()
    .setURL("https://bots.discordthings.com/bot/802529653712748554")
  message.channel.send(embed);
	}
}
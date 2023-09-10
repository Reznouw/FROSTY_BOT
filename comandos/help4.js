const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "stil1",
	alias: ["stil1"],
	run: async(client, message, args) => {
  let embed = new MessageEmbed()
    .setTitle("FROSTY")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription("Hola Soy Frosty, un gusto conocerlos, luego de tanto tiempo acabo de desperar de un gran sueño y aqui estoy.")
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setImage('https://i.pinimg.com/originals/df/1b/91/df1b91f79f0c347c1b29ef60b35e6e1b.png')
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setURL("https://i.pinimg.com/originals/df/1b/91/df1b91f79f0c347c1b29ef60b35e6e1b.png")
    .addField("Informacion", " `help, botinfo, user, ping, sabiasque, mianimal, mathset` ")
    .addField("Diversion", " `hola, comoestas , elmasguapo, lamasguapa, amigos, dance, kill, 9ball, anecdota, impostor, mipoder, ship, ban`")
    .addField("Interaccion", " `hug, chocolat, uwu, flowers, kiss, sing, pat, poke, smug `")
    .addField("Nombre del Servidor", message.guild.name, true)
    .addField("Integrantes", message.guild.memberCount, true);
  message.channel.send(embed);
	}
}
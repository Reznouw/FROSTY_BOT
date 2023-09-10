const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "helppp",
	alias: ["helppp"],
	run: async(client, message, args) => {
	let embed = new MessageEmbed()
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
    Para mostrar comandos de una categoría colocar:
    " f,[Categoría] " Ejemplo: f,informacion .
    `)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setImage('https://i.pinimg.com/originals/f6/56/eb/f656eb54d79d6e2e4c1cb1e5320c6ad6.png')
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setURL("https://i.pinimg.com/originals/df/1b/91/df1b91f79f0c347c1b29ef60b35e6e1b.png")
  message.channel.send(embed);
	}
}
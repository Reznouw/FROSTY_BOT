const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "mathset",
	alias: ["mathset"],
	run: async(client, message, args) => { 
    let embed = new MessageEmbed() 
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("RANDOM")
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setDescription(` 
    **Herramientas tecnológicas matématicas**
    ─━━━━━━⊱❄⊰━━━━━━─
    **CALCULADORAS**
    » [Desmos](https://www.desmos.com/calculator?lang=es)
    » [Symbolab](https://es.symbolab.com/solver/linear-equation-calculator)
    » [Matriz](http://es.onlinemschool.com/math/assistance/matrix/determinant/)
    » [Mathsolver](https://mathsolver.microsoft.com/es/algebra-calculator)
    » [Geogebra](https://www.geogebra.org/calculator)
    **Frase**:
    "La innovación es lo que distigue a un líder de los demás" Steve Jobs`)
    message.channel.send(embed)
    }
}
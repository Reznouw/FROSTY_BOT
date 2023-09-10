const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "reglas",
    alias: ["10101"],
	run: async(client, message, args) => {
    const actividad = (`${process.uptime().toFixed(2)}s`)
    let embed = new MessageEmbed()
    .setColor(0x00AE86)
    .setAuthor("FROSTYN ┃ REGLAS DEL SERVIDOR", client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .addField("1. Se respetuoso", " Debes respetar a todos los usuarios, independientemente de tu agrado hacia ellos. Trata a los demás como quieres ser tratado. ")
    .addField("2. Sin lenguaje inapropiado", " El uso de malas palabras debe mantenerse al mínimo. Sin embargo, cualquier lenguaje despectivo hacia cualquier usuario está prohibido. ")
    .addField("3. Sin spam ni flood", " No envíe muchos mensajes pequeños uno tras otro. No interrumpa el chat enviando spam.")
    .addField("4. Sin nombres ofensivos ni fotos de perfil","  No se puede compartir ninguna foto de alguien sin el permiso de otro" )
    .addField("5. Amenazas directas e indirectas"," Las amenazas a otros usuarios, abuso y otras amenazas maliciosas están absolutamente prohibidas y no permitidas. " )
    .addField("5. Respetar los canales"," Respeten los canales del grupo. " )
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .addField("OJO"," Su presencia en este servidor implica la aceptación de estas reglas, incluidos todos los cambios posteriores. " );
    message.channel.send(embed)
    }
}
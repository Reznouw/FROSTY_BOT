const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "user",
	alias: ["userinfo"],
	run: async(client, message, args) => {
    const member = message.mentions.members.first() || message.member
    function formatDate (template, date) {
        var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
        date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
        return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
          return template.split(specs[i]).join(item)
        }, template)
      }
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**INFORMACIÓN DEL USUARIO:**") //Defines la descripcion
    .addField("**🎫 Nombre**:", `> ${ `${`${member.user.tag}`}`}` )//Que envíe el tag del usuario
    .addField("**:dna: ADN**:", `> ${ `${member.user.id}`}` )//Id del usuario
    .addField("**📌 Apodo del usuario**:", `> ${ `${member.nickname !== null }` ? `${member.nickname}` : 'Ninguno'}`, true) //Si tiene o no apodo el usuario dentro del servidor
    .addField("**:tokyo_tower: Fecha de Ingreso al Servidor:**", `> ${ formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt)}`)//La fecha de ingreso del usuario al servidor
    .addField("**📥 Cuenta Creada:**", `> ${ formatDate('DD/MM/YYYY, a las HH:mm:ss', member.user.createdAt)}`)//Cuando fue creada la cuenta
    .addField("**:rosette: Estado**:", `> ${ member.presence.activities[0] ? member.presence.activities[0].state : "Sin estado"}`)//Si esta jugando a algo, que indique el juego
    .addField("**🎖 Roles:**", `> ${ member.roles.cache.map(role => role.toString()).join(", ")}`)//Los roles que posee dicho usuario(Si la cantidad de roles del usuario excede el numero de caracteres que soporta un field, dará un error de sintaxis a la consola, si es así encuentren una manera de hacerlo ustedes mismos)
    .addField("**🚀 ¿Boostea?**:", `> ${ member.premiumSince  ? 'Está boosteando <a:booster:858916521975349258> ' : 'No está boosteando'}`)//si esta o no boosteando el servidor
    .setThumbnail (member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))//y el avatar del usuario
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    message.channel.send(embed)
    }
}
const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "mipoder",
	alias: ["poder"],
	run: async(client, message, args) => {
    const userm = message.mentions.members.first() || message.member
    const poder = ['Lagrimas de acido','Invisibilidad en lo oscuro','Controlar el control','Comunicarse con frutas','Detectar basura ','Encender lamparas','Atraer balas','Leer tu propia mente','Caida de cabello instantanea','Envenjecimiento ultrarapido','Transformarse en laptop','Atraer mala suerte','Superlentitud','Superfuerza por un segundo']
    const aleatorio = poder[Math.floor(Math.random() * poder.length)]
    let embed = new MessageEmbed()
    .addField( `**Hola como te va? **${userm.user.tag}**, Tu superpoder es!!!**`, aleatorio)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage('https://pbs.twimg.com/media/EBDWKvaXYAA-HQE.jpg')
    message.channel.send(embed)
    }
}
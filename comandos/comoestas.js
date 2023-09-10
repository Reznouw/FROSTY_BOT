const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "comoestas",
	alias: ["comoestas?"],
	run: async(client, message, args) => {    
    const feel = ['Ella me dijo que sii!!!! :star_struck:', 'Estoy hiper excelente y listo para ayudarte en cualquier cosa :wink:', 'Estoy triste por que madbot me pego :cry:', 'Estoy feliz, me ha gustado ayudar a muchos', 'Estoy realmente triste porque ella no me ama :sob:', 'Estoy aburrido porque no juegan conmigo :pensive:', 'Masomenos porque siempre pienso si Surui es varon o mujer?, nunca lo sabre', 'Con la barriga llena, porque Hace unos minutos comi pollito ', 'A javier le huele los pies' ]
    const aleatorio = feel[Math.floor(Math.random() * feel.length)]
    message.channel.send(aleatorio)
    }
}
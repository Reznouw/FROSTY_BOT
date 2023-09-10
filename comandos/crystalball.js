const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "9ball",
	alias: ["crystalball"],
	run: async(client, message, args) => {
    let texto = args.join(" ");
    var rpts = ["Sí", "Tal vez", "No sé", "Definitivamente!", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
    var userm = message.author
    var rpta = rpts[Math.floor(Math.random() * rpts.length)]+' '
    if (!texto) return message.reply(`Escriba una pregunta.`);
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`             :crystal_ball: ❆ Crystal ball :crystal_ball:
    ─━━━━━━⊱❄⊰━━━━━━─
    **${userm.username}, pregunta:**
    ${texto}
    **Respuesta:**
    ${rpta}
    `)
    message.channel.send(embed)
    }
}
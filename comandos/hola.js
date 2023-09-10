const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "hola",
    alias: ["holi","hi","hello"],
	run: async(client, message, args) => {
        message.reply(`Hola, como estas?!!`)
    }
}
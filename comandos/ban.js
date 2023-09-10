const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "ban",
	alias: ["ban"],
	run: async(client, message, args) => {
    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
    var userm = message.author
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    if (!razon) return message.channel.send('Escriba una razón, `-ban @username [razón]`');
    message.channel.send(`:man_detective: ${user.username} fue banead@ por ${razon}`)
    }
}
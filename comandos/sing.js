const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "sing",
	alias: ["sing"],
	run: async(client, message, args) => {
    let user = message.mentions.users.first();
    var userm = message.author
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    let embed = new MessageEmbed()
        .setTitle( `**${userm.username}** le canto una linda serenata a su amada **${user.username}**`)
        .setFooter(" FROSTY ", client.user.avatarURL())
        .setTimestamp()
        .setThumbnail(user.avatarURL)
        .setColor(0x00AE86)
        .setImage('https://elnoti.com/wp-content/uploads/2017/12/chapulin1.gif');
    message.channel.send(embed)
    }
} 

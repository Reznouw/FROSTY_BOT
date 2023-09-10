const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "lamasguapa",
	alias: ["la mas guapa"],
	run: async(client, message, args) => {
    var userm = message.author
    let embed = new MessageEmbed()
    .setTitle( `**${userm.username}**, tu eres la mas bella no del servidor sino del mundo`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(userm.avatarURL)
    .setColor(0x00AE86)
    .setImage(message.author.displayAvatarURL({size: 4096,dynamic: true}))
    message.channel.send(embed)
    }
}

const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "avatar",
	alias: ["avatar"],
	run: async(client, message, args) => {
    let mentioned = message.mentions.members.first() || message.member; 
    let embed = new MessageEmbed()
    .setColor("RANDOM") 
    .setTitle(`Avatar de **` + `${mentioned.user.username}` + "**") 
    .setImage(mentioned.user.displayAvatarURL( {size: 1024, dynamic: true } )) 
    .setFooter("Enviado por: " + message.member.displayName, message.author.displayAvatarURL());
    return message.channel.send(embed)
	},
};
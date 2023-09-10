const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "elmasguapo",
	alias: ["masguapo"],
	run: async(client, message, args) => {
    var randomUser = message.guild.members.cache.random();
    let embed = new MessageEmbed()
    .setColor("RANDOM") 
    .setDescription(`**${randomUser}**`+', es el mas guapo del servidor!!') 
    .setImage(randomUser.user.displayAvatarURL( {size: 1024, dynamic: true } )) 
    message.channel.send(embed)
    },
};
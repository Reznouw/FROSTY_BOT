const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "ship",
	alias: ["shipp"],
	run: async(client, message, args) => {
    var randomUser = message.guild.members.cache.random().displayName;
    var randomUser2 = message.guild.members.cache.random().displayName;
    let embed = new MessageEmbed()
    .addField( `**Hola como te va?, ** **El mejor ship del 2021 es!!? **`, randomUser+' y '+randomUser2+' son el mejor ship del año!!')
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage('https://pbs.twimg.com/media/DoCwm-SW0AAqXmJ.png')
    message.channel.send(embed)
    }
}
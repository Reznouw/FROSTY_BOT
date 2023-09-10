const { MessageEmbed } = require("discord.js")


module.exports = {
	name: "botinfo",
	alias: ["info"],
	run: async(client, message, args) => {
    const actividad = (`${process.uptime().toFixed(2)}s`)
    let embed = new MessageEmbed()
    .setColor(0x00AE86)
    .setAuthor("FROSTY", client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .addField("» :man_technologist: Developer", `> ${` ${client.users.cache.get("725887014674890832").tag}`}`, true)
    .addField("» :desktop: Servers"           , `> ${`${client.guilds.cache.size}`}`, true)
    .addField("» :timer: Uptime"              , `> ${` ${actividad}`}`, true)
    .addField("» :fireworks: Prefix"          , `> f,help`, true)
    .addField("» :ramen: Ram"                 , `> ${` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`}`, true)
    .addField("» :globe_with_meridians: Lenguaje", `> JavaScript`, true)
    .addField("» :books: Libreria"            , `> Discord.js v14.16.0`, true)
    .addField("» :love_letter: votar"         , `> [Click aqui](https://bots.discordthings.com/bot/802529653712748554)`, true)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .addField("» :people_hugging: Integrantes", `> ${` ${message.guild.memberCount}`}`, true);
    message.channel.send(embed)
    }
}
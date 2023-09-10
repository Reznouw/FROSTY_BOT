const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "amigos",
	alias: ["amigos"],
	run: async(client, message, args) => {
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    let embed = new MessageEmbed()
    .setTitle("Los mejores amigos como Ban y Meliodas!!!")
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage('https://pa1.narvii.com/6256/d0b5a56d478fa46dfdc6866c06f75ec13d0ce7af_hq.gif');
    message.channel.send(embed)
    }
}
const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "chocolat",
	alias: ["chocolat"],
	run: async(client, message, args) => {
    let user = message.mentions.users.first();
    var userm = message.author
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    let embed = new MessageEmbed()
        .setTitle( `**${userm.username}** le dio un delicioso chocolate a **${user.username}**`)
        .setFooter(" FROSTY ", client.user.avatarURL())
        .setTimestamp()
        .setThumbnail(user.avatarURL)
        .setColor(0x00AE86)
        .setImage('http://24.media.tumblr.com/2c6e584b25726f238de6cbc908baedb0/tumblr_mxknk7mUcz1rbavh7o6_250.gif');
    message.channel.send(embed)
    }
}
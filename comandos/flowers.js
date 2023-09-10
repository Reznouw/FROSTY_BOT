const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "flowers",
	alias: ["flowers"],
	run: async(client, message, args) => {
    let user = message.mentions.users.first();
    var userm = message.author
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    let embed = new MessageEmbed() 
        .setTitle( `**${userm.username}** le dio un ramo de flores a **${user.username}**`)
        .setFooter(" FROSTY ", client.user.avatarURL())
        .setTimestamp()
        .setThumbnail(user.avatarURL)
        .setColor(0x00AE86)
        .setImage('https://reticenciasevirgulas.files.wordpress.com/2016/04/e9b4f-gle_gif.gif');
    message.channel.send(embed)
    }
}

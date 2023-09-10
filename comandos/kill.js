const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "kill",
	alias: ["kill"],
	run: async(client, message, args) => {
    let user = message.mentions.users.first();
    var userm = message.author
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    let embed = new MessageEmbed() 
    .setTitle( `**${userm.username}** mato a **${user.username}**`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setColor(0x00AE86)
    .setImage('https://nerdschalk.com/wp-content/uploads/2020/10/tenor-11.gif');
    message.channel.send(embed)
    }
}
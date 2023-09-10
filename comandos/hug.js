const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "hug",
	alias: ["hug"],
	run: async(client, message, args) => {
        let user = message.mentions.users.first();
        var userm = message.author
        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
        let embed = new MessageEmbed()
          .setTitle( `**${userm.username}** le da un abrazo de oso :smiling_face_with_3_hearts: a **${user.username}**`)
          .setFooter(" FROSTY ", client.user.avatarURL())
          .setTimestamp()
          .setThumbnail(user.avatarURL)
          .setColor(0x00AE86)
          .setImage('https://i.pinimg.com/originals/84/1b/c7/841bc7c159306636be74feec34b28194.gif');
        message.channel.send(embed)
    }
}
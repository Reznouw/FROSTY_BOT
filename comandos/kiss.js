const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "kiss",
	alias: ["kiss"],
	run: async(client, message, args) => {
        let user = message.mentions.users.first();
        var userm = message.author
        const gifs = ['https://i.pinimg.com/originals/bb/65/09/bb6509714318351ac823304f7e251a11.gif', 'https://acegif.com/wp-content/uploads/anime-kiss-m.gif', 'https://www.eldictamen.mx/wp-content/uploads/2018/05/b920a74debe339ff75dc5c4abbbeaa1e1df390ab_hq.gif', 'https://pa1.narvii.com/6801/cec41b8d6ef0a70aa9420d5a0a03a2bc5815ccb6_hq.gif' ]
        const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
        let embed = new MessageEmbed()
          .setTitle( `**${userm.username}** le dio un apasionado beso a **${user.username}**`)
          .setFooter(" FROSTY ", client.user.avatarURL())
          .setTimestamp()
          .setThumbnail(user.avatarURL)
          .setColor(0x00AE86)
          .setImage(aleatorio2);
        message.channel.send(embed)
    }
}
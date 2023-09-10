const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "poke",
	alias: ["poke"],
	run: async(client, message, args) => {
        let user = message.mentions.users.first();
        var userm = message.author
        const gifs = ['https://media.tenor.com/images/f38a60fe4557787213f7bf64ed248ca0/tenor.gif', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7b174d50628543.58d507961af0d.gif', 'https://i.pinimg.com/originals/49/9d/ff/499dff1b825ded0acb3dafb4536e734b.gif' ]
        const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
        let embed = new MessageEmbed() 
          .setTitle( `**${userm.username}** le da un toque a **${user.username}**`)
          .setFooter(" FROSTY ", client.user.avatarURL())
          .setTimestamp()
          .setThumbnail(user.avatarURL)
          .setColor(0x00AE86)
          .setImage(aleatorio2);
        message.channel.send(embed)
    }
}
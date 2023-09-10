const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "smug",
	alias: ["smug"],
	run: async(client, message, args) => {
        let user = message.mentions.users.first();
        var userm = message.author
        const gifs = ['https://i.pinimg.com/originals/1f/e9/35/1fe93596a8a0f84078b936305b319c55.gif', 'https://i.pinimg.com/originals/4c/2e/b6/4c2eb6be4a6cecd2537df77e722dcfc4.gif', 'https://thumbs.gfycat.com/SnarlingFabulousCottontail-size_restricted.gif' ]
        const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
        let embed = new MessageEmbed() 
          .setTitle( `**${userm.username}** presume ante **${user.username}**`)
          .setFooter(" FROSTY ", client.user.avatarURL())
          .setTimestamp()
          .setThumbnail(user.avatarURL)
          .setColor(0x00AE86)
          .setImage(aleatorio2);
        message.channel.send(embed)
    }
}
const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "pat",
	alias: ["pat"],
	run: async(client, message, args) => {
        let user = message.mentions.users.first();
        var userm = message.author
        const gifs = ['https://i.pinimg.com/originals/1e/89/fe/1e89fefbf815f6b9890b7cd8d4cb8bc1.gif', 'https://c.tenor.com/2kmDRTqIIDAAAAAM/kitty-so-cute-head-pat.gif', 'https://thumbs.gfycat.com/BlushingDeepBlacknorwegianelkhound-small.gif', 'https://thumbs.gfycat.com/FlimsyDeafeningGrassspider-small.gif' ]
        const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
        let embed = new MessageEmbed() 
          .setTitle( `**${userm.username}** le dio una palmadita a **${user.username}**`)
          .setFooter(" FROSTY ", client.user.avatarURL())
          .setTimestamp()
          .setThumbnail(user.avatarURL)
          .setColor(0x00AE86)
          .setImage(aleatorio2);
        message.channel.send(embed)
    }
}
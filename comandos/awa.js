const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "uwu",
	alias: ["uwu"],
	run: async(client, message, args) => {
    const gifs = ['https://media3.giphy.com/media/LkfjHA9dIVYgJFmPOF/giphy.gif', 'https://i.pinimg.com/originals/7a/27/03/7a2703befdd934a9e54ac4d44ae146e1.gif', 'https://media.tenor.com/images/2b9cbc2b4b87ab55d61749bea327f696/tenor.gif', 'https://i.pinimg.com/originals/95/02/b3/9502b3491f613feba15592ba6bf92be4.gif' ]
    const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
    let embed = new MessageEmbed()
    .setTitle("      **UWU**   ")
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage(aleatorio2);
  message.channel.send(embed)
    }
}

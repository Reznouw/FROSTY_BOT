const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "dance",
	alias: ["dance"],
	run: async(client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle("Unete a nosotros y  empezemos a bailar y romper la pista!!!")
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage('https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-m.gif');
    message.channel.send(embed)
    }
}
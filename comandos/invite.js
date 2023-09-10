const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "invite",
	alias: ["invite"],
	run: async(client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle("FROSTY")
    .setColor("RANDOM")
    .setDescription(` **Invitación**
    ─━━━━━━⊱:snowflake:⊰━━━━━━─
    Si es que deseas invitarme aqui dejo mi link :hugging:. 
    » [Click aqui :)](https://discord.com/api/oauth2/authorize?client_id=802529653712748554&permissions=8&scope=bot)
    Mi servidor de soporte:
    » [El que presiona aqui es wap@ :)](https://discord.gg/VfTUZR3bVZ)
    `)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setImage('https://i.pinimg.com/originals/00/05/74/0005744a254548fcabc119ad94d3df2f.png')
    .setTimestamp()
    .setURL("https://bots.discordthings.com/bot/802529653712748554") 
    message.channel.send(embed);
}
}
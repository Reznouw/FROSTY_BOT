const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "datocurioso",
	alias: ["dato"],
	run: async(client, message, args) => {
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    let embed = new MessageEmbed()
    .setTitle("DATO CURIOSO")
    .setDescription(`**Los mejores datos curiosos de las personas:**
    ${user.username}, Es un tipo realmente sucio, nunca se baña`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage('https://th.bing.com/th/id/R.1adc22f1bf554e64822f6dcab46a9d32?rik=hp9A8eudRdCm%2bA&pid=ImgRaw&r=0')
    .setURL('https://th.bing.com/th/id/R.1adc22f1bf554e64822f6dcab46a9d32?rik=hp9A8eudRdCm%2bA&pid=ImgRaw&r=0')
    message.channel.send(embed)
    }
}
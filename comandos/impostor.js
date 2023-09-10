const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "impostor",
	alias: ["impostor"],
	run: async(client, message, args) => {
    let embed = new MessageEmbed()
    let user = message.mentions.users.first();
    var userm = message.author
    let impostor = ["No era el impostor", "Era el impostor"]
    const aleatorio = impostor[Math.floor(Math.random() * impostor.length)]
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
  
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　                ${user} ${aleatorio} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`)
    }
}
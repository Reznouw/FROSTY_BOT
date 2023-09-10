const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "sabiasque",
    alias: ["sabiasque"],
	run: async(client, message, args) => {
    const frases = ['“El mejor momento para plantar un árbol era hace 20 años. El segundo mejor momento es AHORA.” Aldeano','“Cada día es una nueva oportunidad para cambiar tu vida.” Aldeano', '“Ningún mar en calma hizo experto a un marinero.” Aldeano', '"La gente positiva es la que se cae, se levanta, se sacude, se cura los raspones, sonríe a la vida y dice: **Alla voy denuevo**" Aldeano', '"Cualquier cosa que te plante la vida florecela con gracia" Aldeano SIMP' ]
    const aleatorio = frases[Math.floor(Math.random() * frases.length)]
    const gifs = ['https://i.3djuegos.com/juegos/7069/minecraft/fotos/maestras/minecraft-4852398.jpg', 'https://i.ytimg.com/vi/V5P2AryOp5Y/maxresdefault.jpg', 'https://p4.wallpaperbetter.com/wallpaper/337/379/800/minecraft-villager-wallpaper-preview.jpg', 'https://pm1.narvii.com/7543/885fe192acfaadef2f5123120249b0be3e2142e7r1-750-422v2_hq.jpg', 'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/9489329144409766d7dc6570f3bb5989~c5_720x720.jpg' ]
    const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
    let embed = new MessageEmbed()
      .addField( `**Hola como te va?, te quiero contar algo que te ayudara tenlo por seguro:**`, aleatorio)
      .setFooter(" FROSTY ", client.user.avatarURL())
      .setTimestamp()
      .setColor(0x00AE86)
      .setImage(aleatorio2);
    message.channel.send(embed)
    }
}
const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "anecdota",
	alias: ["anecdota"],
	run: async(client, message, args) => {
    const gifs = ['tamaño','bomba','dinos', 'guerra','frio' ]
    const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
    
    if ('tamaño'==aleatorio2) {
    let embed = new MessageEmbed() 
    .setTitle("MIS ANECDOTAS")
    .setDescription(`**Que te podria contar haber :thinking: ?**
    Como esa vez que mis hermanos competian por saber quien era el mas grande pero lastimosamente yo siempre perdia :cry:`)    
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage(`https://media.tenor.com/images/ee0998dcc9c9424f7e9b79a62e51fab0/tenor.gif`)
    .setURL("https://media.tenor.com/images/ee0998dcc9c9424f7e9b79a62e51fab0/tenor.gif")
    message.channel.send(embed);
    }
    else
    if ('bomba'==aleatorio2) {
        let embed = new MessageEmbed() 
        .setTitle("MIS ANECDOTAS")
        .setDescription(`**Que te podria contar haber :thinking: ?**
        Como esa vez que por primera vez los pequeñitos hombres se peleaban por la creacion de la bomba atomica hiroshima y nagasaki`)        
        .setFooter(" FROSTY ", client.user.avatarURL())
        .setTimestamp()
        .setColor(0x00AE86)
        .setImage(`https://cdnb.20m.es/sites/73/2018/06/bom2.gif`)
        .setURL("https://cdnb.20m.es/sites/73/2018/06/bom2.gif")
        message.channel.send(embed);
    }
    else
    if ('dinos'==aleatorio2) {
        let embed = new MessageEmbed() 
        .setTitle("MIS ANECDOTAS")
        .setDescription(`**Que te podria contar haber :thinking: ?**
        Cuando los pequeños dinos se quemaron cuando quise jugar a los bolos, sali perdiendo y esto los llego a matar :knife: `)        
        .setFooter(" FROSTY ", client.user.avatarURL())
        .setTimestamp()
        .setColor(0x00AE86)
        .setImage(`https://www.cinepremiere.com.mx/wp-content/uploads/2020/02/Colin-Trevorrow-Jurassic-World-3-1.gif`)
        .setURL("https://www.cinepremiere.com.mx/wp-content/uploads/2020/02/Colin-Trevorrow-Jurassic-World-3-1.gif")
        message.channel.send(embed);
    }
    else
    if ('guerra'==aleatorio2) {
        let embed = new MessageEmbed() 
        .setTitle("MIS ANECDOTAS")
        .setDescription(`**Que te podria contar haber :thinking: ?**
        O talvez esa vez donde estallo una guerra por todo mi cuerpesito, sabes? me dolia feo, solo espero que no me hagan daño nunca mas`)        
        .setFooter(" FROSTY ", client.user.avatarURL())
        .setTimestamp()
        .setColor(0x00AE86)
        .setImage(`https://pa1.narvii.com/6693/c0d2e377a4345bf08cfc6379a163aba97ad2774d_hq.gif`)
        .setURL("https://pa1.narvii.com/6693/c0d2e377a4345bf08cfc6379a163aba97ad2774d_hq.gif")
        message.channel.send(embed);
    }
    else
    if ('frio'==aleatorio2) {
        let embed = new MessageEmbed() 
        .setTitle("MIS ANECDOTAS")
        .setDescription(`**Que te podria contar haber :thinking: ?**
        Como cuando mi padre empezo alejarse de nosotros o quizas nosotros, tal vez eso fue por que llegamos a la adultez, mi cuerpo estaba realmente solido y hacia frio, y el pequeño hombre se habia extinguido, o eso aún no pasa no? `)
        .setFooter(" FROSTY ", client.user.avatarURL())
        .setTimestamp()
        .setColor(0x00AE86)
        .setImage(`https://i.pinimg.com/originals/ec/05/91/ec059154d9e007bd050e6410bcec8337.gif`)
        .setURL("https://i.pinimg.com/originals/ec/05/91/ec059154d9e007bd050e6410bcec8337.gif")
        message.channel.send(embed);
    }


    
}}  
const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "mianimal",
	alias: ["animal"],
	run: async(client, message, args) => {
    const userm = message.mentions.members.first() || message.member
    const gifs = ['lobo','leon','gato', 'pato','perro' ]
    const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
    
    if ('lobo'==aleatorio2) {
    let embed = new MessageEmbed() 
    .setTitle("MI ANIMAL")
    .setDescription(`**Siempre nos preguntamos cual es nuestro animal interior, pues yo tengo la respuesta :**

    ${userm.user}, Tu animal interior es un lobo auuuu..!!!
    
    NOTA: Ultimas noticias sobre mascotas dandole click al titulo :hear_no_evil: 
    `)    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage(`https://eldarsecuentadesusi.files.wordpress.com/2012/04/oso-agua.jpg?w=1024`)
    .setURL("https://cnnespanol.cnn.com/category/mascotas/")
    message.channel.send(embed);
    }
    else
    if ('leon'==aleatorio2) {
        let embed = new MessageEmbed() 
        .setTitle("MI ANIMAL")
        .setDescription(`**Siempre nos preguntamos cual es nuestro animal interior, pues yo tengo la respuesta :**

        ${userm.user}, Tu animal interior es un leon roarr!!!
        
        NOTA: Ultimas noticias sobre mascotas dandole click al titulo :hear_no_evil: 
        `)        .setFooter(" FROSTY ", client.user.avatarURL())
        .setTimestamp()
        .setColor(0x00AE86)
        .setImage(`https://th.bing.com/th/id/OIP.YHADZuWuPyoJXZ4wYRYbhQHaE2?pid=ImgDet&rs=1`)
        .setURL("https://cnnespanol.cnn.com/category/mascotas/")
        message.channel.send(embed);
    }
    else
    if ('gato'==aleatorio2) {
        let embed = new MessageEmbed() 
        .setTitle("MI ANIMAL")
        .setDescription(`**Siempre nos preguntamos cual es nuestro animal interior, pues yo tengo la respuesta :**

        ${userm.user}, Tu animal interior es un gato miauu!!!
        
        NOTA: Ultimas noticias sobre mascotas dandole click al titulo :hear_no_evil: 
        `)        .setFooter(" FROSTY ", client.user.avatarURL())
        .setTimestamp()
        .setColor(0x00AE86)
        .setImage(`https://image.mmradio.com/sites/default/files/styles/social_share/public/gato_7.jpg`)
        .setURL("https://cnnespanol.cnn.com/category/mascotas/")
        message.channel.send(embed);
    }
    else
    if ('pato'==aleatorio2) {
        let embed = new MessageEmbed() 
        .setTitle("MI ANIMAL")
        .setDescription(`**Siempre nos preguntamos cual es nuestro animal interior, pues yo tengo la respuesta :**

        ${userm.user}, Tu animal interior es un pato cuack!
        
        NOTA: Ultimas noticias sobre mascotas dandole click al titulo :hear_no_evil: 
        `)        .setFooter(" FROSTY ", client.user.avatarURL())
        .setTimestamp()
        .setColor(0x00AE86)
        .setImage(`https://css.avicoladeseleccion.es/1573/75.jpg`)
        .setURL("https://cnnespanol.cnn.com/category/mascotas/")
        message.channel.send(embed);
    }
    else
    if ('perro'==aleatorio2) {
        let embed = new MessageEmbed() 
        .setTitle("MI ANIMAL")
        .setDescription(`**Siempre nos preguntamos cual es nuestro animal interior, pues yo tengo la respuesta :**
        
         ${userm.user}, Tu animal interior es un perro uaff!!!
         
         NOTA: Ultimas noticias sobre mascotas dandole click al titulo :hear_no_evil: 
         `)
        .setFooter(" FROSTY ", client.user.avatarURL())
        .setTimestamp()
        .setColor(0x00AE86)
        .setImage(`https://img.culturacolectiva.com/content_image/2021/2/2/1612290147478-hunter-el-perro-pintor-que-gana-miles-de-dolares.020221.arte.jpg`)
        .setURL("https://cnnespanol.cnn.com/category/mascotas/")
        message.channel.send(embed);
    }


    
}}   

////////////NO MOVER ///////////////////
const Discord = require("discord.js");
const { Client } = require('discord.js');
const client = new Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES'] } });
client.users.cache.get
const config = require("./config.json");
///////////VARIABLE//////////////////////
let prefix = config.prefix;
//////////STATUS///////////////////////
client.on("ready", () => {
client.user.setActivity(' f!help  | Compitiendo en Discordthings.com', { type: 'PLAYING' })
   console.log(`Estoy listo para trabajar!`);
});
/////////PRIMERA PARTE////////////////
/////////MENSAGES////////////////////
client.on("message", (message) => {
  if(message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
/////////COMANDO/////////////////////
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();
  
if(command === ('hola')) {
  message.channel.send(`Hola, como estas?!!`);
  
}else
if(command === ('comoestas')) {  
   const feel = ['Ella me dijo que sii!!!! :star_struck:', 'Estoy hiper excelente y listo para ayudarte en cualquier cosa :wink:', 'Estoy triste por que madbot me pego :cry:', 'Estoy feliz, me ha gustado ayudar a muchos', 'Estoy realmente triste porque ella no me ama :sob:', 'Estoy aburrido porque no juegan conmigo :pensive:' ]
  const aleatorio = feel[Math.floor(Math.random() * feel.length)]
   message.channel.send(aleatorio);
  
  }else
  if(command === 'anecdota'){
    const historia = ['Como esa vez que por primera vez los pequeñitos hombres se peleaban por la creacion de la bomba atomica hiroshima y nagasaki ', 'Como esa vez que mis hermanos competian por saber quien era el mas grande pero lastimosamente yo siempre perdia :cry:', 'Cuando los pequeños dinos se quemaron ante las balas de mis tios que dispararon y esto los llego a matar :knife:', 'O talvez esa vez donde estallo una guerra por todo mi cuerpesito, sabes? me dolia feo, solo espero que no me haguen daño mas', 'Como cuando mi padre empezo alejarse de nosotros o quizas nosotros, tal vez eso fue por que llegamos a la adultez, mi cuerpo estaba realmente solido y hacia frio, y el pequeño hombre se habia extinguido' ]
    const aleatorio = historia[Math.floor(Math.random() * historia.length)]
    const gifs = ['https://cdnb.20m.es/sites/73/2018/06/bom2.gif', 'https://media.tenor.com/images/ee0998dcc9c9424f7e9b79a62e51fab0/tenor.gif', 'https://www.cinepremiere.com.mx/wp-content/uploads/2020/02/Colin-Trevorrow-Jurassic-World-3-1.gif', 'https://pa1.narvii.com/6693/c0d2e377a4345bf08cfc6379a163aba97ad2774d_hq.gif', 'https://i.pinimg.com/originals/ec/05/91/ec059154d9e007bd050e6410bcec8337.gif' ]
    const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
    const embed = new Discord.MessageEmbed() 
      .addField( `**Que te podria contar haber :thinking: ?**`, aleatorio )
      .setFooter(" FROSTY ", client.user.avatarURL())
      .setTimestamp()
      .setColor(0x00AE86)
      .setImage(aleatorio2);
    message.channel.send(embed);

  }else
  if(command === 'ejemplo'){
    const historia = ['Como esa vez que por primera vez los pequeñitos hombres se peleaban por la creacion de la bomba atomica hiroshima y nagasaki ', 'Como esa vez que mis hermanos competian por saber quien era el mas grande pero lastimosamente yo siempre perdia :cry:', 'Cuando los pequeños dinos se quemaron ante las balas de mis tios que dispararon y esto los llego a matar :knife:', 'O talvez esa vez donde estallo una guerra por todo mi cuerpesito, sabes? me dolia feo, solo espero que no me haguen daño mas', 'Como cuando mi padre empezo alejarse de nosotros o quizas nosotros, tal vez eso fue por que llegamos a la adultez, mi cuerpo estaba realmente solido y hacia frio, y el pequeño hombre se habia extinguido' ]
    const aleatorio = historia[Math.floor(Math.random() * historia.length)]
    const gifs = ['https://cdnb.20m.es/sites/73/2018/06/bom2.gif', 'https://media.tenor.com/images/ee0998dcc9c9424f7e9b79a62e51fab0/tenor.gif', 'https://www.cinepremiere.com.mx/wp-content/uploads/2020/02/Colin-Trevorrow-Jurassic-World-3-1.gif', 'https://pa1.narvii.com/6693/c0d2e377a4345bf08cfc6379a163aba97ad2774d_hq.gif', 'https://i.pinimg.com/originals/ec/05/91/ec059154d9e007bd050e6410bcec8337.gif' ]
    const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
    const embed = new Discord.MessageEmbed() 
      .addField( `**Que te podria contar haber :thinking: ?**`, aleatorio )
      .setFooter(" FROSTY ", client.user.avatarURL())
      .setTimestamp()
      .setColor(0x00AE86)
      .setImage(aleatorio2);
    message.channel.send(embed);



  }else
  if(command === 'sabiasque'){
    const frases = ['“El mejor momento para plantar un árbol era hace 20 años. El segundo mejor momento es AHORA.”','“Cada día es una nueva oportunidad para cambiar tu vida.”', '“Ningún mar en calma hizo experto a un marinero.”', 'La gente positiva es la que se cae, se levanta, se sacude, se cura los raspones, sonríe a la vida y dice: **Alla voy denuevo**', 'Cualquier cosa que te plante la vida florecela con gracia' ]
    const aleatorio = frases[Math.floor(Math.random() * frases.length)]
    const gifs = ['https://i.3djuegos.com/juegos/7069/minecraft/fotos/maestras/minecraft-4852398.jpg', 'https://i.ytimg.com/vi/V5P2AryOp5Y/maxresdefault.jpg', 'https://p4.wallpaperbetter.com/wallpaper/337/379/800/minecraft-villager-wallpaper-preview.jpg', 'https://pm1.narvii.com/7543/885fe192acfaadef2f5123120249b0be3e2142e7r1-750-422v2_hq.jpg', 'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/9489329144409766d7dc6570f3bb5989~c5_720x720.jpg' ]
    const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
    const embed = new Discord.MessageEmbed() 
      .addField( `**Hola como te va?, te quiero contar algo que te ayudara tenlo por seguro:**`, aleatorio)
      .setFooter(" FROSTY ", client.user.avatarURL())
      .setTimestamp()
      .setColor(0x00AE86)
      .setImage(aleatorio2);
    message.channel.send(embed);

  }else
  if(command === ('elmasguapo')) {
  var randomUser = message.guild.members.cache.random().displayName;
  message.channel.send(randomUser+', es el mas guapo del servidor!!');

  }else
  if(command === 'mipoder'){
    const userm = message.mentions.members.first() || message.member
  const poder = ['Lagrimas de acido','Invisibilidad en lo oscuro','Controlar el control','Comunicarse con frutas','Detectar basura ','Encender lamparas','Atraer balas','Leer tu propia mente','Caida de cabello instantanea','Envenjecimiento ultrarapido','Transformarse en laptop','Atraer mala suerte','Superlentitud','Superfuerza por un segundo']
  const aleatorio = poder[Math.floor(Math.random() * poder.length)]
  const embed = new Discord.MessageEmbed() 
    .addField( `**Hola como te va? **${userm.user.tag}**, Tu superpoder es!!!**`, aleatorio)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage('https://pbs.twimg.com/media/EBDWKvaXYAA-HQE.jpg')
  message.channel.send(embed);    
  
  }else
  if(command === 'mianimal'){
  const userm = message.mentions.members.first() || message.member
  const gifs = ['https://eldarsecuentadesusi.files.wordpress.com/2012/04/oso-agua.jpg?w=1024', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNu4kwvrVP7pdr1xyH5ELLdt0lqrhUQCIYeA&usqp=CAU', 'http://i.ebayimg.com/images/g/OjoAAOSwBAFe4jvz/s-l500.jpg', 'https://cumbrepuebloscop20.org/wp-content/uploads/2018/09/Le%C3%B3n-2.jpg', 'https://s03.s3c.es/imag/_v0/770x420/0/6/3/600x400_Lobo-salvaje-en-un-bosque-iStock.jpg', 'https://www.viralistas.com/wp-content/uploads/2018/04/tortugas-de-pelo-verde-1.jpg' ]
  const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
  const embed = new Discord.MessageEmbed() 
    .setTitle( `Siempre nos preguntamos cual es nuestro animal interior, pues yo tengo la respuesta!!, ${userm.user.tag}, Tu animal interior es!!!`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage(aleatorio2)
  message.channel.send(embed); 

}else
  if(command === 'ship'){
  var randomUser = message.guild.members.cache.random().displayName;
  var randomUser2 = message.guild.members.cache.random().displayName;
  const embed = new Discord.MessageEmbed() 
    .addField( `**Hola como te va?, ** **El mejor ship del 2021 es!!? **`, randomUser+' y '+randomUser2+' son el mejor ship del año!!')
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage('https://pbs.twimg.com/media/DoCwm-SW0AAqXmJ.png')
  message.channel.send(embed);    


}else
if(command === ('lamasguapa')) { 
  var userm = message.author
  const embed = new Discord.MessageEmbed() 
    .setTitle( `**${userm.username}**, tu eres la mas hermosa del server`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(userm.avatarURL)
    .setColor(0x00AE86)
    .setImage(message.author.displayAvatarURL({size: 4096,dynamic: true}))
  message.channel.send(embed);

}else
if (command === 'ping') {
   let ping = Math.floor(message.client.ping);
    var signal_strength = 
  message.channel.send(':signal_strength: '+`Ping - ${client.ws.ping}ms` )

}else
if(command === '9ball') {
  let texto = args.join(" ");
  var rpts = ["Sí", "No", "Tal vez", "No sé", "Definitivamente!", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
  var userm = message.author
  var rpta = rpts[Math.floor(Math.random() * rpts.length)]+'`'
  if (!texto) return message.reply(`Escriba una pregunta.`);
    const embed = new Discord.MessageEmbed()
    .setTitle( `:crystal_ball: ❆ Crystal ball`)
    .setColor(0x00AE86)
    .addField(`**${userm.username}**, pregunta:`, texto )
    .addField(`Respuesta`, rpta )
  message.channel.send(embed);  
}}); 
///////SEGUNDA PARTE////////////////////////
///////////MENSAJES//////////////////
client.on("message", (message) => {
  if(message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
////////comandos////////////////////////
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();


if(command === 'help'){
  const embed = new Discord.MessageEmbed() 
    .setTitle("FROSTY")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription("Hola Soy Frosty, un gusto conocerlos, luego de tanto tiempo acabo de desperar de un gran sueño y aqui estoy. Mi creador es Reznouw#2021")
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setImage('https://i.pinimg.com/originals/df/1b/91/df1b91f79f0c347c1b29ef60b35e6e1b.png')
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setURL("https://i.pinimg.com/originals/df/1b/91/df1b91f79f0c347c1b29ef60b35e6e1b.png")
    .addField("Informacion", " `f!help, f!botinfo, f!user, f!ping, f!sabiasque, f!mianimal, f!mathset` ")
    .addField("Diversion", " `f!hola, f!comoestas ,f!elmasguapo, f!lamasguapa, f!amigos, f!dance, f!kill, f!9ball f!anecdota, f!impostor, f!mipoder, f!ship, f!ban`")
    .addField("Interaccion", " `f!hug, f!chocolat, f!uwu, f!flowers, f!kiss, f!sing, f!pat, f!poke, f!smug `")
    .addField("Nombre del Servidor", message.guild.name, true)
    .addField("Integrantes", message.guild.memberCount, true);
  message.channel.send(embed);
}else 
if(command === 'mathset'){
  const embed = new Discord.MessageEmbed()  
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor("RANDOM")
  .setFooter(" FROSTY ", client.user.avatarURL())
  .setThumbnail(message.author.displayAvatarURL())
  .setTimestamp()
  .setDescription(` 
  **Herramientas tecnológicas matématicas**
  ─━━━━━━⊱❄⊰━━━━━━─
  » [Desmos](https://www.desmos.com/calculator?lang=es)
  » [Symbolab](https://es.symbolab.com/solver/linear-equation-calculator)
  » [Matriz](http://es.onlinemschool.com/math/assistance/matrix/determinant/)
  » [Mathsolver](https://mathsolver.microsoft.com/es/algebra-calculator)
  » [Geogebra](https://www.geogebra.org/calculator)
  **Frase**:
  "La innovación es lo que distigue a un líder de los demás" Steve Jobs`)
  message.channel.send(embed);
}else
if(command === 'amigos'){
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  const embed = new Discord.MessageEmbed() 
    .setTitle("Los mejores amigos como Ban y Meliodas!!!")
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage('https://pa1.narvii.com/6256/d0b5a56d478fa46dfdc6866c06f75ec13d0ce7af_hq.gif');
  message.channel.send(embed);

  


}else
if(command === 'dance'){
  const embed = new Discord.MessageEmbed() 
    .setTitle("Unete a nosotros y  empezemos a bailar y romper la pista!!!")
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage('https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-m.gif');
  message.channel.send(embed);

}else
if(command === 'kill'){
  let user = message.mentions.users.first();
  var userm = message.author
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  const embed = new Discord.MessageEmbed() 
    .setTitle( `**${userm.username}** mato a **${user.username}**`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setColor(0x00AE86)
    .setImage('https://nerdschalk.com/wp-content/uploads/2020/10/tenor-11.gif');
  message.channel.send(embed);

}else
if(command === 'ban'){
  let user = message.mentions.users.first();
  let razon = args.slice(1).join(' ');
  var userm = message.author
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  if (!razon) return message.channel.send('Escriba una razón, `-ban @username [razón]`');
  message.channel.send(`:man_detective: ${user.username} fue banead@ por ${razon}`); 
}else
if(command === 'chocolat'){
  let user = message.mentions.users.first();
  var userm = message.author
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  const embed = new Discord.MessageEmbed() 
    .setTitle( `**${userm.username}** le dio un delicioso chocolate a **${user.username}**`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setColor(0x00AE86)
    .setImage('http://24.media.tumblr.com/2c6e584b25726f238de6cbc908baedb0/tumblr_mxknk7mUcz1rbavh7o6_250.gif');
  message.channel.send(embed);

}else
if(command === 'flowers'){
  let user = message.mentions.users.first();
  var userm = message.author
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  const embed = new Discord.MessageEmbed() 
    .setTitle( `**${userm.username}** le dio un ramo de flores a **${user.username}**`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setColor(0x00AE86)
    .setImage('https://reticenciasevirgulas.files.wordpress.com/2016/04/e9b4f-gle_gif.gif');
  message.channel.send(embed);

}else
if(command === 'sing'){
  let user = message.mentions.users.first();
  var userm = message.author
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  const embed = new Discord.MessageEmbed() 
    .setTitle( `**${userm.username}** le canto una linda serenata a su amada **${user.username}**`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setColor(0x00AE86)
    .setImage('https://elnoti.com/wp-content/uploads/2017/12/chapulin1.gif');
  message.channel.send(embed);

}else
if(command === 'kiss'){
  let user = message.mentions.users.first();
  var userm = message.author
  const gifs = ['https://i.pinimg.com/originals/bb/65/09/bb6509714318351ac823304f7e251a11.gif', 'https://acegif.com/wp-content/uploads/anime-kiss-m.gif', 'https://www.eldictamen.mx/wp-content/uploads/2018/05/b920a74debe339ff75dc5c4abbbeaa1e1df390ab_hq.gif', 'https://pa1.narvii.com/6801/cec41b8d6ef0a70aa9420d5a0a03a2bc5815ccb6_hq.gif' ]
  const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  const embed = new Discord.MessageEmbed() 
    .setTitle( `**${userm.username}** le dio un apasionado beso a **${user.username}**`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setColor(0x00AE86)
    .setImage(aleatorio2);
  message.channel.send(embed);

}else
if(command === 'pat'){
  let user = message.mentions.users.first();
  var userm = message.author
  const gifs = ['https://i.pinimg.com/originals/1e/89/fe/1e89fefbf815f6b9890b7cd8d4cb8bc1.gif', 'https://c.tenor.com/2kmDRTqIIDAAAAAM/kitty-so-cute-head-pat.gif', 'https://thumbs.gfycat.com/BlushingDeepBlacknorwegianelkhound-small.gif', 'https://thumbs.gfycat.com/FlimsyDeafeningGrassspider-small.gif' ]
  const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  const embed = new Discord.MessageEmbed() 
    .setTitle( `**${userm.username}** le dio una palmadita a **${user.username}**`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setColor(0x00AE86)
    .setImage(aleatorio2);
  message.channel.send(embed);


}else
if(command === 'smug'){
  let user = message.mentions.users.first();
  var userm = message.author
  const gifs = ['https://i.pinimg.com/originals/1f/e9/35/1fe93596a8a0f84078b936305b319c55.gif', 'https://i.pinimg.com/originals/4c/2e/b6/4c2eb6be4a6cecd2537df77e722dcfc4.gif', 'https://thumbs.gfycat.com/SnarlingFabulousCottontail-size_restricted.gif' ]
  const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  const embed = new Discord.MessageEmbed() 
    .setTitle( `**${userm.username}** presume ante **${user.username}**`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setColor(0x00AE86)
    .setImage(aleatorio2);
  message.channel.send(embed);

}else
if(command === 'poke'){
  let user = message.mentions.users.first();
  var userm = message.author
  const gifs = ['https://media.tenor.com/images/f38a60fe4557787213f7bf64ed248ca0/tenor.gif', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7b174d50628543.58d507961af0d.gif', 'https://i.pinimg.com/originals/49/9d/ff/499dff1b825ded0acb3dafb4536e734b.gif' ]
  const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  const embed = new Discord.MessageEmbed() 
    .setTitle( `**${userm.username}** le da un toque a **${user.username}**`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setColor(0x00AE86)
    .setImage(aleatorio2);
  message.channel.send(embed);

}else
if(command === 'hug'){
  let user = message.mentions.users.first();
  var userm = message.author
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  const embed = new Discord.MessageEmbed() 
    .setTitle( `**${userm.username}** le da un abrazo de oso :smiling_face_with_3_hearts: a **${user.username}**`)
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setColor(0x00AE86)
    .setImage('https://i.pinimg.com/originals/84/1b/c7/841bc7c159306636be74feec34b28194.gif');
  message.channel.send(embed);  

}else
if(command === 'uwu'){
  const gifs = ['https://media3.giphy.com/media/LkfjHA9dIVYgJFmPOF/giphy.gif', 'https://i.pinimg.com/originals/7a/27/03/7a2703befdd934a9e54ac4d44ae146e1.gif', 'https://media.tenor.com/images/2b9cbc2b4b87ab55d61749bea327f696/tenor.gif', 'https://i.pinimg.com/originals/95/02/b3/9502b3491f613feba15592ba6bf92be4.gif' ]
  const aleatorio2 = gifs[Math.floor(Math.random() * gifs.length)]
  const embed = new Discord.MessageEmbed() 
    .setTitle("      **UWU**   ")
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .setColor(0x00AE86)
    .setImage(aleatorio2);
  message.channel.send(embed);

}else
if(command === 'impostor'){
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



}else  
if(command === 'cuantosañostiener3ne'){
  message.channel.send('Tiene 15 años !!!');

}else  
if(command === 'user'){
//hacemos un let para definir los estados


let estados = {
  "online": "🟢 En Línea",
  "idle": "🟠 Ausente",
  "dnd": "🔴 No molestar",
  "offline": "⚫️ Desconectado/invisible"
};


//Definimos usuario, puede ser el autor o el mencionado, ustedes pueden cambiarlo si quieren y poner que se obtenga tambien por id; sería así: message.guild.members.cache.get(args[0])

  const member = message.mentions.members.first() || message.member


  //Definimos la fecha en años, meses, días, horas, minutos y segundos
  
  
      function formatDate (template, date) {
        var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
        date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
        return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
          return template.split(specs[i]).join(item)
        }, template)
      }

    
      const embed = new Discord.MessageEmbed()
          .setColor("0x00AE86")
          .setDescription("**INFORMACIÓN DEL USUARIO:**") //Defines la descripcion
          .addField("**🎫 Nombre**:", `${`${member.user.tag}`}` )//Que envíe el tag del usuario
          .addField("**:dna: ADN**:", `${member.user.id}` )//Id del usuario
          .addField("**📌 Apodo del usuario**:", `${member.nickname !== null ? `${member.nickname}` : 'Ninguno'}`, true) //Si tiene o no apodo el usuario dentro del servidor
          .addField("**:tokyo_tower: Fecha de Ingreso al Servidor:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt))//La fecha de ingreso del usuario al servidor
          .addField("**📥 Cuenta Creada:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.user.createdAt))//Cuando fue creada la cuenta
          .addField("**🎮  Jugando**:", member.user.presence.game != null ? user.presence.game.name : "Nada", true)//Si esta jugando a algo, que indique el juego
          .addField("**🎖 Roles:**", member.roles.cache.map(roles => `\`${roles.name}\``).join(', '))//Los roles que posee dicho usuario(Si la cantidad de roles del usuario excede el numero de caracteres que soporta un field, dará un error de sintaxis a la consola, si es así encuentren una manera de hacerlo ustedes mismos)
          .addField("**🚀 ¿Boostea?**:", member.premiumSince ? '**Estoy boosteando <a:boostingtop:755576533430698084>**' : '**No estoy boosteando**')//si esta o no boosteando el servidor
          .setThumbnail (member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))//y el avatar del usuario
          .setFooter(" FROSTY ", client.user.avatarURL())
          .setTimestamp()
       message.channel.send(embed)//enviamos el embed
  


}else
if(command === 'stilll'){
  const actividad = (`${process.uptime().toFixed(2)}s`)
  const embed = new Discord.MessageEmbed()
  .setColor(0x00AE86)
  .setAuthor("FROSTY", client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
  .addField(":man_technologist: Developer", ` ${client.users.cache.get("725887014674890832").tag}`)
  .addField(":desktop: Servers", ` ${client.guilds.cache.size}`)
  .addField(":timer: Uptime", ` ${actividad}`)
  .addField(":fireworks: Prefix", "f!help")
  .addField(":ramen: Ram", ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
  .addField(":globe_with_meridians: Lenguaje", " JavaScript")
  .addField(":books: Libreria", " Discord.js v12.14.1")
  .addField(":love_letter: votar", "[Click aqui](https://discordthings.com/bot/802529653712748554)")
  .setFooter(" FROSTY ", client.user.avatarURL())
  .setTimestamp()
  .addField(":people_hugging: Integrantes", message.guild.memberCount, true);
  message.channel.send(embed)
}else

if(command === 'botinfo'){
  const actividad = (`${process.uptime().toFixed(2)}s`)
  const embed = new Discord.MessageEmbed()
  .setColor(0x00AE86)
  .setAuthor("FROSTY", client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
  .addField("» :man_technologist: Developer", `> ${` ${client.users.cache.get("725887014674890832").tag}`}`, true)
  .addField("» :desktop: Servers"           , `> ${`${client.guilds.cache.size}`}`, true)
  .addField("» :timer: Uptime"              , `> ${` ${actividad}`}`, true)
  .addField("» :fireworks: Prefix"          , `> f!help`, true)
  .addField("» :ramen: Ram"                 , `> ${` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`}`, true)
  .addField("» :globe_with_meridians: Lenguaje", `> JavaScript`, true)
  .addField("» :books: Libreria"            , `> Discord.js v12.14.1`, true)
  .addField("» :love_letter: votar"         , `> [Click aqui](https://discordthings.com/bot/802529653712748554)`, true)
  .setFooter(" FROSTY ", client.user.avatarURL())
  .setTimestamp()
  .addField("» :people_hugging: Integrantes", `> ${` ${message.guild.memberCount}`}`, true);
  message.channel.send(embed)

}else
if(command === 'reglas'){
  const embed = new Discord.MessageEmbed() 
  .setColor(0x00AE86)
  .setAuthor("FROSTYN ┃ RULES", client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
  .addField("1. Se respetuoso", " Debes respetar a todos los usuarios, independientemente de tu agrado hacia ellos. Trata a los demás como quieres ser tratado. ")
  .addField("2. Sin lenguaje inapropiado", " El uso de malas palabras debe mantenerse al mínimo. Sin embargo, cualquier lenguaje despectivo hacia cualquier usuario está prohibido. ")
  .addField("3. Sin spam ni flood", " No envíe muchos mensajes pequeños uno tras otro. No interrumpa el chat enviando spam.")
  .addField("4. Sin nombres ofensivos ni fotos de perfil","  No se puede compartir ninguna foto de alguien sin el permiso de otro" )
  .addField("5. Amenazas directas e indirectas"," Las amenazas a otros usuarios, abuso y otras amenazas maliciosas están absolutamente prohibidas y no permitidas. " )
  .addField("5. Respetar los canales"," Respeten los canales del grupo. " )
  .setFooter(" FROSTY ", client.user.avatarURL())
  .setTimestamp()
  .addField("OJO"," Su presencia en este servidor implica la aceptación de estas reglas, incluidos todos los cambios posteriores. " );
  message.channel.send(embed)

}});   




client.login(config.token);

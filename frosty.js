////////////NO MOVER ///////////////////
const { Client, Collection } = require("discord.js")
const client = new Client()
const { readdir } = require("fs")
const config = require("./config.json");
////DISCORD BUTTON////////////////////
const disbut = require("discord-buttons");
disbut(client);

//////////////////////////////////
client.comandos = new Collection()



//////////STATUS///////////////////////
client.on("ready", () => {
client.user.setActivity(' f,help  | Seamos amigos', { type: 'PLAYING' })
console.log(client.comandos)
console.log(`Estoy listo para trabajar!`);
});

readdir("./comandos/", async (err, files) => {
    if(err) console.log(err)
	files.forEach(x => {
		let file = require(`./comandos/${x}`)
		client.comandos.set(file.name, file)
	})
})

client.on("message", async message => {

	let messageArray = message.content.trim().split(" ")
	let cmd = messageArray[0].toLowerCase()
    let args = messageArray.slice(1)
    if(message.author.bot) return;
	if(!message.content.startsWith("f,")) return;

	let commandFile = client.comandos.get(cmd.slice(2)) 
	if(commandFile)	commandFile.run(client, message, args)
})
client.login(config.token)
module.exports = {
	name: "ping",
	alias: ["p"],
	run: async (client, message, args) => {
        return message.channel.send(':signal_strength: '+`Ping - ${Math.floor(client.ws.ping)}ms` )
    }
}
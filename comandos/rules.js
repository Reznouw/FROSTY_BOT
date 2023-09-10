const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "rules",
    alias: ["10101"],
	run: async(client, message, args) => {
    const actividad = (`${process.uptime().toFixed(2)}s`)
    let embed = new MessageEmbed()
    .setColor(0x00AE86)
    .setAuthor("FROSTYN ┃ REGLAS DE LA CIUDAD", client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setDescription(`
    Reglas dentro de la ciudad:
    ----------------------------------------------
    1) :speech_balloon: | Chat.
    • Respeto y amabilidad ante todo, evita la discriminación, temas polémicos y usa un lenguaje formal, en /msg no hay restricciones, si te sientes acosado por alguien usa el comando /ignore NICK.
    2) :bust_in_silhouette: | Roleo.
    • Al contar con un rol en tu ciudad es importante apegarse a el, si te sorprendemos saliendo del roleo puedes irte advertido y posteriormente sancionado.
    3) :fire: | Grifeos.
    • Alterar el entorno o bloques de cualquier tipo de construcción y no regenerar la zona es sancionable, así que mejor repara lo que destruyas sin que el afectado te denuncie.
    4) :boom: | Uso de hacks.
    • Cualquier tipo de hacks que te brinden una ventaja para sobresalir en situaciones frente a otros jugadores esta prohibida.
    5) :dagger: | Batallas y PvP's.
    • Las peleas sin consentimientos no están permitidas, activar el /pvp ya es un consentimiento, ademas que cualquier abuso a jugadores novatos es sancionable.
    6) :speaking_head: | Acoso y hostigamientos.
    • Espiar esta permitido, si te encuentras a un invasor en tu territorio puedes hacer con él lo que gustes, ten cuidado a donde vayas.
    7) :man_detective: | Robos, trampas y estafas.
    • Forma parte del roleo y es legal si no te atrapan, si observas al responsable puedes denunciarlo con evidencias del hecho para aplicarle una sanción, una grabación en vídeo es mucho mas efectiva.
    8) :warning: | Errores o fallos del servidor.
    • Aprovecharse de bugs del juego, plugin o servidor no está permitido y está altamente penalizado, y quienes reporten esto se llevaran recompensas como monedas/objetos/vehículos/mascotas.
    9) :scales: | Autoridad de la administración.
    • No estamos autorizados a brindarte ni retirarte nada de tu cuenta, salvo casos excepcionales, ejemplo como el que por algún bug del servidor llegarán a haber afectados.
    10) :notebook_with_decorative_cover: | Pa que se vean chido 10 mandamientos.
    ` )
    .setFooter(" FROSTY ", client.user.avatarURL())
    .setTimestamp()
    .addField("OJO"," Su presencia en este servidor implica la aceptación de estas reglas, incluidos todos los cambios posteriores. " );
    message.channel.send(embed)
    }
}
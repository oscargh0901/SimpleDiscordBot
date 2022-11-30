//Para conectar el bot al servidor, habra que generar la URL del bot indicando que es bot, pudiendo crear comandos y con permisos de administrador, 
//una vez generado, pegamos la url al navegador y nos pedira en que servidor que poseamos debe conectarse
const Discord = require('discord.js')

const TOKEN = "Token obtenido del bot en discord/developers" //Debes tener activado todos los intents para hacer que funcione (a fecha de este proyecto, son 3 intents)

const client = new Discord.Client({ intents: 999999 }) //Obligatoriamente hay que indicar una cantidad de intentos de conexion con la api, no coloco mas porque se sale del rango de intentos

client.on('ready', function () {
    console.log("Tamos ready!") //Mensaje de Feedback indicando que el bot está online (aparecera como conectado en el servidor)
});

client.on("messageCreate", (message) => {

    //Cuando un usuario escriba en una sala de texto donde pueda acceder el bot,
    //si coincide con el nombre indicado abajo, mandará un mensaje el bot a ese misma sala
    if(message.author.username === "NombreUsuario") 
    {
        message.channel.send('Ya esta el pesao este')
    }
})

client.login(TOKEN)

//Hace falta node.js (hacer npm update para instalar las dependencias de la api de discord [npm i discord.js])
//Y para iniciar el bot -> npm my_bot.js (nombre que le hayas puesto al archivo)
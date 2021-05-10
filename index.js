var secretJson = require("./secret.json"); //See secretStruct.json to create your own secret.json
var fs = require('fs');

//discord
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
client.login(config.BOT_TOKEN);

////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////           Global Variables           ///////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////               Discord               ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
const prefix = '&';

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    switch (command){
        case "test1":
            message.reply("Olá!");
            break;

        case "test2":
            message.channel.send("Olá!!!");
            break;

    }    
});
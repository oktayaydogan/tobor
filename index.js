const { Player } = require("discord-player");
const Genius = require("genius-lyrics");
const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(8080, () => {
	console.log("Example app listening at http://localhost:8080");
});

global.client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.MessageContent,
	],
	disableMentions: "everyone",
});

client.config = require("./config");

const player = new Player(client, client.config.opt.discordPlayer);
global.genius = new Genius.Client();
player.extractors.loadDefault();

require("./src/loader");

client.login(client.config.app.token);

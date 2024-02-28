require("dotenv").config();

module.exports = {
	app: {
		token: process.env.TOKEN,
		playing: "by Tobor ❤️",
		global: true,
		client: process.env.CLIENT_ID,
		guild: process.env.GUILD_ID,
		ExtraMessages: false,
		loopMessage: false,
	},

	opt: {
		DJ: {
			enabled: false,
			roleName: "",
			commands: [],
		},
		maxVol: 100,
		spotifyBridge: true,
		volume: 75,
		leaveOnEmpty: true,
		leaveOnEmptyCooldown: 30000,
		leaveOnEnd: true,
		leaveOnEndCooldown: 30000,
		discordPlayer: {
			ytdlOptions: {
				quality: "highestaudio",
				highWaterMark: 1 << 25,
			},
		},
	},
};

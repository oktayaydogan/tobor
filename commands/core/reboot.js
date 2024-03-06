module.exports = {
	name: "reboot",
	description: "Reboot the bot!",
	showHelp: false,
	async execute({ client, inter }) {
		const m = await inter.editReply("Rebooting...");
		await client.destroy();
		process.exit(1);
	},
};

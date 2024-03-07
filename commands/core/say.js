module.exports = {
	name: "say",
	description: "Say like I'm saying",
	options: [
		{
			name: "message",
			description: "the message you want to say",
			type: 3,
			required: true,
		},
		{
			name: "member",
			description: "the member you want to say",
			type: 6,
			required: false,
		},
		{
			name: "channel",
			description: "the channel you want to send it to",
			type: 7,
			required: false,
		},
	],
	async execute({ client, inter }) {
		const message = inter.options.getString("message");
		const member = inter.options.getMember("member");
		const channel = inter.options.getChannel("channel");

		await inter.deleteReply();

		text = message;

		if (member !== null) {
			text = `${member} ${message}`;
		}

		if (channel) {
			return await channel.send(text);
		}

		await inter.channel.send(text);
	},
};

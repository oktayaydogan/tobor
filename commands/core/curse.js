module.exports = {
	name: "curse",
	description: "Siktir git amk",
	async execute({ client, inter }) {
		const m = await inter.editReply("curse");
		curses = ["siktir git", "amk", "orospu çocuğu", "oç", "piç", "sikik"];
		inter.editReply(`${curses[Math.floor(Math.random() * curses.length)]}`);
	},
};

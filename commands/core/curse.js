module.exports = {
	name: "curse",
	description: "cure it!",
	async execute({ client, inter }) {
		curses = [
			"elim çimdik sikim dimdik",
			"arsızın götüne kazık çakmışlar, tıkırtı nerden geliyo demiş",
			"fare sığamadığı deliğe, bir de kıçına kabak bağlayıp girmeyi denermiş",
		];

		inter.reply(curses[Math.floor(Math.random() * curses.length)]);
	},
};

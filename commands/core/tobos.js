module.exports = {
	name: "toboş",
	description: "Sensin toboş!",
	async execute({ client, inter }) {
		curses = [
			"Sensin lan toboş! Göt. Amına koyarım senin! :middle_finger: Amcık ağızlı bok boğazlı götveren!",
			"Seni bi sikerim, sebebini de soylemem, ömrün boyu bu paradoksla yasarsin :middle_finger: kimmiş toboş anlarsın amına koduğum",
			"Senin ruhunu sikerim kemiklerin sızlar toboş toboş diye inlerken götünden kan gelir",
		];

		const m = await inter.editReply(
			`<@${inter.member.id}> ${
				curses[Math.floor(Math.random() * curses.length)]
			}`
		);
	},
};

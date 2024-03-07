module.exports = {
	name: "curse",
	description: "curse it!",
	options: [
		{
			name: "member",
			description: "the member you want to curse",
			type: 6,
			required: false,
		},
	],
	async execute({ client, inter }) {
		// get random member all members

		const members = await inter.guild.members.fetch();
		const member =
			inter.options.getMember("member") !== null
				? inter.options.getMember("member")
				: members.random();

		//if random user is bot, get another random user
		if (member.user.bot) {
			//return this.execute({ client, inter });
		}

		if (
			inter.options.getMember("member") !== null &&
			member.id == "386152161953841183"
		) {
			return inter.editReply("Onu yapamıyoruz yalnız :(");
		}

		if (member.id == "386152161953841183") {
			return this.execute({ client, inter });
		}

		// send message and tag the user

		curses = [
			"yarrağımın antifirizi",
			"seni kibrit kutusuna koyar, sallar sallar havaya atar, yere bir parmak kala parmaklarım",
			"mezarında etine tenezzül edecek böceğin izzeti nefsini sikeyim",
			"orospunun çıkartıp, kerhane köşelerine attigi kansız piç.",
			"seni bi sikerim borsa dalgalanır.",
			"allah canımı alsada ölmüşlerini siksem.",
			"şafak vakti sikilmiş kedi amcığı gibi durma!",
			"annene söyle ikide bir ruj değiştirip durmasın sikim gökkuşağına döndü.",
			"ağzına köyün köpeği işesin.",
			"senin ağzına yüzüne sıçsam makyaj olur be!",
			"amcuk ağızlı bok boğazlı götveren",
			"amına götüm girsin.",
			"ananı duvara asar amına da sımaç basarım",
			"40 orospu bir araya gelse böyle çocuk doğuramaz..",
			"senin azı dişine oturur ağzının tavanına sıçarım!",
			"senin amına modem takarım, bütün dünya bağlanıp siker.",
			"amına koyarım sıçılmamış bok.",
			"seni bi sikerim, sebebini de soylemem, ömrün boyu bu paradoksla yasarsin.",
			"senin ruhunu sikerim kemiklerin sızlar.",
			"hay götüne bukalemun kaçsın da ortamla uyum sağlasın, bulup da çıkaramasınlar inşallah",
		];

		//remove message
		inter.deleteReply();

		// send new message
		await inter.channel.send(
			`<@${member.id}> ${curses[Math.floor(Math.random() * curses.length)]}`
		);
	},
};

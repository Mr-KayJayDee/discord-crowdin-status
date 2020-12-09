const Discord = require(`discord.js`);

module.exports = async (bot) => {
	async function getData() {
		// Require https module
		const superagent = require(`superagent`);
		// Request url
		let url = `https://api.crowdin.com/api/project/${process.env.PROJECT}/status?login=${process.env.LOGIN}&account-key=${process.env.ACCOUNT_KEY}&json`;
		// Get the url and store the informations
		let { body } = await superagent.get(url);
		return body;
	}
	// Log when the bot is on
	console.log(`${bot.user.username} en ligne!`);
	// Find the status channel
	let channel = bot.channels.cache.find(c => c.id === bot.config.channel);
	// Returns an error if the channel is not configured of invalid in the config file
	if (!channel) return console.log(`You need to set a valid channel in the configuration file (config.json)`);
	// Fetch all the messages of the status channel
	await channel.messages.fetch();
	// Check wether to purge or not the channel on start
	let amountToPurge = bot.config.purgeAmount;
	// Check if the amount of messages to delete is valid in the config file
	if (isNaN(amountToPurge) || parseInt(amountToPurge) < 1 || parseInt(amountToPurge) > 100) return console.log(`You need to set a valid amount of messages to purge (beetween 1 and 100) in the configuration file (config.json)`);
	// If purgeOnRestart is set to true in the config bulkDelete the channel
	if (bot.config.purgeOnRestart) channel.bulkDelete(amountToPurge);
	// Creates a discord MessageEmbed
	let embed = new Discord.MessageEmbed()
		.setDescription(`**Status of the languages**`)
		.setFooter(`Last edit ${new Date()}`);
	// Get the data with the getData() function
	let data = await getData();
	// For every object in the body array add a field to the embed
	for (let languages of data) {
		// Field data
		embed.addField(`${languages.name} (${languages.code})`, `Translated Progress: ${languages.translated_progress}%\nApproved progress: ${languages.approved_progress}%\nSentences: ${languages.phrases}, Translated: ${languages.translated}, Approved: ${languages.approved}\nWords: ${languages.words}, Translated: ${languages.words_translated}, Approved: ${languages.words_approved}`);
	}
	// Send the message
	let message = await channel.send(embed);

	// Check if the edit time is valid in the config file
	if (isNaN(bot.config.editTime)) return console.log(`You need to set a valid edit time in the configuration file (config.json)`);
	setInterval(async () => {
		let embedEdit = new Discord.MessageEmbed();
		embedEdit.setDescription(`**Status of the languages**`)
			.setFooter(`Last edit ${new Date()}`);
		let newData = await getData();
		for (let languages of newData) {
			// Field data
			embedEdit.addField(`${languages.name} (${languages.code})`, `Translated Progress: ${languages.translated_progress}%\nApproved progress: ${languages.approved_progress}%\nSentences: ${languages.phrases}, Translated: ${languages.translated}, Approved: ${languages.approved}\nWords: ${languages.words}, Translated: ${languages.words_translated}, Approved: ${languages.words_approved}`);
		}
		message.edit(embedEdit);
	}, bot.config.editTime);
};
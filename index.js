const Discord = require(`discord.js`);
const bot = new Discord.Client({
	disableEveryone: true,
	autoReconnect: true
});
const {
	promisify
} = require(`util`);
const readdir = promisify(require(`fs`).readdir);

require(`dotenv`).config();
bot.login(process.env.TOKEN);

bot.config = require(`./config.json`);
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

(async function() {
	const eventFiles = await readdir(`./Events/`);
	eventFiles.forEach(file => {
		const eventName = file.split(`.`)[0];
		const event = require(`./Events/${file}`);
		bot.on(eventName, event.bind(null, bot));
		delete require.cache[require.resolve(`./Events/${file}`)];
	});
})();
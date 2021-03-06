const fs = require('fs');

const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./addons').filter(file => file.endsWith(`js`));

for (const file of commandFiles) {
	const command = require(`./addons/${file}`);
	client.commands.set(command.name, command);
    console.log(command.name);
}

client.once('ready', () => {
	console.log('\nReady!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();


	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);
module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message) {
		message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms.`);
	},
};
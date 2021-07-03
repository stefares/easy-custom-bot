module.exports = {
	name: 'kick',
	description: 'Basic kick command',
	execute(message) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
            if (message.mentions.members.first()) {
                try {
                    message.channel.send(`${message.author.username} kicked ${message.mentions.members.first().tag} out of the server.`)
                    message.mentions.members.first().kick();
                } catch {
                    message.reply("I do not have permissions to kick " + message.mentions.members.first());
                }
            } else {
                message.reply("You do not have permissions to kick " + message.mentions.members.first());
            }
        }
	},
};
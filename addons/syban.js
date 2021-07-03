module.exports = {
	name: 'ban',
	description: 'Basic ban command',
	execute(message) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            if (message.mentions.members.first()) {
                try {
                    message.channel.send(`${message.author.username} banned ${message.mentions.members.first().tag} from this server.`)
                    message.mentions.members.first().ban();
                } catch {
                    message.reply("I do not have permissions to ban " + message.mentions.members.first());
                }
            } else {
                message.reply("You do not have permissions to ban " + message.mentions.members.first());
            }
        }
	},
};
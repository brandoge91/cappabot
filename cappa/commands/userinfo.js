const Discord = module.require('discord.js');
module.exports.execute = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username)
		.setDescription("This is the user's info!")
		.setColor("#985986")
		.addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
		.addField("ID", message.author.id)
		.addField("Created At", message.author.createdAt);
	message.channel.send({embed: embed});
  
}




module.exports.help = {
    name: "userinfo",
    aliases: [""],
    usage: 'userinfo @user'
}

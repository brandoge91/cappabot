const { RichEmbed } = require("discord.js");

module.exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new RichEmbed()
        .setTitle(`Balance`)
        .addField(`User`, `<@${userBalance.user}>`)
        .addField(`Balance`, `${userBalance.amount} 💸`)
        .addField(`Position`, userBalance.position)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

module.exports.help = {
    name: "balance",
    aliases: ["money", "credits", "bal"],
    usage: `bal`
}

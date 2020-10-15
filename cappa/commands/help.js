const { RichEmbed } = require("discord.js");

module.exports.execute = async (client, message, args) => {
  message.reply("Here is a list of commands: https://cappa.dev/#commands")
}

module.exports.help = {
    name: "help",
    aliases: ["commands"],
    usage: `help`
}

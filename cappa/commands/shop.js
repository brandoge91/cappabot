const { RichEmbed } = require("discord.js");

module.exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - :dollar: ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new RichEmbed()
  .setTitle("Store")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("Do :?buy <item> to purchase the item.")
  return message.channel.send(embed);
  console.log("Command Used")
};

module.exports.help = {
  name: "shop",
  aliases: [],
  usage: `shop`
};

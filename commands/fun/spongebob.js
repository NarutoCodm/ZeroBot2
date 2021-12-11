const { MessageAttachment } = require("discord.js");

module.exports = {
    name: "sponge-burn",
    aliases: ['spongeburn'],
    description: "spongebob burn a paper template",
    BotPerms: ['ATTACH_FILES'],
    run: async (client, message, args) => {
      const text = args.slice(0).join(' ')
      if(!text) return message.reply("**Provide A Text**")

        const finalLink = `https://api.leoapi.xyz/image/spongebob-burn?text=${encodeURIComponent(text)}`

        const attach = new MessageAttachment(finalLink, 'spongebob.png', null)

        message.channel.send({ files: [attach]})
    } 
}
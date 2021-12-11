const { MessageEmbed } = require("discord.js");
const emote = require("../../config/emotes.json");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
        name: "getcash",
        category: "economy",
        description: "Gives You 5K Per day",
        usage: "daily",
        
        run: async (bot, message, args) => {
    
        let user = message.author;

        let timeout = 86400000;
        let amount = 10000000000000000;

        let daily = await db.fetch(`daily_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            let timeEmbed = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You've Already Collected Your voting Reward\nCollect It Again After ${time.hours} Hours ${time.minutes} Minutes ${time.seconds} Seconds`);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`You've Collected Your Voting Reward Of **${amount}${emote.coin}**\n**Collect Again Tomorrow**`)
                .setFooter("Credits To NarutoCodm")
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.set(`daily_${user.id}`, Date.now())


        }
    }
}
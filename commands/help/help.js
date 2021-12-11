const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')


module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setFooter("Page Home\n"+ client.user.username + " | Made by: NarutoCodm", client.user.displayAvatarURL())
        .addField("ZeroBot is a discord bot to help your server grow`",)
        .setColor(colors.uptime);

        const embed1 = new Discord.MessageEmbed()
        .setTitle('<:jerryummmtf:912288891204157471> > Admin, Moderation/automod & Economy <:jerryummmtf:912288891204157471> ')
        .addField("ㅤ⠀⠀⠀ \n <:jerryummmtf:912288891204157471>  **Admin** | <:jerryummmtf:912288891204157471>  **ENABLED**",
          "`nuke` `react` `snipe` `dm`\n\n<:jerryummmtf:912288891204157471>  **Moderation** | <a:yes:865963544380964864> **ENABLED** \n `addrole` `ban` `purge` `hackban` `kick` `lock` `mute` `removerole` `slowmode` `timedlockdown` `unlock` `unmute` `addrole` `tempban` `warn` `warnings` `resetwarns`\n\n<:jerryummmtf:912288891204157471> **AutoModeration** | <:jerryummmtf:912288891204157471>  **ENABLED** \n `anti-alt` `autorole` `role-all`"
        )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

        const embed2 = new Discord.MessageEmbed()
     .setTitle('<:jerryummmtf:912288891204157471> > Info & help <:jerryummmtf:912288891204157471> ')
      .addField("⠀⠀⠀ \n <:jerryummmtf:912288891204157471>  **Info** | <:jerryummmtf:912288891204157471>  **ENABLED**",
        "`badges` `botinfo` `roleinfo` `servericon` `serverinfo` `userinfo` `invite` `uptime` `avatar` \n\n<:jerryummmtf:912288891204157471>  **Help** | <:jerryummmtf:912288891204157471>  **ENABLED**\n `bug` `help` `invite`\n\n<:jerryummmtf:912288891204157471> **ECONOMY** | <:jerryummmtf:912288891204157471>  **ENABLED** \n  `balance` `buy` `daily` `deposit` `give` `inventory` `leaderboard` `rob` `shop` `use` `weekly` `withdraw` `work`"
        )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

        const embed3 = new Discord.MessageEmbed()
      .setTitle('<:jerryummmtf:912288891204157471>  Fun & Images <:jerryummmtf:912288891204157471> ')
      .addField("ㅤ⠀⠀⠀ \n <:fun:866155255321853982> **Fun** | <:jerryummmtf:912288891204157471>  **ENABLED**","`ascii` `coinflip` `drake` `emojify` `joke` `meme` `rps` `slap` `trumptweet` `idp` `snipe` `github`\n\n <:jerryummmtf:912288891204157471>  **Image** | <:jerryummmtf:912288891204157471>  **ENABLED** \n`achievement` `captcha` `hug` `gay` `meeting` `rip` `tweet` `300yr` `anime` `comment` `slap` `wated`\n\n <:jerryummmtf:912288891204157471>  **Leveling** | <:jerryummmtf:912288891204157471>  **ENABLED** \n`rank` `leaderboard`",)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

       const embed4 = new Discord.MessageEmbed()
      .setTitle(`<:jerryummmtf:912288891204157471>  Giveaway &Owner <:jerryummmtf:912288891204157471> `)
      .addField("ㅤ⠀⠀⠀ \n <:jerryummmtf:912288891204157471>   **Giveaway** | <:jerryummmtf:912288891204157471>   **Enable**",
        "`gstart` `gend` `geroll` `ginfo` `gdrop` `gedit` `gdelete`\n\n<:jerryummmtf:912288891204157471>  **Owner** | <:jerryummmtf:912288891204157471>  **ENABLED** \n`eval` `leaveserver` `serverlist` `status`\n\n<:jerryummmtf:912288891204157471> **UTILITY** | <:jerryummmtf:912288891204157471>  **ENABLED** \n`vote` `advice` `findemoji` `members or membercount` `announce`\n\n<:jerryummmtf:912288891204157471> **GAMES** | <:jerryummmtf:912288891204157471>  **ENABLED** \n`8ball`")
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);


       const embed5 = new Discord.MessageEmbed()
      .setTitle(`<:jerryummmtf:912288891204157471>  Ticket <:jerryummmtf:912288891204157471> `)
      .addField("ㅤ⠀⠀⠀ \n <:jerryummmtf:912288891204157471>  **Ticket** | <:jerryummmtf:912288891204157471> **ENABLED**",
        "`$ticket (autosetup)`")
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Admin , Auto/Moderation')
        .setEmoji('916310968173207592')
        .setValue('option1')
        .setDescription('Admin , Auto/Moderation')

        let option2 = new MessageMenuOption()
        .setLabel('Info, Help & Economy')
        .setEmoji('916310968173207592')
        .setValue('option2')
        .setDescription('Info , General & Aura')

        let option3 = new MessageMenuOption()
        .setLabel('Fun , Image & leveling')
        .setEmoji('916310968173207592')
        .setValue('option3')
        .setDescription('Fun , Image & Nsfw')

        let option4 = new MessageMenuOption()
        .setLabel('giveaway, utitlty,games')
        .setEmoji('916310968173207592')
        .setValue('option4')
        .setDescription('Vote our discord bot')

        let option5 = new MessageMenuOption()
        .setLabel('Tickets')
        .setEmoji('916310968173207592')
        .setValue('option5')
        .setDescription('Ticket')
        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Click here to view the help menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4, option5)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 100000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }

        if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
        }

        if(b.values[0] == "option6") {
            Sendmenu.edit(embed6, select)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit("<a:no:865963806483808256> This help menu is expired! Please retype the command to view again.")
    })

    }
  };

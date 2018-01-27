const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('Party Is On');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
client.user.setStatus("online");
});

client.on('ready', () => {
  client.user.setGame(`=help لرؤية الاوامر`,'https://www.twitch.tv/Super');
 
});

client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
if (message.content === '=help') {
              var embed  = new Discord.RichEmbed()
                .addField("broadcast (bc)" ,"**الاستخدام:** ``=broadcast <الرساله> , -bc <الرساله>``")
                .addField("**BAN**" ,"**الاستخدام:** ``=ban <المستخدم>``")
                .addField("**KICK**" ,"**الاستخدام:** ``=kick <المستخدم> ``")
                .addField("**ِAVATAR**" ,"**الاستخدام:** ``=avatar``")
                .addField("**INFO**", "**الأستخدام :** ``=info``")
                .addField("**SAY**" ,"**الاستخدام:** ``=say <الرساله>``")
                .addField("**ID**" ,"**الأستخدام:** ``=id``")
                .addField("**SERVER**" ,"**الاستخدام:** ``=server``")
                .addField("**INVITE**" ,"**الاستخدام:** ``=invite <لأضافه البوت لأى سيرفر>``")
                .addField("**SUPPORT**" ,"**الاستخدام:** ``=support <سيرفر دعم الفنى>``")
                .addField("**CLEAR**" ,"**الاستخدام:** ``=clear <العدد>``")
                .addField("**PING**", "**الأستخدام:** ``=ping``")
                .addField("**SERVERNAME**", "**الأستخدام:** ``=servername``")
                .addField("**NO INVITE LINKE**","تم اضافة خاصية منع الانفيتات ")
                .addField("**LOGIN**" , " تم اضافة خاصية التفعيل لطلب تشغيلها في السيرفر كلم المبيرمجين ")
				.addField("**ADD ROOM v**" ,"**الاستخدام:** ``=vroom ``")
				.addField("**ADD ROOM TEXT**" ,"**الاستخدام:** ``=croom ``")
                .addField("**:hearts:**" ,"**الأستخدام:** ``=رابط``").setColor('RANDOM')

.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.login (process.env.BOT_TOKEN) 

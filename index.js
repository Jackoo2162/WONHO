const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
  if (message.content === 'shit') {
   // message.reply('pong');
    message.channel.sendMessage('ah yh');
  }
});


bot.on('message', message => {
  if (message.content === 'qq') {
   // message.reply('pong');
    message.channel.sendMessage('When I saw you');
  }
});


bot.on('message', message => {
  if (message.content === 'neomaneul saenggakhago') {
   // message.reply('pong');
    message.channel.sendMessage('when I love you');
  }
});

bot.on('message', message => {
  if (message.content === 'hmmmmm') {
   // message.reply('pong');
    message.channel.sendMessage('did you miss me?');
  }
});


bot.on("ready", () => {
  bot.user.setPresence({game: {name:"SINGING WITH JIU BOT"}})
  console.log('I have jackoo: {SERVERNAME}')
})

bot.on('message', message => {
  if (message.content === 'nae mami byeonhandaedo') {
   // message.reply('pong');
    message.channel.sendMessage('hmmmm');
  }
});

bot.on('message', message => {
  if (message.content === 'I will') {
   // message.reply('pong');
    message.channel.sendMessage('I wish you next');
  }
});

bot.on('message', message => {
  if (message.content === 'to me like this') {
   // message.reply('pong');
    message.channel.sendMessage('Can I go back...');
  }
});

bot.on('message', message => {
  if (message.content === 'When I saw you?') {
   // message.reply('pong');
    message.channel.sendMessage('Always behind of you');
  }
});

bot.on('message', message => {
  if (message.content === 'OK! Why is it you?') {
   // message.reply('pong');
    message.channel.sendMessage('huh');
  }
});

bot.on('message', message => {
  if (message.content === 'geot gata dache mwoya banhaebeorin geot gata') {
   // message.reply('pong');
    message.channel.sendMessage('ok! why is it you?');
  }
});


bot.on('message', message => {
  if (message.content === 'geot gata dache mwoya banhaebeorin geot gata!') {
   // message.reply('pong');
    message.channel.sendMessage('ah');
  }
});

bot.on('message', message => {
  if (message.content === 'All day, in my head, round and round it goes question mark, everyday') {
   // message.reply('pong');
    message.channel.sendMessage('I know');
  }
});

bot.on('message', message => {
  if (message.content === 'niga nal manjimyeon onmomi baneunghae') {
   // message.reply('pong');
    message.channel.sendMessage('niga isseoya sal su isseo every day, every night I can feel you');
  }
});

bot.on('message', message => {
  if (message.content === 'neon neomu areumdawo nuneul ttel suga eopseo oh no') {
   // message.reply('pong');
    message.channel.sendMessage('oh no');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});


bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'WONHO');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});


// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


bot.login('NDA3MzcyOTk2ODU3MDM2ODAw.DVBhrQ.pk-QAV8HFIQ751eCBp1D4ram59Y');

const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NDA5MDMyODQxNDg2NDAxNTM2.DVYzgQ.ruwhnY2CFa7X8Oeixaq1tVo1gQo';

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'discutii-generale');
  /if (!channel) return;
  channel.send(`[+] ${member}`);
});

client.login(token);

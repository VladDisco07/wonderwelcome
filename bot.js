//outdated (editing this in 2021)

const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'no, not again man';

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'discutii-generale');
  /if (!channel) return;
  channel.send(`[+] ${member}`);
});

client.login(token);

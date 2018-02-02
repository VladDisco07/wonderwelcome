/*
  A bot that welcomes new guild members when they join
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDA5MDMyODQxNDg2NDAxNTM2.DVYzgQ.ruwhnY2CFa7X8Oeixaq1tVo1gQo';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'discutii-generale');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`:black_small_square: **Bine ai venit**, ${member}!

Bun venit pe comunitatea Wonderland!
Sperăm să îți placă această comunitate care a fost muncită și a ajuns foarte sus în trecut, cu ajutorul celor care au intrat pe serverul nostru și au fost activi.

:black_small_square: **Pentru început**:

Pentru inceput, te rugăm să treci pe la canalele:
- #reguli-si-informatii - Pentru a vedea regulamentul și informațiile
- #noutati - Pentru a vedea ce am mai adăugat, ce s-a mai întâmplat etc`);
});

// Log our bot in
client.login(token);

const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"] , intents: ["GUILD_MESSAGES", "GUILDS", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGE_REACTIONS"]});

const prefix = 'es!';

const fs = require('fs');

const { MessageEmbed } = require('discord.js');

client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('bot is online!');
	client.user.setPresence({ activities: [{ name: 'East Scarpe', type: 'PLAYING' }], status: 'dnd' });
});

client.on('message', message => {
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  if(command === 'oom'){
	  message.channel.send('OutOfMemoryException errors on Windows mean that your game ran out of memory. The game only has access to a small part of your computers memory by default. See this page for more info and common fixes: https://stardewvalleywiki.com/Modding:Player_Guide/Troubleshooting#OutOfMemoryException_errors_.28Windows_only.29.');
	//} else if (command === 'list') {
	//  message.channel.send('https://gist.github.com/AnotherPillow/6c852cf10fa0ada69f9d78a44692e609');
	//} else if (command === 'void') {
	//  message.channel.send('https://gist.github.com/AnotherPillow/11f0079623367aab76978f3c0038701d');
  } else if (command === 'log') {
	  message.channel.send('Can you upload your SMAPI log to https://smapi.io/log (see instructions on that page) and share the link here?');
	// ...
	}
	else if (command === 'roleembed') {
		const exampleEmbed = new MessageEmbed()
			.setColor('#9E4F8C')
			.setTitle('East Scarpe Self Roles')
			.setDescription('React with the corresponding emoji to the role listed below to get that role!')
				.setThumbnail('https://cdn.discordapp.com/icons/702333912722178059/1d38b595f1461ed7c72ebb5d09833d6f.png')
			.addFields(
					{ name: '<:632418462471290896:702346038442197042> : Villager', value: '⁯'},
					{ name: '📚 : Student', value: '⁯'},
					{ name: '🖌️ : Artisan', value: '⁯'},
			)
			.setFooter('Embed and bot by Pillow', 'https://cdn.discordapp.com/icons/702333912722178059/1d38b595f1461ed7c72ebb5d09833d6f.png');

		message.channel.send({ embeds: [exampleEmbed] });
	}
	else if (command === 'nochannels') {
		const exampleEmbed = new MessageEmbed()
			.setColor('#9E4F8C')
			//.setTitle('Can you no longer see any channels?')
			//.setDescription('⁯')
			.setThumbnail('https://cdn.discordapp.com/icons/702333912722178059/1d38b595f1461ed7c72ebb5d09833d6f.png')
			.addFields(
				{ name: 'If you can no longer see any channels, please go to the message in #self-roles and react in order to get a role.', value: 'Link to message: https://discord.com/channels/702333912722178059/826727582669733899/896836248000417823' },
			)
			.setFooter('Embed and bot by Pillow', 'https://cdn.discordapp.com/icons/702333912722178059/1d38b595f1461ed7c72ebb5d09833d6f.png');

		message.channel.send({ embeds: [exampleEmbed] });
	}


	//thisisamessage.react("👋");


});

client.login('token');

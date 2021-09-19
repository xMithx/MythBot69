const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const roleWidget = require("../helpers/roleWidget");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('banking-channel-setup')
		.setDescription('Set up your banking widget'),
	async execute(interaction) {
		let roleWidget = require("../helpers/roleWidget")
		let widget = roleWidget.create(
			"New World Banker",
			"People who wish to volunteer storage space at company HQ (Entire storage bin in that city)",
			"join-new-world-banker",
			"leave-new-world-banker"
		)
		await interaction.reply(widget);
	},
};

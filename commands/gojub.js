const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('꼬접')
    .setDescription('꼬접 마려우신분들을 위한 짤'),

    async execute(interaction) {
        await interaction.deferReply();
        const gojub = new MessageEmbed()
        .setColor('RED')
        .setTitle('꼬접개마렵네')
        .setImage('https://i.imgur.com/qKUfs6E.png')
       
        interaction.editReply({ embeds: [gojub] });
    
    }
}
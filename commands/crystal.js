const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { default: axios } = require("axios");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('크리스탈')
        .setDescription('크리스탈 시세 확인'),
    async execute(interaction) {
        await interaction.deferReply();

        axios.get('http://152.70.248.4:5000/crystal/')
            .then(response => {
                if (response.data.Result == "Failed") {
                    const error_notify = new MessageEmbed()
                        .setColor('RED')
                        .setTitle("알 수 없는 오류가 발생했습니다.")
                    interaction.editReply({ embeds: [error_notify], ephemeral: true });
                } else {
                    const crystal_result = new MessageEmbed()
                    .setColor('GOLD')
                    .setTitle('시세')
                    .addField('크리스탈 구매가', '```css\n' + response.data.Buy + '\```')
                    .addField('크리스탈 판매가', '```fix\n' + response.data.Sell + '\```')
                       
                    interaction.editReply({ embeds: [crystal_result] });
                }
            });
    }
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { default: axios } = require("axios");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('모험섬')
        .setDescription('모험섬 확인'),
    async execute(interaction) {
        await interaction.deferReply();

        axios.get('http://152.70.248.4:5000/adventureisland/')
            .then(response => {
                if (response.data.Result == "Failed") {
                    const error_notify = new MessageEmbed()
                        .setColor('RED')
                        .setTitle("알 수 없는 오류가 발생했습니다. | 잠시 후 다시 시도해주세요.")
                    interaction.editReply({ embeds: [error_notify], ephemeral: true });
                } else {
                    advenisland = ""

                    for (const i in response.data.Island) {
                        advenisland = advenisland + response.data.Island[i].Name + " [" + response.data.Island[i].Reward + "]\n"
                    }

                    const adv_result = new MessageEmbed()
                        .setColor('GOLD')
                        .setTitle('오늘의 모험섬')
                        .addFields(
                            { 
                                name: response.data.IslandDate, value: 
                                response.data.Island[0].Name + ' : `'+ response.data.Island[0].Reward +'`' + '\n' +
                                response.data.Island[1].Name + ' : `'+ response.data.Island[1].Reward +'`' + '\n' +
                                response.data.Island[2].Name + ' : `'+ response.data.Island[2].Reward +'`'
                            },
                        )
                       
                    interaction.editReply({ embeds: [adv_result] });
                }
            });
    }
};
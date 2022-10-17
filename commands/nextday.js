const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const moment = require('moment'); // 날짜 라이브러리
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('내일')
    .setDescription('내일할 프로키온의 나침반을 보여줍니다.'),

    async execute(interaction) {
        const week = moment().day();
        const days = ["월", "화", "수", "목", "금", "토", "일"]
        const work = [
            "카오스 게이트",
            "필드보스\n유령선",
            "로요일 없음!",
            "유령선\n카오스 게이트",
            "필드보스",
            "유령선\n카오스 게이트\n[ 점령 이벤트 ]",
            "필드보스\n카오스 게이트\n[ 점령 이벤트 ]",
        ]
        await interaction.deferReply();
         const nextday = new MessageEmbed()
         .setColor('YELLOW')
         .addField(`${moment().format('a') === "am"
             ? moment().format('hh') <= 5
                 ? week === 0
                     ? days[6]
                     : days[week - 1]
                 : days[week]
             : days[week]}요일 숙제`,
             '```css\n' + `${moment().format('a') === "am"
                 ? moment().format('hh') <= 5
                     ? week === 0
                         ? work[6]
                         : work[week - 1]
                     : work[week]
                 : work[week]}` + '\n```')
       
                interaction.editReply({ embeds: [nextday] });
    
    }
}
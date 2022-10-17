const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('기능')
    .setDescription('봇 명령어를 보여줍니다.'),

    async execute(interaction) {
        await interaction.deferReply();
        const help = new MessageEmbed()
            .setColor('YELLOW')
           // .addField('!내실 닉네임', '```css\n' + ' 내실 모험물들을 확인합니다 ' + '\n```')
            //.addField('!계산기', '```css\n' + ' 악세 최적화 계산기 사이트를 확인합니다 ( 개발 : 아이스펭 ) ' + '\n```')
            //.addField('!시너지', '```css\n' + ' 직업 시너지를 확인합니다 ' + '\n```')
            .addField('/입찰', '```css\n' + ' 경매에서 입찰시 적정가와 손익분기점을 알려줍니다. ' + '\n```')
            .addField('/정보 닉네임 타인표시', '```css\n' + ' 로스트아크 캐릭터 정보를 가져옵니다 ' + '\n```')
        .addField('/오늘', '```css\n' + ' 오늘의 캘린더 일정을 확인합니다 ' + '\n```')
            .addField('/내일', '```css\n' + ' 다음 날 캘린더 일정을 확인합니다 ' + '\n```')
            .addField('/크리스탈', '```css\n' + ' 크리스탈의 구매,판매 가격을 확인합니다. ' + '\n```')
            .addField('/모험섬', '```css\n' + ' 당일 모험섬을 확인합니다. ' + '\n```')
            .addField('/사사게 닉네임', '```css\n' + ' 최근 1만개 게시글중에서 사사게기록이 있는지 확인합니다. ' + '\n```')
       
        interaction.editReply({ embeds: [help] });
    
    }
}
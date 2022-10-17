const { SlashCommandBuilder, ButtonBuilder } = require('@discordjs/builders')
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
module.exports = {
 data : new SlashCommandBuilder()
	.setName('보상')
	.setDescription('군단장,던전 레이드 보상을 확인합니다.')
	.addStringOption(option =>
		option.setName('군단장')
			.setDescription('군단장,던전을 선택합니다.')
			.setRequired(true)
			.addChoices(
				{ name: '발탄', value: 'baltan' },
				{ name: '비아키스', value: 'bia' },
				{ name: '쿠크세이튼', value: 'kuku' },
				{ name: '아브렐슈드(준비중)', value: 'abrel' },
				{ name: '카양겔(준비중)', value: 'kayangel' },
			)		
			),


            async execute(interaction) {
				await interaction.deferReply();
				if(interaction.options.getString('군단장') == 'baltan'){
					const embed = new MessageEmbed()
					.setColor('#0099ff')
					.setTitle('발탄 레이드 보상')
					.addFields(
						{ name: '노말 1관문', value: '마수의 힘줄 3개\n마수의 뼈 1개\n골드:500<:Gold:852070625592999958>\n\n더보기(골드:500<:Gold:852070625592999958>)\n마수의 힘줄 3개,마수의 뼈 1개', inline: true },
						{ name: '노말 2관문', value: '마수의 힘줄 3개\n마수의 뼈 2개\n골드:2000<:Gold:852070625592999958>\n\n더보기(골드:800<:Gold:852070625592999958>)\n마수의 힘줄 3개,마수의 뼈 2개', inline: true },
						{ name: '\u200B', value: '\u200B' },
						{ name: '하드 1관문', value: '마수의 뼈 3개\n골드:1000<:Gold:852070625592999958>\n\n더보기(골드:900<:Gold:852070625592999958>)\n마수의 뼈 3개', inline: true },
						{ name: '하드 2관문', value: '마수의 뼈 3개\n골드:3500<:Gold:852070625592999958>\n\n더보기(골드:1200<:Gold:852070625592999958>)\n마수의 뼈 3개', inline: true },

					)
				 interaction.editReply({ embeds: [embed] });
				} else if(interaction.options.getString('군단장') == 'bia'){
					const embed = new MessageEmbed()
					.setColor('#FF4500')
					.setTitle('비아키스 레이드 보상')
					.addFields(
						{ name: '노말 1관문', value: '욕망의 송곳니 2개\n욕망의 날개 1개\n골드:500<:Gold:852070625592999958>\n\n더보기(골드:400<:Gold:852070625592999958>)\n욕망의 송곳니 2개\n욕망의 날개 1개', inline: true },
						{ name: '노말 2관문', value: '욕망의 송곳니 2개\n욕망의 날개 1개\n골드:600<:Gold:852070625592999958>\n\n더보기(골드:600<:Gold:852070625592999958>)\n욕망의 송곳니 2개\n욕망의 날개 1개', inline: true },
						{ name: '노말 3관문', value: '욕망의 송곳니 2개\n욕망의 날개 1개\n골드:1400<:Gold:852070625592999958>\n\n더보기(골드:800<:Gold:852070625592999958>)\n욕망의 송곳니 2개\n욕망의 날개 1개', inline: true },
						{ name: '\u200B', value: '\u200B' },
						{ name: '하드 1관문', value: '욕망의 날개 2개\n골드:1000<:Gold:852070625592999958>\n\n더보기(골드:700<:Gold:852070625592999958>)\n욕망의 날개 2개', inline: true },
						{ name: '하드 2관문', value: '욕망의 날개 2개\n골드:1000<:Gold:852070625592999958>\n\n더보기(골드:900<:Gold:852070625592999958>)\n욕망의 날개 2개', inline: true },
						{ name: '하드 3관문', value: '욕망의 날개 2개\n골드:2500<:Gold:852070625592999958>\n\n더보기(골드:1200<:Gold:852070625592999958>)\n욕망의 날개 2개', inline: true },

					)
					interaction.editReply({ embeds: [embed] });
				} else if(interaction.options.getString('군단장') == 'kuku'){
					const embed = new MessageEmbed()
					.setColor('#9ACD32')
					.setTitle('쿠크세이튼 레이드 보상')
					.addFields(
						{ name: '노말 1관문', value: '광기의 나팔 1개\n광기의 표식 50개\n골드:1000<:Gold:852070625592999958>\n\n\n더보기(골드:800<:Gold:852070625592999958>)\n광기의 나팔 1개', inline: true },
						{ name: '노말 2관문', value: '광기의 나팔 2개\n광기의 표식 50개\n골드:1000<:Gold:852070625592999958>\n\n\n더보기(골드:1000<:Gold:852070625592999958>)\n광기의 나팔 2개', inline: true },
						{ name: '노말 3관문', value: '광기의 나팔 2개\n광기의 표식 100개\n**에스더의 기운**(확률 낮음)\n골드:2500<:Gold:852070625592999958>\n\n더보기(골드:1300<:Gold:852070625592999958>)\n광기의 나팔 2개', inline: true },

					)
					interaction.editReply({ embeds: [embed] });
				} else 
				interaction.editReply({ content:"현재옵션은 준비중입니다."});
               }
            }
            
<template>
	<div class="step-cart" ref="stepCart">
			<Title
				:headerTitle="stepData[id].titlePage"
			/>
			<h1 class="step-cart__title">{{stepData[id].titleStep}}</h1>

			<!-- Аудиодорожки -->

			<Music
				v-for="(music, index) in stepData[id].playList"
				:key="music"
				ref="playerList"
				:subTitle="music.subTitle"
				:title="music.title"
				:music="music.audio"
				:index="index"
				:image="music.image"
				:playList="stepData[id].playList"
				@paused="musicPaused"
			/>

			<!-- Галерея  -->

			<div class="step-cart__gallery">
				<h2 class="step-cart__gallery-title">Позы для фото</h2>
				<div class="step-cart__gallery-slider">
					<img
						v-for="image in stepData[id].posePhoto"
						:key="image"
						:srcset="image"
						alt="Изображение позы"
						class="step-cart__gallery-slider-image"
					>
				</div>
			</div>

			<!-- Описание -->

			<div class="step-cart__description">
				<h2 class="step-cart__description-title">Описание</h2>
				<div class="step-cart__description-text">{{stepData[id].text}}</div>
			</div>
			<div class="btn" @click="checkMap">Посмотреть карту</div>
			<div class="btn">Следующий объект</div>
			<Player
				:audioNow="audioNow"
				:playList="playList"
				@close="onClose"
				ref="player"
			>
			</Player>
	</div>
</template>

<script>

import Title from './Title.vue';
import Player from './Player.vue';
import Music from './Music.vue';

export default {
	data() {
		return {
			id: 0,
			audioNow: '',
			playList: '',
			stepData: [
				{
					titlePage: 'Точка №1 эрмитаж',
					titleStep: 'Эрмитаж',
					playList: [
						{
							title: 'Берегите природу',
							subTitle: 'Часть №1',
							image: require('../assets/эльфийка.jpg'),
							audio: require('../assets/audio/Берегите природу.mp3'),
						},
						{
							title: 'Сиська-перда',
							subTitle: 'Часть №3',
							image: require('../assets/Картман-2.jpg'),
							audio: require('../assets/audio/Сиська-перда.mp3'),
						},
						{
							title: 'Не могу стоять',
							subTitle: 'Часть №4',
							image: require('../assets/батрак.jpg'),
							audio: require('../assets/audio/Не могу стоять.mp3'),
						},
						{
							title: 'Нечто важное!',
							subTitle: 'Часть №5',
							image: require('../assets/Картман.jpg'),
							audio: require('../assets/audio/Нечто важное.mp3'),
						},
					],
					posePhoto: [
						require('../assets/pose.png'),
						require('../assets/pose.png'),
						require('../assets/pose.png'),
						require('../assets/pose.png'),
					],
					text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ipsum voluptatum, placeat magni alias aperiam quisquam eum eius tenetur dolorum nemo, debitis voluptas laborum voluptatem maxime dolores aliquid vel.',
				},
				{
					titlePage: 'Точка №2 эрмитаж',
					titleStep: 'Никиш',
					playList: [
						{
							title: 'Не могу стоять',
							subTitle: 'Часть №1',
							audio: require('../assets/audio/Не могу стоять.mp3'),
						},
						{
							title: 'Сиська-перда',
							subTitle: 'Часть №2',
							audio: require('../assets/audio/Сиська-перда.mp3'),
						},
					],
					posePhoto: [
						'../assets/pose.png',
						'../assets/pose.png',
						'../assets/pose.png',
					],
					text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ipsum voluptatum, placeat magni alias aperiam quisquam eum eius tenetur dolorum nemo, debitis voluptas laborum voluptatem maxime dolores aliquid vel.',
				},
			],

		};
	},

	components: {
		Title,
		Player,
		Music,
	},

	methods: {
		musicPaused(musicEl) {
			// Взять все music this.$refs.playerList
			// Отфильтровать оттуда music которйы пришел аргументов (musicEl)
			// После вызвать pause у отфильтрованных музиков

			const
				musics = this.$refs.playerList,
				musicIsPlaying = this.$refs.playerList.find((el) => musicEl === el),
				musicPaused = musics.filter((el) => el !== musicIsPlaying);
			console.log('~ musicPaused', musicEl);

			musicPaused.forEach((el) => el.onEnded());
		},

		close() {

		},

		checkMap() {
			this.$router.push(
				{
					name: 'map',
				},
			);
		},

	},

	mounted() {
	},
};

</script>

<style lang="stylus">

	.step-cart > .header
		margin 0 0 42px 20px

	.step-cart
		width 100%
		height 100%
		display flex
		flex-direction column
		margin 0 20px
		z-index 1

		&__title
			text-align start
			font-size 24px
			font-weight bold
			margin 0 0 32px 20px
			letter-spacing 1.2px

		&__gallery
			overflow hidden
			margin-bottom 40px
			height 201px

			&-title
				font-size 21px
				font-weight bold
				letter-spacing 1px
				text-align start
				margin 0 0 32px 20px

			&-slider
				height 131px
				overflow-x scroll
				padding-bottom 20px
				display flex
				flex-direction row

				&-image
					margin-right 20px
					max-height 121px

					&:first-child
						margin-left 20px

		&__description
			display flex
			flex-direction column
			margin 0 20px 40px 20px

			&-title
				font-size 21px
				font-weight bold
				text-align start
				letter-spacing 1.2px
				margin-bottom 24px

			&-text
				font-size 16px
				font-weight bold
				letter-spacing 1px
				line-height 107%
				text-align start

	.player-on
		overflow-y hidden

</style>

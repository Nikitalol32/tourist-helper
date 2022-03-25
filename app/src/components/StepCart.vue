<template>
	<div class="step-cart">
			<Title
				:headerTitle="stepData[id].titlePage"
			/>
			<h1 class="step-cart__title">{{stepData[id].titleStep}}</h1>

			<!-- Аудиодорожки -->

			<div
				class="step-cart__part"
				v-for="(step, i) in stepData[id].playList"
				:key="step"
			>
				<div
					class="step-cart__part-container"
					@click="playList(i)"
				>
					<div class="step-cart__part-chapter">Часть №{{i+1}}</div>
					<div class="step-cart__part-title">{{step.title}}</div>
				</div>
				<button class="step-cart__part-btn-play" @click="playSong(i)">
				</button>
				<audio class="step-cart__part-audio" :src="step.audio"></audio>
			</div>

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
	</div>
</template>

<script>

import Title from './Title.vue';

export default {
	data() {
		return {
			id: 0,
			stepData: [
				{
					titlePage: 'Точка №1 эрмитаж',
					titleStep: 'Эрмитаж',
					playList: [
						{
							title: 'История основания',
							audio: require('../assets/audio/track1.mp3'),
						},
						{
							title: 'Архитекторы',
							audio: require('../assets/audio/track2.mp3'),
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
							title: 'История основания',
							audio: require('../assets/audio/track1.mp3'),
						},
						{
							title: 'Архитекторы',
							audio: require('../assets/audio/track2.mp3'),
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
	},

	methods: {
		playList(i) {
			this.$router.push({
				query: { player: i },
				name: 'player',
			});
		},

		playSong(i) {
			console.log(i);
			const
				audio = document.querySelectorAll('.step-cart__part-audio'),
				audioNow = audio[i],
				player = document.querySelectorAll('.step-cart__part'),
				playerNow = player[i];

			console.log(audioNow.played);

			// Плей

			function playSong() {
				audioNow.play();
				console.log(audioNow.src);
			}

			// Пауза

			function pauseSong() {
				audioNow.pause();
				console.log(audioNow.paused);
			}

			// Звук

			audioNow.volume = 0.03;

			if (!playerNow.classList.contains('play')) {
				// Проеверка на другие запущенные аудиодорожки
				for (let b = 0; b < audio.length; b++) {
					if (audio[b] !== audioNow) {
						audio[b].pause();
						player[b].classList.remove('play');
						player[b].classList.add('pause');
						console.log(audio[b]);
					}
				}

				playSong();
				console.log('play');
				playerNow.classList.remove('pause');
				playerNow.classList.add('play');
			} else {
				pauseSong();
				console.log('pause');
				playerNow.classList.remove('play');
				playerNow.classList.add('pause');
			}
		},

		checkMap() {
			this.$router.push(
				{
					name: 'map',
				},
			);
		},

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

		&__title
			text-align start
			font-size 24px
			font-weight bold
			margin 0 0 32px 20px
			letter-spacing 1.2px

		&__part
			display flex
			flex-direction row
			justify-content space-between
			align-items center
			margin 0 20px 40px 20px

			&-container
				display flex
				flex-direction column
				text-align start

			&-chapter
				font-size 16px
				margin-bottom 8px
				letter-spacing 1px

			&-title
				font-size 18px
				font-weight bold
				letter-spacing 1px

			&-btn-play
				width 26px
				height @width
				border none
				border-radius 50%
				background-image url(../assets/play.svg)
				background-size cover
				background-repeat no-repeat
				background-color transparent

			&-audio
				display none

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

	.pause > .step-cart__part-btn-play
		background-image url(../assets/play.svg)
		background-size cover
		background-repeat no-repeat

	.play > .step-cart__part-btn-play
		background-image url(../assets/pause.svg)
		background-size cover
		background-repeat no-repeat

</style>

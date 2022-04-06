<template>
	<div class="phrase-cart">
		<Title
			:headerTitle="titlePage"
		></Title>
		<div class="phrase-cart__phrases">
			<div class="phrase-cart__phrase-container">
				<div class="phrase-cart__phrase">{{phraseData[id].phraseEnglish}}</div>
				<div class="phrase-cart__btn-play"></div>
			</div>
			<div class="phrase-cart__swap">
				<img src="../assets/swap.svg" alt="swap-icon" class="phrase-cart__swap">
			</div>
			<div class="phrase-cart__phrase-container">
				<div class="phrase-cart__phrase">{{phraseData[id].phraseRussian}}</div>
				<div class="phrase-cart__btn-play"></div>
			</div>
		</div>
		<div class="phrase-cart__pronunciation">
			<h2 class="phrase-cart__pronunciation-title">Произношение</h2>
			<div class="phrase-cart__pronunciation-text">{{phraseData[id].pronunciation}}</div>
		</div>
		<div class="phrase-cart__description">
			<h2 class="phrase-cart__description-title">Описание</h2>
			<p class="phrase-cart__description-text">{{phraseData[id].text}}</p>
		</div>
	</div>
</template>

<script>
import Title from './Title.vue';

export default {
	data() {
		return {
			id: '',
			titlePage: 'карточка фразы',
			phraseData: {
				0: {
					phraseEnglish: 'i want call taxi',
					phraseRussian: 'Я хочу вызвать такси',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa ab molestiae error cumque sunt asperiores quam in. Doloremque mollitia accusamus, aliquid quas ducimus itaque temporibus. Vero itaque exercitationem at?',
					pronunciation: 'Йа хачую визвать таксиь',
				},
				1: {
					phraseEnglish: 'i want call taxi',
					phraseRussian: 'Я хочу вызвать такси',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa ab molestiae error cumque sunt asperiores quam in. Doloremque mollitia accusamus, aliquid quas ducimus itaque temporibus. Vero itaque exercitationem at?',
					pronunciation: 'Йа хачую визвать таксиь',
				},
				2: {
					phraseEnglish: 'i want call taxi',
					phraseRussian: 'Я хочу вызвать такси',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa ab molestiae error cumque sunt asperiores quam in. Doloremque mollitia accusamus, aliquid quas ducimus itaque temporibus. Vero itaque exercitationem at?',
					pronunciation: 'Йа хачую визвать таксиь',
				},
				3: {
					phraseEnglish: 'i want call taxi',
					phraseRussian: 'Я хочу вызвать такси',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa ab molestiae error cumque sunt asperiores quam in. Doloremque mollitia accusamus, aliquid quas ducimus itaque temporibus. Vero itaque exercitationem at?',
					pronunciation: 'Йа хачую визвать таксиь',
				},
				4: {
					phraseEnglish: 'i want call taxi',
					phraseRussian: 'Я хочу вызвать такси',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa ab molestiae error cumque sunt asperiores quam in. Doloremque mollitia accusamus, aliquid quas ducimus itaque temporibus. Vero itaque exercitationem at?',
					pronunciation: 'Йа хачую визвать таксиь',
				},
			},
		};
	},

	components: {
		Title,
	},

	beforeMount() {
		this.id = this.$route.query['phrase-cart'];
	},

};

</script>

<style lang="stylus">
	.phrase-cart
		width calc(100% - 40px)
		display flex
		flex-direction column
		margin 0 20px
		letter-spacing 1.5px

		&__phrases
			display flex
			flex-direction column
			margin-bottom 40px

		&__phrase-container
			display flex
			flex-direction row
			width 100%

		&__phrase
			width 100%
			font-size 24px
			text-align start
			font-weight bold

		&__btn-play
			width 26px
			height @width
			border none
			border-radius 50%
			background-image url(../assets/play.svg)
			background-size cover
			background-repeat no-repeat
			background-color transparent

		&__swap
			margin 12px 0

		&__pronunciation
			width 100%
			margin-bottom 40px
			text-align start

			&-title
				font-size 16px
				margin-bottom 12px

			&-text
				font-size 18px
				font-weight bold

		&__description
			width 100%
			text-align start

			&-title
				font-size 21px
				font-weight bold
				margin-bottom 12px

			&-text
				font-size 16px
				line-height 117%

</style>

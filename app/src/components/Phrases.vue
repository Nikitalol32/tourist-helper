<template>
	<div class="phrases">
		<Title
			:headerTitle="titlePage"
		></Title>
		<div class="input-container">
			<input
				v-model="phrase"
				type="text"
				class="input"
				@input="inputPhrase(phrase)"
			>
			<img
				src="../assets/search.svg"
				alt="иконка поиска"
				class="search-icon"
			>
		</div>
		<div class="phrases__phrase-list">
			<div
				class="phrases__phrase"
				v-for="(phrase, i) in phrasesData"
				:key="phrase"
				ref="phraseContainers"
			>
				<div class="phrases__phrase-container">
					<div class="phrases__phrase-container-content">
						<div
							class="phrases__phrase-text"
							@click="phraseClick(i)"
							ref="title"
						>{{phrase}}</div>
						<div class="phrases__phrase-buttons">
							<button class="phrases__phrase-btn">
								transport
							</button>
							<button class="phrases__phrase-btn">
								restaurant
							</button>
						</div>
					</div>
					<div class="phrases__phrase-options">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Title from './Title.vue';

export default {
	data() {
		return {
			titlePage: 'Список фраз',
			phrasesData: [
				'I want call taxi',
				'I want call cops',
				'I want call Diablo',
				'I want call taxi',
			],
		};
	},

	components: {
		Title,
	},

	methods: {
		phraseClick(i) {
			this.$router.push({
				query: { 'phrase-cart': i },
				name: 'phrase-cart',
				viewable: 'viewable',
			});
		},

		inputPhrase(title) {
			const
				newPhrase = title.toLowerCase(),
				phraseContainer = this.$refs.phraseContainers,
				phrases = this.$refs.title;

			phrases.forEach((phrase, i) => {
				if (!phrase.innerHTML.toLowerCase().match(newPhrase)) {
					phraseContainer[i].classList.add('unviewable');
					phraseContainer[i].classList.remove('viewable');
				} else {
					phraseContainer[i].classList.remove('unviewable');
					phraseContainer[i].classList.add('viewable');
				}
			});
			console.log(newPhrase);
			console.log(phraseContainer);
			console.log(phrases);
		},
	},
};

</script>

<style lang="stylus">
	.phrases
		display flex
		flex-direction column
		width calc(100% - 40px)

		&__phrase-list
			display flex
			flex-direction column
			width 100%

		&__phrase
			margin-bottom 32px
			border-bottom 1px solid #C4C4C4

			&:last-child
				border none

			&-container
				display flex
				flex-direction row
				align-items center
				width 100%
				margin-bottom 32px

				&-content
					display flex
					flex-direction column
					width 100%

			&-buttons
				display flex
				flex-direction row
				justify-content flex-start

			&-text
				text-align start
				font-size 24px
				font-weight bold
				margin-bottom 24px
				letter-spacing 1.2px

			&-btn
				padding 10px
				text-transform uppercase
				color #fff
				font-size 13px
				border-radius 10px
				background-color var(--red)
				margin-right 20px
				border none
				letter-spacing 1.2px

				&:last-child
					margin-right 0px

			&-options
				display flex
				flex-direction column
				align-items flex-end
				width 20px

				& > div
					width 4px
					height @width
					background-color #59A4F2
					border-radius 50%
					margin-bottom 8px

	.phrases > .viewable
		display block

</style>

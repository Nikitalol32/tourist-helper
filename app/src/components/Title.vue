<template>
	<div class="header">
		<button class="header__button-back"
			@click = 'buttonBack'
		>
			<img src="../assets/back-icon.svg" alt="back">
		</button>
		<h2 v-if="headerTitle" class="header__title">{{headerTitle}}</h2>
		<img
			v-if="like === true"
			src="../assets/icon-like.svg"
			alt="heart" class="header__like"
			@click="likeClick"
		/>
		<div v-else-if="titleEdit" class="header__edit">Редактировать</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
		};
	},

	props: {
		headerTitle: String,
		like: Boolean,
		titleEdit: Boolean,
		closePlayer: Function,
		closeAddNumber: Function,
	},

	methods: {
		buttonBack() {
			if (this.closePlayer) {
				this.closePlayer();
			} else if (this.closeAddNumber) {
				this.closeAddNumber();
				console.log(1);
			} else {
			// eslint-disable-next-line no-restricted-globals
				history.back();
			}
		},
	},

};

</script>

<style lang="stylus">
	.header
		display flex
		justify-content space-between
		align-items center
		flex-direction row
		background-color #fff
		height 35px
		position relative
		margin-bottom 40px

		&__button-back
			background-color #11ffee00
			border none
			z-index 1

		&__title
			text-align center
			text-transform uppercase
			margin 0 auto
			font-weight 900
			z-index 0
			letter-spacing 1px

		&__like
			z-index 1

		&__edit
			font-size 16px
			font-weight bold
			letter-spacing 1px

	.red
		background-color red

	.title__edit
		font-size 16px
		font-weight bold

</style>

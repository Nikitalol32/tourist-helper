<template>
	<div class="header">
		<button class="header__button-back" >
			<img src="../assets/back-icon.svg" alt="back">
		</button>
		<h2 class="header__title">{{headerTitle}}</h2>
	</div>
</template>

<script>
export default {
	props: {
		headerTitle: String,
	},
	methods: {
		buttonBackClick() {

		},
	},

};

</script>

<style lang="stylus">
	.header
		display flex
		justify-content flex-start
		align-items center
		flex-direction row
		width 100%
		padding-left 20px
		background-color #fff
		position fixed
		height 35px
		top 0
		box-shadow 0px 1px 2px 1px rgba(0, 0, 0, 0.11)

		&__button-back
			background-color #11ffee00
			border none

		&__title
			width 100%
			text-align center

</style>

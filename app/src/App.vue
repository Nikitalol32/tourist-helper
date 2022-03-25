<template>
	<Loader v-if="loading"/>
	<Guide v-else-if="checking"/>
	<router-view v-else/>
</template>

<script>
import Loader from '@/components/Loader.vue';
import Guide from '@/components/Guide.vue';

export default {
	components: {
		Loader,
		Guide,
	},

	beforeCreate() {
		console.log('dont ready');
	},

	mounted() {
		console.log('ready');
	},

};

</script>

<style lang="stylus">
	@font-face {
		font-family SFProDisplay;
		src url(./assets/font/SFProDisplay-Thin.woff2);
	}

	*
		padding 0
		margin 0
		font-family SFProDisplay

	body, html
		width 100%
		height 100%

	#app
		text-align center
		display flex
		justify-content center
		align-items center
		box-sizing border-box
		width 100%
		padding-top 40px

	.btn
		padding 12px 0
		text-transform uppercase
		border-radius 10px
		margin 0 20px 20px 20px
		letter-spacing 1.2px
		background-color #59a4f2
		text-align center
		font-weight bold
		color #fff
		font-size 16px

		&-red
			background-color #f1564a

		&:last-child
			margin-bottom 40px

</style>

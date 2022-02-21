<template>
	<Loader v-if="loading"/>
	<Guide v-else-if="checking"/>
	<router-view v-else/>
</template>

<script>
import Loader from '@/components/Loader.vue';
import Guide from '@/components/Guide.vue';

export default {
	data() {
		return {
			loading: false,
			checking: true,
		};
	},

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
		font-family: SFProDisplay;
		src: url(./assets/font/SFProDisplay-Thin.woff2);
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
		width 100%
		height 100%

</style>

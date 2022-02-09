<template>
	<Loader v-if="loading"/>
	<Guide v-else-if="checking"/>
	<MainMenu v-else/>
	<router-view/>
</template>

<script>
import Loader from '@/components/Loader.vue';
import Guide from '@/components/Guide.vue';
import MainMenu from '@/components/MainMenu.vue';

export default {
	data() {
		return {
			loading: false,
			checking: false,
		};
	},

	components: {
		Loader,
		Guide,
		MainMenu,

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
	weight 600

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

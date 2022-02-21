<template>

	<div class="index">
		<MainMenu/>
	</div>

</template>

<script>

import MainMenu from '@/components/MainMenu.vue';

export default {
	data() {

	},
	components: {
		MainMenu,
	},
};

</script>

<style lang="stylus">

	.index
		display flex
		justify-content center
		width 100%
		height 100%

</style>

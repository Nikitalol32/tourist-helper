<template>

	<div class="index">
		<MainMenu/>
	</div>

</template>

<script>

import MainMenu from '@/components/MainMenu.vue';

export default {
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
		height calc(100vh - 40px)

</style>

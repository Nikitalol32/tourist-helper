<template>
	<div class="player">
		<Title></Title>
		<div class="player__audio-image-container">
			<img src="" alt="" class="player__audio-image">
		</div>
		<div class="player__progress">

		</div>
		<div class="player__buttons">
			<button class="player__buttons_prev"></button>
			<button class="player__buttons_play"></button>
			<button class="player__buttons_next"></button>
		</div>
	</div>
</template>

<script>
import Title from './Title.vue';

export default {
	data() {
		return {

		};
	},

	components: {
		Title,
	},
};

</script>

<style lang="stylus">

</style>

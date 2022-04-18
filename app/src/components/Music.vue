<template>
	<div class="music" :class="'music_' + status">
		<div class="music__titles" @click="onOpen">
			<div class="music__sub-title">{{subTitle}}</div>
			<div class="music__title">{{title}}</div>
		</div>
		<div class="music__buttons">
			<div
				v-if="status === 'paused'"
				class="music__button music__button-play"
				@click="play"
			></div>
			<div
				v-else-if="status === 'loading'"
				class="music__button music__button-loading"
			>
				Загружаю
			</div>
			<div
				v-else
				class="music__button music__button-pause"
				@click="pause"
			>
			</div>
		</div>
		<audio
			ref="audio"
			class="music__audio"
			:src="music"
			@canplay="onLoad"
			@ended="onEnded"
		></audio>
	</div>
</template>

<script>
export default {
	data() {
		return {
			status: 'paused',
			isLoaded: false,
		};
	},

	props: {
		title: String,
		subTitle: String,
		music: String,
		index: Number,
		image: String,
		playList: Array,
	},

	methods: {
		play() {
			if (this.isLoaded) {
				this.status = 'playing';
				this.$refs.audio.play();
			} else {
				this.status = 'loading';
				this.$refs.audio.addEventListener('load', this.playAfterLoad);
			}

			this.$root.emitter.emit('music.play', this.status);

			// stop всех треков
			this.$emit('paused', this);

			// Проверить загружен ли трек
			// Если да то установить isPlaying в труе
			// eslint-disable-next-line max-len
			// Если нет - показывать какую-то индикацию загрузки (спинер типа) и когда загрузится - начать играть и установить isPlaying в true
		},

		setTime(time) {
			this.$refs.audio.currentTime = time;
		},

		pause() {
			if (this.isLoaded) {
				this.$refs.audio.pause();
				this.status = 'paused';
			} else {
				this.$refs.audio.removeEventListener('load', this.playAfterLoad);
			}
			console.log('pause');
		},

		playAfterLoad() {
			this.isLoaded = true;
			this.play();
		},

		onLoad() {
			this.isLoaded = true;
		},

		onEnded() {
			this.status = 'paused';
			this.pause();
			this.$refs.audio.currentTime = 0;
			this.$root.emitter.emit('music.paused', this.status);
			console.log('ended');
		},

		onOpen() {
			const
				fullDuration = this.$refs.audio.duration,
				minutes = Math.floor(fullDuration / 60),
				seconds = Math.floor(fullDuration),
				fullTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

			this.$root.emitter.emit('music.open', {
				imageAudio: this.image,
				titlePage: this.title,
				indexAudio: this.index,
				status: this.status,
				playList: this.playList,
				currentTime: this.$refs.audio.currentTime,
				duration: fullTime,
			});

			this.pause();
		},

		dataMusic(status, currentTime, songName) {
			if (status === 'playing' && this.music === songName) {
				this.setTime(currentTime);
				this.play();
			}
		},
	},

	mounted() {
		this.$root.emitter.on('player.close', this.dataMusic);

		this.$root.emitter.on('player.play', this.pause);
	},

	beforeUnmount() {
		console.log('beforeUnmounted');
		this.$root.emitter.removeListener('player.close', this.dataMusic);
		this.$root.emitter.removeListener('player.play', this.pause);
	},
};

</script>

<style lang="stylus">
	.music
		display flex
		flex-direction row
		justify-content space-between
		align-items center
		margin 0 20px 40px 20px
		font-weight bold
		letter-spacing 1px

		&__titles
			display flex
			flex-direction column
			text-align start
			width 100%

		&__sub-title
			font-size 16px
			margin-bottom 8px
			letter-spacing 1px

		&__title
			font-size 18px
			font-weight bold
			letter-spacing 1px

		&__button
			width 26px
			height @width
			border none
			border-radius 50%
			background-size cover
			background-repeat no-repeat
			background-color transparent

			&-play
				background-image url(../assets/play.svg)

			&-pause
				background-image url(../assets/pause.svg)

			&-loading
				border 2px solid #aaa

		&__audio
			display none

</style>

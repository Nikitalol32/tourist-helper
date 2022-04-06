<template>
	<div
		class="player close"
		ref="test"
	>
		<Title
			ref="header"
			:closePlayer="close"
			:headerTitle="title"
		></Title>
		<div class="player-container">
			<div class="player__audio-image-container">
				<img :src="image" alt="обложка трека" class="player__audio-image">
			</div>
			<div class="player__progress">
				<div ref="slider" class="player__progress-slider" style="left:0%"></div>
				<div class="player__progress-line"></div>
			</div>
			<div class="player__timer">
				<div class="player__timer-duration">{{currentTime}}</div>
				<div class="player__timer-duration">{{duration}}</div>
			</div>
			<div class="player__buttons">
				<img
					@click="prevSong"
					src="../assets/prev.svg"
					class="player__buttons_prev"
					ref="prev"
				>
				<img
					v-if="status === 'paused'"
					@click="playSong"
					src="../assets/play.svg"
					class="player__buttons_playing"
					ref="play"
				>
				<img
					v-if="status === 'playing'"
					@click="pauseSong"
					src="../assets/pause.svg"
					class="player__buttons_playing"
					ref="play"
				>
				<img
					@click="nextSong"
					src="../assets/next.svg"
					class="player__buttons_next"
					ref="next"
				>
			</div>
			<audio
				class="player__audio"
				src=""
				ref="audio"
				@timeupdate="onTimeupdate"
			/>
		</div>
	</div>
</template>

<script>
import Title from './Title.vue';

export default {
	data() {
		return {
			title: '',
			image: '',
			duration: '',
			currentTime: '',
			audioNow: '',
			status: 'paused',
		};
	},

	props: {
	},

	methods: {
		open() {
			this.$refs.test.classList.remove('close');
			this.$refs.test.classList.add('open');
			document.body.style = 'overflow-y: hidden';
		},

		close() {
			this.$refs.test.classList.add('close');
			this.$refs.test.classList.remove('open');
			document.body.style = 'overflow-y: unset';
			this.$root.emitter.emit('player.close',
				this.status,
				this.$refs.audio.currentTime,
				this.$refs.audio.getAttribute('src'));
			this.$refs.audio.pause();
			this.$refs.audio.currentTime = this.$refs.audio.duration;
		},

		loadedData() {
		},

		prevSong() {
			//
		},

		playSong() {
			this.status = 'playing';
			this.$refs.audio.play();
			this.$root.emitter.emit('player.play');
		},

		pauseSong() {
			this.status = 'paused';
			this.$refs.audio.pause();
			this.$root.emitter.emit('player.paused', this.status);
		},

		nextSong() {

		},

		onTimeupdate() {
			const
				fullCurrentTime = this.$refs.audio.currentTime,
				fullDuration = this.$refs.audio.duration,
				minutes = Math.floor(fullCurrentTime / 60),
				seconds = Math.floor(fullCurrentTime),
				fullTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
			this.currentTime = fullTime;

			const
				progressSlider = this.$refs.slider,
				percentProgress = Number((fullCurrentTime / fullDuration).toFixed(2)) * 100;

			progressSlider.style = `left: ${percentProgress > 90 ? 90 : percentProgress}%`;
		},
	},

	mounted() {
		this.$root.emitter.on('music.play', (status) => {
			this.status = status;
		});

		this.$root.emitter.on('music.open', (el) => {
			this.open();
			this.title = el.playList[el.indexAudio].title;
			this.image = el.playList[el.indexAudio].image;
			this.audioNow = el.indexAudio;
			this.status = el.status;
			this.$data.playList = el.playList;
			this.currentTime = el.currentTime;
			this.duration = el.duration;
			console.log(el.playList[el.indexAudio]);
			this.$refs.audio.setAttribute('src', el.playList[el.indexAudio].audio);

			if (this.status === 'playing') {
				this.$refs.audio.currentTime = this.currentTime;
				this.$refs.audio.play();
			} else {
				this.pauseSong();
			}
		});

		this.$root.emitter.on('music.paused', (status) => {
			this.status = status;
		});
	},

	components: {
		Title,
	},
};

</script>

<style lang="stylus">
	.player
		display flex
		width 100%
		height calc(100% + 40px)
		z-index 2
		background #fff
		flex-direction column
		align-items center
		top 0

		&-container
			margin 0 auto
			height 100%
			display flex
			flex-direction column

		&__audio-image-container
			border-radius 50%
			max-width 260px
			max-height 260px
			width 100%
			height @width
			border 1px solid #33333333
			padding 20px
			margin 0 auto 51px auto

		&__audio-image
			width 100%
			height 100%
			border-radius 50%

		&__progress
			width 100%
			height 13px
			border-right 2px solid #59A4F2
			border-left 2px solid #59A4F2
			position relative
			display flex
			align-items center
			margin-bottom 12px

			&-slider
				position absolute
				width 25px
				height @width
				border-radius 50%
				border 3px solid #59A4F2
				left 1px
				background-color #fff

			&-line
				width 100%
				height 3px
				background-color #59A4F2

		&__timer
			display flex
			flex-direction row
			justify-content space-between
			width 100%
			margin-bottom 46px

			&-duration
				font-size 14px
				font-weight bold

		&__buttons
			width 100%
			display flex
			flex-direction row
			justify-content space-between
			align-items center

			&_prev
				width 30px
				height @width

			&_playing
				width 67px
				height @width

			&_paused
				width 67px
				height @width

			&_next
				width 30px
				height @width

	.open
		display flex
		position fixed

	.close
		display none

	.player > .header
		width 100%
		margin-top 40px

	.player > .header > .header__button-back
		position absolute
		left 20px

	// .player > .play

</style>

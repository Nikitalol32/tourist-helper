<template>
	<div id="guide">
		<img src="@/assets/Guide-icon.png" class="guide-image">
		<div class="guide-slider">

			<div class="guide-slider__text-container">
				<div class="guide-slider__slide guide-slider__slide_back" @click = 'slideBack()'/>
				<p
					v-for = "(text, index) in sliderTexts"
					class="guide-slider__text"
					:key = "text"
					:class = "index === activeSlide ? 'active-text' : ''"
				>
					{{text.text}}
				</p>
				<div class="guide-slider__slide guide-slider__slide_next" @click = 'slideNext()'/>
			</div>

			<div class="guide-slider__controls">
				<label
					v-for = "(label, index) in sliderTexts"
					class = "guide-slider__control"
					:key = "label"
					:class = "index === activeSlide ? 'active-point' : ''"
					@click = "controlClick(index)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeSlide: 0,
			sliderTexts: [
				{
					text: 'text text text text text text text 1',
				},
				{
					text: 'text text text text text text text 2',
				},
				{
					text: 'text text text text text text text 3',
				},
				{
					text: 'text text text text text text text 4',
				},
				{
					text: 'text text text text text text text 6',
				},
				{
					text: 'text text text text text text text 7',
				},
				{
					text: 'text text text text text text text 8',
				},
				{
					text: 'text text text text text text text 9',
				},
			],
		};
	},

	methods: {
		controlClick(index) {
			this.activeSlide = index;
		},
		slideNext() {
			if (this.activeSlide <= this.sliderTexts.length) {
				this.activeSlide += 1;
			}
		},
		slideBack() {
			console.log(1);
			if (this.activeSlide > 0) {
				this.activeSlide -= 1;
			}
		},
	},
};

</script>

<style lang="stylus">

	#guide
		max-width 60%
		width 100%
		display flex
		justify-content center
		align-items center
		flex-direction column
		padding-top 30px

	.guide-slider
		padding 5px 0px
		width 100%
		height 100%
		position relative

		&__slide
			width 50%
			position absolute
			height 100%
			z-index 1

		&__slide_back
			left 0

		&__slide_next
			right 0

		&__text-container
			padding-top 15px
			position relative
			height 230px
			max-width 250px
			margin 0 auto

		&__text
			opacity 0
			transition opacity ease-in-out .5s

		&__text
			height 100%
			font-size 16px
			position absolute
			width 100%
			overflow auto

		&__controls
			margin-top 25px
			display flex
			justify-content center
			align-content center
			width inherit
			height 15px

		&__control
			background-color #50B1DE
			border-radius 50%
			width 8px
			height @width
			margin 0 8px
			cursor pointer

	.active-point
		background-color #6896e9

	.active-text
		opacity 1

</style>

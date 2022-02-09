<template>
	<div id="guide">
		<img src="@/assets/Guide-icon.png" class="guide-image">
		<div class="guide-slider">
			<input type="radio" name="point" id="slide1" checked>
			<input type="radio" name="point" id="slide2">
			<input type="radio" name="point" id="slide3">
			<input type="radio" name="point" id="slide4">

			<div class="guide-slider__text-container">
				<p class="guide-slider__text slide1">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.1
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.1
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.1
				</p>
				<p class="guide-slider__text slide2">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.2
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.2
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.2
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.2
				</p>
				<p class="guide-slider__text slide3">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.3
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.3
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.3
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.3
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.3
				</p>
				<p class="guide-slider__text slide4">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.4
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.4
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.4
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.4
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.4
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.4
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.4
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.4
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, veritatis.4
				</p>
			</div>

			<div class="guide-slider__controls">
				<label for="slide1" class="guide-slider__control"/>
				<label for="slide2" class="guide-slider__control"/>
				<label for="slide3" class="guide-slider__control"/>
				<label for="slide4" class="guide-slider__control"/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
		};
	},
};

</script>

<style lang="stylus">

	#guide
		max-width 60%
		width 100%
		height 100%
		display flex
		justify-content center
		align-items center
		flex-direction column
		padding-top 30px

	.guide-slider
		padding 5px 0px
		width 100%
		height 100%

	.guide-slider > input
		display none

	.guide-slider__text-container
		padding-top 15px
		position relative
		height 220px
		max-width 250px

	.guide-slider__text
		opacity 0
		transition opacity ease-in-out .5s

	#slide1:checked~.guide-slider__text-container > .slide1,
	#slide2:checked~.guide-slider__text-container > .slide2,
	#slide3:checked~.guide-slider__text-container > .slide3,
	#slide4:checked~.guide-slider__text-container > .slide4
		opacity 1

	.guide-slider__text
		height 100%
		font-size 16px
		position absolute
		width 100%
		overflow auto

	.guide-slider__controls
		margin-top 25px
		display flex
		justify-content center
		align-content center
		width inherit
		height 15px

	.guide-slider__control
		background-color #50B1DE
		border-radius 50%
		width 8px
		height @width
		margin 0 8px
		cursor pointer

	#slide1:checked~.guide-slider__controls label:nth-child(1),
	#slide2:checked~.guide-slider__controls label:nth-child(2),
	#slide3:checked~.guide-slider__controls label:nth-child(3),
	#slide4:checked~.guide-slider__controls label:nth-child(4)
		background #59A4F2

</style>

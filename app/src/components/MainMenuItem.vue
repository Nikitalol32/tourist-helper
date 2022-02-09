<template>
	<div class="main-menu__item">
		<img :srcset="icon" alt="icon" class="main-menu__item_icon">
		<div class="main-menu__item-titles">
			<div class="main-menu__item-titles_title">{{title[0]}}</div>
			<div class="main-menu__item_titles_subtitle">{{title[1]}}</div>
		</div>
		<div class="main-menu__item-options">
			<div class="main-menu__item-options-point"></div>
			<div class="main-menu__item-options-point"></div>
			<div class="main-menu__item-options-point"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		icon: String,
		title: Array,
	},
};

</script>

<style lang="stylus">
	.main-menu__item
		display flex
		flex-direction row
		align-items center
		padding 21.5px 24px 20px 25.5px
		border-radius 12px
		background-color #59A4F2
		width 100%
		margin-bottom 25px
		color #fff
		box-sizing border-box
		cursor pointer

	.main-menu__item:nth-last-child()
		margin-bottom 0px

	.main-menu__item_icon
		padding 0px 15px 0px 0px

	.main-menu__item-titles
		display flex
		flex-direction column-reverse
		align-items flex-start
		width 100%
		line-height 16px

	.main-menu__item-titles_title
		font-size 16px
		font-weight 600
		font-style normal
		letter-spacing 1px

	.main-menu__item-titles_subtitle
		font-size 12px

	.main-menu__item-options
		display flex
		justify-content space-evenly
		flex-direction column
		align-items center
		height 100%
		cursor pointer
		width 15px

	.main-menu__item-options:hover > .main-menu__item-options-point
		transform scale(1.2)

	.main-menu__item-options-point
		background-color #fff
		width 5px
		height @width
		border-radius 50%
		transition ease-in-out .3s

</style>

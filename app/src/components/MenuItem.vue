<template>

	<div class="menu-item-container">
		<!-- Ссылка -->

		<router-link v-if="path" :to="path" class="menu-item" >
			<img v-if="icon" :srcset="icon" alt="icon" class="menu-item__icon">
			<div class="menu-item__titles">
				<div class="menu-item__titles-title">{{title}}</div>
				<div v-if="subTitle" class="menu-item__titles-subtitle">{{subTitle}}</div>
			</div>
			<div class="menu-item__options" v-if="option">
				<div class="menu-item__options-point"></div>
				<div class="menu-item__options-point"></div>
				<div class="menu-item__options-point"></div>
			</div>
		</router-link>

		<!-- Не ссылка)) -->

		<div v-else class="menu-item">
			<img v-if="icon" :srcset="icon" alt="icon" class="menu-item__icon">
			<div class="menu-item__titles">
				<div class="menu-item__titles-title">{{title}}</div>
				<div v-if="subTitle" class="menu-item__titles-subtitle">{{subTitle}}</div>
			</div>
			<div class="menu-item__options" v-if="option">
				<div class="menu-item__options-point"></div>
				<div class="menu-item__options-point"></div>
				<div class="menu-item__options-point"></div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	props: {
		icon: String,
		title: String,
		subTitle: String,
		option: Boolean,
		path: Object,
	},
};

</script>

<style lang="stylus">
	.menu-item
		display flex
		flex-direction row
		align-items center
		padding 21.5px 24px 20px 25.5px
		border-radius 12px
		background-color var(--blue)
		width 100%
		color #fff
		box-sizing border-box
		text-decoration none

		&:nth-last-child()
			margin-bottom 0px

		&__icon
			padding 0px 15px 0px 0px

		&__titles
			display flex
			flex-direction column-reverse
			align-items flex-start
			width 100%
			line-height 16px

			&-title
				font-size 16px
				font-weight 600
				font-style normal
				letter-spacing 1.7px

			&-subtitle
				font-size 12px
				letter-spacing .7px

		&__options
			display flex
			flex-direction column
			align-items center
			height 100%
			cursor crosshair
			width 15px

			&-point
				background-color #fff
				width 5px
				height @width
				border-radius 50%
				margin-bottom 3px

</style>

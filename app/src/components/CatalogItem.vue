<template>
	<div
		class="catalog-item"
		@click="routeClick(id)"
	>
		<img
			:srcset="image"
			alt="architecture"
			class="catalog-item__image"
		>
		<div class="catalog-item__heart-container">
			<img
				:srcset="icon"
				alt="heart"
				class="catalog-item__heart"
			>
		</div>
		<div class="catalog-item__title">
			{{title}}
		</div>
		<div class="catalog-item__sub-title">
			{{subTitle}}
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
		};
	},

	props: {
		id: String,
		image: String,
		icon: String,
		title: String,
		subTitle: String,
	},

	components: {
	},

	methods: {
		routeClick(id) {
			const catalogType = this.$route.name;
			this.$router.push(
				{
					query: {
						'cart-catalog-type': catalogType,
						'cart-catalog': id,
					},
					name: 'cart-catalog',
				},
			);
		},
	},
};

</script>

<style lang="stylus">
	.catalog-item
		min-width 300px
		display flex
		flex-direction column
		margin-right 20px
		padding 16px 16px 20px 16px
		background-color var(--blue)
		border-radius 15px
		color #fff
		box-sizing border-box
		position relative
		text-align start

		&:first-child
			margin-left 20px

		&__image
			margin-bottom 12px
			max-height 78%
			width 100%

		&__heart-container
			position absolute
			width 32px
			height @width
			background-color #fff
			border-radius 50%
			top 28px
			right 28px
			display flex
			justify-content center
			align-items center

		&__heart
			width 26px
			height 26px

		&__title
			margin-bottom 8px
			font-weight bold
			font-size 18px
			letter-spacing 1.2px

		&__sub-title
			font-size 12px
			letter-spacing .7px

</style>

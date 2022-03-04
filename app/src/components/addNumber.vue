<template>
	<div class="add-number">
		<Title
			:titleEdit = "titleEdit"
		>
		</Title>
		<div class="add-number-items">
			<div class="add-number-item add-number__name">
				<h2 class="add-number-item__title">Название</h2>
				<input class="add-number-item__input" type="text" placeholder=" Петух водитель">
			</div>
			<div class="add-number-item add-number__number">
				<h2 class="add-number-item__title">Телефон</h2>
				<input class="add-number-item__input" type="text" placeholder="8888888884">
			</div>
			<div class="add-number-item add-number__description">
				<h2 class="add-number-item__title">Описание</h2>
				<input class="add-number-item__input" type="text" placeholder="Какое-то описание">
			</div>
		</div>
		<button class="add-number__btn add-number__btn-add">Добавить</button>
		<button class="add-number__btn add-number__btn-delete">Удолить</button>
	</div>
</template>

<script>
import Title from './Title.vue';

export default {
	data() {
		return {
			titleEdit: true,
		};
	},

	components: {
		Title,
	},
};
</script>

<style lang='stylus'>
	.add-number
		display flex
		flex-direction column
		justify-content flex-start
		margin 0 20px
		width 100%
		height 100%

		&-title__edit
			font-size 16px
			font-weight bold

		&-item
			margin-top 24px
			border-bottom 1px solid black
			display flex
			flex-direction column

		&-item:first-child
			margin-top 42px

		&-item:last-child
			margin-bottom 40px

		&-item__title
			font-size 21px
			font-weight bold
			margin-bottom 12px
			text-align start

		&-item__input
			border none
			margin-bottom 8px
			font-size 13px
			outline none

		&__btn
			padding 12px 0
			font-size 18px
			color #fff
			background-color #59A4F2
			margin-bottom 28px
			border none
			border-radius 12px

		&__btn:last-child
			margin 0
</style>

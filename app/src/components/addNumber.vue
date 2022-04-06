<template>
	<div class="add-number">
		<Title
			:titleEdit = "titleEdit"
		>
		</Title>
		<div class="add-number-items">
			<div class="add-number-item add-number__name">
				<h2
					class="add-number-item__title"
				>Название</h2>
				<input
					ref="inputNaming"
					class="add-number-item__input"
					type="text"
					placeholder=" Такси"
				>
			</div>
			<div class="add-number-item add-number__number">
				<h2
					class="add-number-item__title"
				>Телефон</h2>
				<input
					ref="inputNumber"
					class="add-number-item__input"
					type="text"
					placeholder="8915342353"
				>
			</div>
			<div class="add-number-item add-number__description">
				<h2
					class="add-number-item__title"
				>Описание</h2>
				<input
					ref="inputDescription"
					class="add-number-item__input"
					type="text"
					placeholder="Какое-то описание"
				>
			</div>
		</div>
		<button @click="addButton()" class="btn">Добавить</button>
		<button class="btn">Удолить</button>
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

	/* eslint-disable no-unused-vars */
	/* eslint-disable no-tabs */
	methods: {
		addButton() {
			const
				naming = this.$refs.inputNaming.value,
				number = this.$refs.inputNumber.value,
				description = this.$refs.inputDescription.value,
				inputs = document.querySelectorAll('.add-number-item__input'),
				inputsContainer = document.querySelectorAll('.add-number-item');

			inputs.forEach((input, i) => {
				if (input.value === '') {
					inputsContainer[i].classList.add('input-clear');
				} else {
					inputsContainer[i].classList.add('input-ready');
				}
				console.log(input, i);
			});
			console.log('~ inputsReady', inputsContainer);

			const
				inputReady = Array.from(inputsContainer).filter((container) => container.classList.contains('input-ready'));

			if (inputReady.length === inputs.length) {
				const newNumber = {
					icon: require('../assets/medicine.svg'),
					menuItemTitle: naming,
					numbers: number,
					text: description,
				};
				this.$emit('newNumber', newNumber, 'close');
			}

			// if (inputsReady.length === inputs.length) {
			// 	console.log(inputsReady);
			// }
		},
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
		align-items center
		width 100%
		height 100%
		background-color #fff
		padding-top 40px

		&-items
			width calc(100% - 40px)

		&-item
			margin-top 24px
			border-bottom 1px solid black
			display flex
			flex-direction column

			&:first-child
				margin-top 42px

			&:last-child
				margin-bottom 40px

			&__title
				font-size 21px
				font-weight bold
				margin-bottom 12px
				text-align start
				letter-spacing 1px

			&__input
				border none
				padding 8px 8px 8px 0
				font-size 13px
				outline none
				letter-spacing 1px
				background-color transparent
				border-radius 10px

		& > .btn
			border none
			width calc(100% - 40px)
			margin 0 0 20px 0

		& > .header
			width calc(100% - 40px)

	.input-clear
		border-bottom 2px solid #f2113a

	.input-ready
		border-bottom 2px solid #1bc44b

</style>

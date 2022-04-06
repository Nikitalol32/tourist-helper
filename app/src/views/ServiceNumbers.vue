<template>
	<div
		class="services"
		ref="services"
	>
		<Title
			:headerTitle='titlePage'
		/>

		<div class="services__service services__service_medicine">
			<h2 class="services__service-title">Медицина</h2>
			<div class="services__slider">
				<div class="services__slider-container">
					<MenuItem
						v-for="medicineItem, in service.medicine"
						@click="serviceClick(medicineItem.id)"
						:option="false"
						:icon="medicineItem.icon"
						:key="medicineItem"
						:title="medicineItem.menuItemTitle"
					/>
				</div>
			</div>
		</div>

		<div class="services__service services__service_cops">
			<h2 class="services__service-title">Полиция</h2>
			<div class="services__slider">
				<div class="services__slider-container">
					<MenuItem
						v-for="copsItem, in service.cops"
						@click="serviceClick(copsItem.id)"
						:option="false"
						:icon="copsItem.icon"
						:key="copsItem"
						:title="copsItem.menuItemTitle"
					/>
				</div>
			</div>
		</div>

		<div class="services__service services__service_embassy">
			<h2 class="services__service-title">Посольство</h2>
			<div class="services__slider">
				<div class="services__slider-container">
					<MenuItem
						v-for="embassyItem in service.embassy"
						@click="serviceClick(embassyItem.id)"
						:option="false"
						:icon="embassyItem.icon"
						:key="embassyItem"
						:title="embassyItem.menuItemTitle"
					/>
				</div>
			</div>
		</div>

		<div class="services__service services__service_transport">
			<h2 class="services__service-title">Таксишки</h2>
			<div class="services__slider">
				<div class="services__slider-container">
					<MenuItem
						v-for="transportItem in service.transport"
						@click="serviceClick(transportItem.id)"
						:option="false"
						:icon="transportItem.icon"
						:key="transportItem"
						:title="transportItem.menuItemTitle"
					/>
				</div>
			</div>
		</div>

		<div class="services__service services__service-my-number">
			<h2 class="services__service-title">Свои номера</h2>
			<div class="services__slider">
				<div class="services__slider-container">
					<div
						class="services__service-add-number"
						@click="addNumber"
					>
						<img src="../assets/plus.svg" alt="plus">
					</div>
					<MenuItem
						v-for="selfNumberItem in service.selfNumbers"
						:key="selfNumberItem"
						@click="serviceClick(selfNumberItem.id)"
						:option="false"
						:icon="selfNumberItem.icon"
						:title="selfNumberItem.menuItemTitle"
					/>
				</div>
			</div>
		</div>
		<AddNumber
			:class="'add-number_' + status"
			ref="addNumber"
			@newNumber="AddNewNumber"
		/>
	</div>
</template>

<script>

import MenuItem from '../components/MenuItem.vue';
import Title from '../components/Title.vue';
import AddNumber from '../components/AddNumber.vue';

export default {
	data() {
		return {
			titlePage: 'Телефончики служб',
			serviceTarget: '',
			service: {
				medicine: [
					{
						menuItemTitle: 'Служба скорой помощи',
						icon: require('@/assets/medicine.svg'),
						id: 'medicine',
					},
					{
						menuItemTitle: 'Служба нескорой помощи',
						icon: require('@/assets/medicine.svg'),
						id: 'medicine2',
					},
					{
						menuItemTitle: 'Служба нескорой помощи',
						icon: require('@/assets/medicine.svg'),
						id: 'medicine3',
					},
				],
				cops: [
					{
						menuItemTitle: 'Полиция',
						icon: require('@/assets/medicine.svg'),
						id: 'cops',
					},
					{
						menuItemTitle: 'Полиция',
						icon: require('@/assets/medicine.svg'),
						id: 'cops2',
					},
				],
				embassy: [
					{
						menuItemTitle: 'Посольство',
						icon: require('@/assets/medicine.svg'),
						id: 'embassy',
					},
					{
						menuItemTitle: 'Посольство',
						icon: require('@/assets/medicine.svg'),
						id: 'embassy2',
					},
				],
				transport: [
					{
						menuItemTitle: 'Такси',
						icon: require('@/assets/medicine.svg'),
						id: 'taxi',
					},
					{
						menuItemTitle: 'Такси',
						icon: require('@/assets/medicine.svg'),
						id: 'taxi2',
					},
				],
				selfNumbers: [],
			},
			status: 'close',

		};
	},

	components: {
		MenuItem,
		Title,
		AddNumber,
	},

	methods: {
		serviceClick(id) {
			this.$router.push(
				{
					query: { 'service-number': id },
					name: 'service-number',
				},
			);
		},
		addNumber() {
			this.status = 'open';
			this.$refs.services.classList.add('closed');
		},
		AddNewNumber(newNumber, status) {
			this.service.selfNumbers.push(newNumber);
			this.status = status;
			this.$refs.services.classList.remove('closed');
		},
	},

};

</script>

<style lang="stylus">
	.services
		max-width 100%
		width 100%
		height 100%
		z-index 1
		position relative

		&__service
			display flex
			flex-direction column
			max-height 150px
			overflow hidden
			margin-bottom 50px

			&-title
				margin 0px 0px 20px 20px
				text-align start
				font-size 24px
				letter-spacing .7px

			&-add-number
				border 1.5px dashed red
				border-radius 15px
				width 100%
				height 100%
				margin 0 20px 0 20px
				padding 34px 34px 33px 33px

		&__slider
			min-height 110px
			overflow-x scroll

			&-container
				display flex
				flex-direction row
				width max-content

			&-container > .menu-item-container
				margin 0px 20px 0px 0px
				min-width 320px
				width 100%

			&-container > .menu-item-container:nth-child(1)
				margin-left 20px

	.services > .header
		margin-left 20px

	.services .closed
		overflow hidden

	.add-number_close
		display none

	.add-number_open
		display flex
		position fixed
		z-index 10
		top 0
		left 0

</style>

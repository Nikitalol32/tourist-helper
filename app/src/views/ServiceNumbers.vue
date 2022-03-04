<template>
	<div class="services">
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
					<!-- <MenuItem
						v-for="transportItem in service.medicine"
						@click="serviceClick(transportItem.id)"
						:option="false"
						:icon="transportItem.icon"
						:key="transportItem"
						:title="transportItem.menuItemTitle"
					/> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import MenuItem from '../components/MenuItem.vue';
import Title from '../components/Title.vue';

export default {
/* eslint-disable no-tabs */
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
			},
		};
	},

	components: {
		MenuItem,
		Title,
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
			this.$router.push(
				{
					query: { 'add-number': 'add' },
					name: 'add-number',
				},
			);
		},
	},

};

</script>

<style lang="stylus">
	.services
		max-width 100%
		width 100%
		height 100%

		&__service
			display flex
			flex-direction column
			max-height 150px
			overflow hidden
			margin-top 50px

		&__service-title
			padding 0px 0px 20px 20px
			text-align start
			font-size 24px

		&__slider
			min-height 110px
			overflow-x scroll

		&__slider-container
			display flex
			flex-direction row
			width max-content

		&__slider-container > .menu-item
			margin 0px 20px 0px 0px
			min-width 320px
			width 100%

		&__slider-container > .menu-item:nth-child(1)
			margin-left 20px

		&__service-add-number
			border 1.5px dashed red
			border-radius 15px
			width 100%
			height 100%
			margin 0 20px 0 20px
			padding 34px 34px 33px 33px

	.services > .header
		margin-left 20px

</style>

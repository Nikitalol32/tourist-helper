<template>
	<div class="services">
		<Title
			:headerTitle='titlePage'
		/>
		<div class="services__service">
			<h2 class="services__service-title">Медицина</h2>
			<div class="services__slider">
				<div class="services__slider-container">
					<MenuItem
						v-for="medicineItem in service.medicine"
						@click="serviceClick()"
						:option="false"
						:icon="medicineItem.icon"
						:key="medicineItem"
						:path="medicineItem.path"
						:title="medicineItem.title"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

// v-for="service in services"
// :key="service"
// :title="service.title"

import MenuItem from '../components/MenuItem.vue';
import Title from '../components/Title.vue';

export default {
	data() {
		return {
			pathService: '/service-numbers',
			titlePage: 'Телефончики служб',
			service: {
				medicine: [
					{
						menuItemTitle: 'Служба скорой помощи',
						icon: require('@/assets/medicine.svg'),
						title: 'Скорая помощь',
						numbers: '112',
						text: '',
						reasons: ['Остановилось сердце', 'Пошла пена изо рта', 'Нужны драгсы'],
						path: { name: this.pathService, query: { service: 'medicine', id: '01' } },
					},
					{
						menuItemTitle: 'Служба нескорой помощи',
						icon: require('@/assets/medicine.svg'),
						title: 'Скорая помощь',
						numbers: '112',
						text: '',
						reasons: ['Остановилось сердце', 'Пошла пена изо рта', 'Нужны драгсы'],
						path: { name: this.pathService, query: { service: 'medicine', id: '?=02' } },
					},
					{
						menuItemTitle: 'Служба нескорой помощи',
						icon: require('@/assets/medicine.svg'),
						title: 'Скорая помощь',
						numbers: '112',
						text: '',
						reasons: ['Остановилось сердце', 'Пошла пена изо рта', 'Нужны драгсы'],
						path: { name: this.pathService, query: { service: 'medicine', id: '?=03' } },
					},
				],
			},
		};
	},

	components: {
		MenuItem,
		Title,
	},

	mounted() {
		// this.$route.params;
		//
		const serviceLength = this.service;
		for (let i = 0; i < 3; i += 1) {
			console.log(serviceLength);
		}
		// not end
	},

	methods: {
		serviceClick() {
			console.log(this.$route.query);
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
			min-width 240px
			width 100%

		&__slider-container > .menu-item:nth-child(1)
			margin-left 20px

</style>

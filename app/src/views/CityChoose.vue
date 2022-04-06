<template>
	<div class="cities">
		<Title
			:headerTitle="titlePage"
		></Title>
		<div class="input-container">
			<input type="text" class="input">
			<img
				src="../assets/search.svg"
				alt="иконка поиска"
				class="search-icon"
			>
		</div>
		<div
			class="cities-container"
			v-for="(city, i) in citiesData"
			:key="city"
		>
			<h2 class="cities-container__title">{{city.title}}</h2>
			<div class="cities-container__slider">
				<div
					class="cities-container__slider-item"
					v-for="(transport, b) in city.transportTypes"
					:key="transport"
					@click="transportSelection(i, b)"
				>
					<img
						class="cities-container__slider-item-icon"
						:src="transport.image"
						alt="иконка транспорта"
					>
					<div class="cities-container__slider-item-title">{{transport.transport}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
	data() {
		return {
			titlePage: 'Выберите город',
			citiesData: [
				{
					title: 'Москва',
					city: 'moscow',
					transportTypes: [
						{
							image: require('../assets/bus.svg'),
							transport: 'Самолет',
							transportType: 'plane',
						},
						{
							image: require('../assets/bus.svg'),
							transport: 'Поезд',
							transportType: 'train',
						},
						{
							image: require('../assets/bus.svg'),
							transport: 'Автобус',
							transportType: 'bus',
						},
						{
							image: require('../assets/bus.svg'),
							transport: 'Поезд',
							transportType: 'train',
						},
						{
							image: require('../assets/bus.svg'),
							transport: 'Автобус',
							transportType: 'bus',
						},
					],
				},
				{
					title: 'Сочи',
					city: 'sochi',
					transportTypes: [
						{
							image: require('../assets/bus.svg'),
							transport: 'Самолет',
							transportType: 'plane',
						},
						{
							image: require('../assets/bus.svg'),
							transport: 'Поезд',
							transportType: 'train',
						},
						{
							image: require('../assets/bus.svg'),
							transport: 'Автобус',
							transportType: 'bus',
						},
					],
				},
				{
					title: 'Екатеринбург',
					city: 'ecb',
					transportTypes: [
						{
							image: require('../assets/bus.svg'),
							transport: 'Самолет',
							transportType: 'plane',
						},
						{
							image: require('../assets/bus.svg'),
							transport: 'Поезд',
							transportType: 'train',
						},
						{
							image: require('../assets/bus.svg'),
							transport: 'Автобус',
							transportType: 'bus',
						},
					],
				},
			],
		};
	},

	components: {
		Title,
	},

	beforeMount() {
		console.log(this.citiesData[0].title);
	},

	methods: {
		// i - город
		// b - вид транспорта
		transportSelection(i, b) {
			const
				selectedCity = this.citiesData[i].city,
				transport = this.citiesData[i].transportTypes[b].transportType;

			this.$router.push({
				query: {
					'selected-city': selectedCity,
					'selected-transport': transport,
				},
				name: 'process-buying',
			});
			console.log('select', i);
		},
	},

};

</script>

<style lang='stylus'>
	.cities
		width calc(100% - 40px)
		display flex
		flex-direction column
		letter-spacing 1px

		&-container
			display flex
			flex-direction column
			overflow hidden
			margin 0 0 40px -20px
			width 100vw
			height 196px

			&__title
				font-size 24px
				font-weight bold
				text-align start
				margin 0 0 24px 20px

			&__slider
				width 100vw
				overflow-x scroll
				display flex
				flex-direction row
				padding-bottom 15px
				min-height 138px

				&-item
					margin-right 20px
					background-color #59A4F2
					padding 35px 23px 20px 23px
					border-radius 10px

					&:first-child
						margin-left 20px

					&-icon
						margin-bottom 31px

					&-title
						font-size 16px
						color #fff
						font-weight bold
</style>

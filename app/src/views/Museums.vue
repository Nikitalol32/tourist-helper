<template>
	<div class="museum">
		<Title
			:headerTitle="titlePage"
		/>
		<div
			class="museum__slider"
			v-for="(museum, index) in museumsData"
			:key="museum"
		>
			<h2 class="museum__slider-title">{{museum.title}}</h2>
			<div class="museum__slider-container">
				<CatalogItem
					v-for="museumItem in museumItems[index]"
					:key="museumItem"
					:image="museumItem.image"
					:icon="museumItem.icon"
					:title="museumItem.title"
					:subTitle="museumItem.subTitle"
					:id="museumItem.id"
				/>
			</div>
		</div>
		<div
			class="btn"
			@click="randomMuseum"
		>
			Случайный маршрут
		</div>
		<div class="btn">По вашему месту</div>
	</div>
</template>

<script>
import Title from '../components/Title.vue';
import CatalogItem from '../components/CatalogItem.vue';

export default {
	data() {
		return {
			titlePage: 'Каталог музеев',
			random: false,
			typePage: '',
			museumsData: [
				{
					title: 'Архитектура',
				},
				{
					title: 'Арахнотура',
				},
				{
					title: 'Архитектура',
				},
				{
					title: 'Архитектура',
				},
			],
			museumItems: [
				[
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Эпоха раннего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'museum',
					},
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Эпоха позднего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'museum2',
					},
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Эпоха позднего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'museum3',
					},
				],
				[
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Эпоха раннего Барака',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'museum4',
					},
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Не Эпоха раннего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'museum5',
					},
				],
				[
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Поха раннего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'museum6',
					},
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Сноха раннего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'museum7',
					},
				],
				[
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Кукуха раннего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'museum8',
					},
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Эпоха среднего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'museum9',
					},
				],
			],
		};
	},

	components: {
		Title,
		CatalogItem,
	},

	beforeMount() {
		this.typePage = this.$route.name;
	},

	methods: {
		randomMuseum() {
			const
				thisTypePage = this.typePage,
				museumsLength = document.querySelectorAll('.catalog-item').length;
			console.log(thisTypePage);

			// eslint-disable-next-line consistent-return
			function typeFunction() {
				if (thisTypePage === 'catalog') {
					return 'architecture';
				} if (thisTypePage === 'museums') {
					return 'museum';
				}
			}

			function randomMuseum() {
				const
					thisType = typeFunction(),
					randomNumber = Math.floor(Math.random() * (museumsLength + 1));

				console.log('~ randomNumber', randomNumber, thisType);

				if (randomNumber === '0') {
					return thisType;
				} if (randomNumber === '1') {
					return thisType.concat('2');
				}

				return thisType.concat(randomNumber);
			}

			this.$router.push(
				{
					query: {
						'cart-catalog': randomMuseum(),
						'cart-catalog-type': this.typePage,
						random: true,
					},
					name: 'cart-catalog',
				},
			);
		},
	},
};

</script>

<style lang="stylus">
	.museum
		display flex
		flex-direction column
		height 100%
		margin 0 20px
		width 100%

		&__slider
			width 100%
			margin-bottom 36px
			overflow hidden
			height 335px

		&>.header
			margin 0 0 20px 20px

		&__slider-title
			text-align start
			margin 0 0 20px 20px

		&__slider-container
			display flex
			flex-direction row
			overflow-x scroll
			height 283px
			padding-bottom 20px

</style>

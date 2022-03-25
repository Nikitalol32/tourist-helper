<template>
	<div class="catalog">
		<Title :headerTitle="titlePage"/>
		<div
			class="catalog__slider"
			v-for="(catalog, index) in catalogData"
			:key="catalog"
		>
			<h2 class="catalog__slider-title">{{catalog.title}}</h2>
			<div class="catalog__slider-container">
				<CatalogItem
					v-for="catalogItem in catalogItems[index]"
					:key="catalogItem"
					:image="catalogItem.image"
					:icon="catalogItem.icon"
					:title="catalogItem.title"
					:subTitle="catalogItem.subTitle"
					:id="catalogItem.id"
				/>
			</div>
		</div>
		<div
			class="btn"
			@click="randomRoute"
		>
			Случайный маршрут
		</div>
		<div class="btn btn-red">По вашему месту</div>
	</div>
</template>

<script>
import Title from '../components/Title.vue';
import CatalogItem from '../components/CatalogItem.vue';

export default {
	data() {
		return {
			titlePage: 'Каталог маршрутов',
			typePage: '',
			catalogData: [
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
			catalogItems: [
				[
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Эпоха раннего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						timeLine: true,
						id: 'architecture',
					},
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Эпоха позднего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'architecture2',
					},
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Эпоха позднего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'architecture3',
					},
				],
				[
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Эпоха раннего Барака',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'architecture4',
					},
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Не Эпоха раннего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'architecture5',
					},
				],
				[
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Поха раннего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'architecture6',
					},
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Сноха раннего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'architecture7',
					},
				],
				[
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Кукуха раннего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'architecture8',
					},
					{
						image: require('@/assets/museum.png'),
						icon: require('@/assets/icon-like.svg'),
						title: 'Эпоха среднего Барокко',
						subTitle: 'Этот маршрут прошли 1209 человек',
						id: 'architecture9',
					},
				],
			],
		};
	},

	components: {
		Title,
		CatalogItem,
	},

	mounted() {
		this.typePage = this.$route.name;
	},

	methods: {
		randomRoute() {
			const type = this.typePage;
			// eslint-disable-next-line consistent-return
			function typeFunction() {
				console.log(type);
				if (type === 'catalog') {
					return 'architecture';
				} if (type === 'museums') {
					return 'museum';
				}
			}

			const
				thisType = typeFunction(),
				routesLength = document.querySelectorAll('.catalog-item').length;

			function randomRoute() {
				const randomNumber = (Math.floor(Math.random() * routesLength + 1)).toString();

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
						'cart-catalog': randomRoute(),
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
	.catalog
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

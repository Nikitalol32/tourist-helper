<template>
	<div class="main-menu">
		<MenuItem
			v-for="menuItem in menuItems"
			:key="menuItem"
			:title="menuItem.title"
			:subTitle="menuItem.subTitle"
			:icon="menuItem.icon"
			:option="true"
			:path="menuItem.path"
		/>
	</div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
	data() {
		return {
			menuItems: [
				{
					icon: require('@/assets/Man.svg'),
					title: 'Телефоны служб',
					subTitle: 'Попалив трудную ситуацию?',
					path: { name: 'service-numbers' },
				},
				{
					icon: require('@/assets/Map.svg'),
					title: 'Маршруты прогулок',
					subTitle: 'Тематически провести день?',
					path: { name: 'catalog' },
				},
				{
					icon: require('@/assets/Girl.svg'),
					title: 'Выучите язык',
					subTitle: 'Легко общаться с жителями?',
					path: { name: 'situations' },
				},
				{
					icon: require('@/assets/Tourism.svg'),
					title: 'Поездка по городам',
					subTitle: 'Хотите увидеть больше в России?',
					path: { name: 'city-choose' },
				},
				{
					icon: require('@/assets/PhotoCamera.svg'),
					title: 'Музеи города',
					subTitle: 'Нравится духовно развиваться?',
					path: { name: 'museums' },
				},
			],
		};
	},

	components: {
		MenuItem,
	},
};

</script>

<style lang="stylus">
	.main-menu
		display flex
		justify-content center
		flex-direction column
		margin 0 20px
		width 100%

	& > .menu-item-container
		margin-bottom 25px

</style>

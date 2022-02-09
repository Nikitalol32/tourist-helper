<template>
	<div class="main-menu">
		<MainMenuItem
			v-for="mainMenuItem in mainMenuItems"
			:key="mainMenuItem"
			:title="mainMenuItem.title"
			:icon="mainMenuItem.icon"
		/>
	</div>
</template>

<script>
import MainMenuItem from './MainMenuItem.vue';

export default {
	data() {
		return {
			mainMenuItems: [
				{ icon: require('@/assets/Man.svg'), title: ['Телефоны служб', 'Попалив трудную ситуацию?'] },
				{ icon: require('@/assets/Map.svg'), title: ['Маршруты прогулок', 'Тематически провести день?'] },
				{ icon: require('@/assets/Girl.svg'), title: ['Выучите язык', 'Легко общаться с жителями?'] },
				{ icon: require('@/assets/Tourism.svg'), title: ['Поездкак по городам', 'Хотите увидеть больше в России?'] },
				{ icon: require('@/assets/PhotoCamera.svg'), title: ['Музеи города', 'Нравится духовно развиваться?'] },
			],
		};
	},

	components: {
		MainMenuItem,
	},
	method: {

	},
};

</script>

<style lang="stylus">
	.main-menu
		display flex
		justify-content center
		align-items center
		flex-direction column
		max-width 95%
		width 100%
		height 100%
</style>

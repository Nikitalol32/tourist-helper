<template>
	<div class="maps">
		<Title
			:headerTitle="titlePage"
		></Title>
		<div id="map" class="maps__map"></div>
	</div>
</template>

<script>
import Title from './Title.vue';

export default {
	data() {
		return {
			titlePage: 'Выберите маршрут',
		};
	},

	components: {
		Title,
	},

	beforeMount() {
		const
			mapOnPage = document.createElement('script');

		mapOnPage.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=<ваш API-ключ>&lang=ru_RU');

		document.head.appendChild(mapOnPage);

		/* eslint-disable no-undef */

		mapOnPage.onload = () => {
			function init() {
				// debugger;
				/* eslint-disable-next-line no-unused-vars */
				const map = new ymaps.Map('map', {
					center: [37.59481755614952, 61.84931316916696],
					zoom: 16,
				}, {
					searchControlProvider: 'yandex#search',
				});
			}

			ymaps.ready(init);
		};
	},
};

</script>

<style lang="stylus">
	.maps
		width 100%
		height calc(100vh - 40px)
		display flex
		flex-direction column
		justify-content flex-start

		&__map
			width calc(100% - 40px)
			flex 2
			margin 0 20px 20px 20px

	.maps > .header
		margin 0 20px 40px 20px
		max-height 35px
		flex 1

</style>

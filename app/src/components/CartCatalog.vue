<template>
	<div class="cart-catalog">
		<Title
			:headerTitle="titlePage"
			:like="like"
		/>
		<div class="cart-catalog__title">
			{{ catalogData[typePage][id].title }}
		</div>
		<img
			:srcset="catalogData[typePage][id].image"
			alt="architecture"
			class="cart-catalog__image"
		>
		<div class="cart-catalog__info">
			<div class="cart-catalog__info-item">
				<img src="../assets/watch.svg" alt="watch" class="cart-catalog__info-item-watch">
				{{catalogData[typePage][id].time}}
			</div>
			<div class="cart-catalog__info-item">
				<img src="../assets/road.svg" alt="road" class="cart-catalog__info-item-road">
				{{catalogData[typePage][id].road}}
			</div>
		</div>
		<div class="cart-catalog__gallery">
			<div class="cart-catalog__gallery-slider">
				<img
					v-for="photo in catalogData[typePage][id].gallery"
					:key="photo"
					:srcset="photo"
					alt="photo"
					class="cart-catalog__gallery-photo"
				>
			</div>
		</div>
		<div class="cart-catalog__time-line" v-if="typePage === 'catalog'">
			<div class="cart-catalog__time-line-segments">
				<div
					class="cart-catalog__time-line-segments-segment"
					v-for="segment in catalogData[typePage][id].segmentTime"
					:key="segment"
				>
					<div class="cart-catalog__time-line-segments-segment-text">{{segment}}</div>
					<div class="cart-catalog__time-line-segments-segment-stick"></div>
				</div>
			</div>
			<div class="cart-catalog__time-line-steps">
				<div
					class="cart-catalog__time-line-steps-step"
					v-for="step in catalogData[typePage][id].path"
					:key="step"
				>
					<div class="cart-catalog__time-line-steps-step-point"></div>
					<div class="cart-catalog__time-line-steps-step-text">{{step}}</div>
				</div>
			</div>
		</div>
		<p class="cart-catalog__text">{{catalogData[typePage][id].text}}</p>

		<div
			class="cart-catalog__play-list"
			v-if="typePage === 'museums'"
		>
			<h2 class="cart-catalog__play-list-title"> Слушайте на пути к музею</h2>
			<div
				class="cart-catalog__play-list-part"
				v-for="(audio, i) in catalogData[typePage][id].playList"
				:key="audio"
			>
				<div
					class="cart-catalog__play-list-container"
					@click="playList(i)"
				>
					<div class="cart-catalog__play-list-chapter">
						Часть №{{i+1}}
					</div>
					<div class="cart-catalog__play-list-track-name">
						{{audio.title}}
					</div>
				</div>
				<button
					class="cart-catalog__play-list-btn-play"
					@click="playSong(i)"
				>
				</button>
				<audio
					class="cart-catalog__play-list-audio"
					:src="audio.audio"
				></audio>
			</div>
		</div>
		<div class="btn" @click="inWays">В путь</div>
		<div
			class="btn"
			v-if="random"
			@click="randomRoute"
		>
			Следущий вариант
		</div>
		<div class="btn" v-if="random">уже проходил</div>
	</div>
</template>

<script>

import Title from './Title.vue';

export default {
	data() {
		return {
			like: true,
			random: false,
			id: '',
			typePage: '',
			titlePage: '',
			catalogData: {

				// Architecture

				catalog: {
					architecture: {
						icon: require('../assets/icon-like.svg'),
						title: 'Эпоха раннего Барокко',
						image: require('../assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						path: [
							'Большой Дворец',
							'Четыре часа',
							'Картинку',
							'Ты не написал',
							'Никиш',
							'Шаурма',
						],
						segmentTime: ['30 мин', '30 мин', '30 мин', '30 мин', '30 мин'],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					architecture2: {
						icon: require('../assets/icon-like.svg'),
						title: 'Эпоха позднего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						path: [
							'Большой Дворец',
							'Четыре часа',
							'Картинку',
							'Ты не написал',
							'Никиш',
							'Шаурма',
						],
						segmentTime: ['30 мин', '30 мин', '30 мин', '30 мин', '30 мин'],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					architecture3: {
						icon: require('../assets/icon-like.svg'),
						title: 'Эпоха раннего Барака',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						path: [
							'Большой Дворец',
							'Четыре часа',
							'Картинку',
							'Ты не написал',
							'Никиш',
							'Шаурма',
						],
						segmentTime: ['30 мин', '30 мин', '30 мин', '30 мин', '30 мин'],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					architecture4: {
						icon: require('../assets/icon-like.svg'),
						title: 'Не Эпоха раннего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						path: [
							'Большой Дворец',
							'Четыре часа',
							'Картинку',
							'Ты не написал',
							'Никиш',
							'Шаурма',
						],
						segmentTime: ['30 мин', '30 мин', '30 мин', '30 мин', '30 мин'],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					architecture5: {
						icon: require('../assets/icon-like.svg'),
						title: 'Поха раннего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						path: [
							'Большой Дворец',
							'Четыре часа',
							'Картинку',
							'Ты не написал',
							'Никиш',
							'Шаурма',
						],
						segmentTime: ['30 мин', '30 мин', '30 мин', '30 мин', '30 мин'],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					architecture6: {
						icon: require('../assets/icon-like.svg'),
						title: 'Сноха раннего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						path: [
							'Большой Дворец',
							'Четыре часа',
							'Картинку',
							'Ты не написал',
							'Никиш',
							'Шаурма',
						],
						segmentTime: ['30 мин', '30 мин', '30 мин', '30 мин', '30 мин'],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					architecture7: {
						icon: require('../assets/icon-like.svg'),
						title: 'Кукуха раннего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						path: [
							'Большой Дворец',
							'Четыре часа',
							'Картинку',
							'Ты не написал',
							'Никиш',
							'Шаурма',
						],
						segmentTime: ['30 мин', '30 мин', '30 мин', '30 мин', '30 мин'],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					architecture8: {
						icon: require('../assets/icon-like.svg'),
						title: 'Эпоха среднего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						path: [
							'Большой Дворец',
							'Четыре часа',
							'Картинку',
							'Ты не написал',
							'Никиш',
							'Шаурма',
						],
						segmentTime: ['30 мин', '30 мин', '30 мин', '30 мин', '30 мин'],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					architecture9: {
						icon: require('../assets/icon-like.svg'),
						title: 'Эпоха среднего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						path: [
							'Большой Дворец',
							'Четыре часа',
							'Картинку',
							'Ты не написал',
							'Никиш',
							'Шаурма',
						],
						segmentTime: ['30 мин', '30 мин', '30 мин', '30 мин', '30 мин'],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
				},

				// Museums

				museums: {
					museum: {
						icon: require('../assets/icon-like.svg'),
						title: 'Эпоха раннего Барокко',
						image: require('../assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						playList: [
							{
								title: 'Не могу стоять',
								audio: require('../assets/audio/Не могу стоять.mp3'),
							},
							{
								title: 'Сиська-перда',
								audio: require('../assets/audio/Сиська-перда.mp3'),
							},
						],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					museum2: {
						icon: require('../assets/icon-like.svg'),
						title: 'Эпоха позднего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						playList: [
							{
								title: 'Не могу стоять',
								audio: require('../assets/audio/Не могу стоять.mp3'),
							},
							{
								title: 'Сиська-перда',
								audio: require('../assets/audio/Сиська-перда.mp3'),
							},
						],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					museum3: {
						icon: require('../assets/icon-like.svg'),
						title: 'Эпоха раннего Барака',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						playList: [
							{
								title: 'Не могу стоять',
								audio: require('../assets/audio/Не могу стоять.mp3'),
							},
							{
								title: 'Сиська-перда',
								audio: require('../assets/audio/Сиська-перда.mp3'),
							},
						],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					museum4: {
						icon: require('../assets/icon-like.svg'),
						title: 'Не Эпоха раннего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						playList: [
							{
								title: 'Не могу стоять',
								audio: require('../assets/audio/Не могу стоять.mp3'),
							},
							{
								title: 'Сиська-перда',
								audio: require('../assets/audio/Сиська-перда.mp3'),
							},
						],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					museum5: {
						icon: require('../assets/icon-like.svg'),
						title: 'Поха раннего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						playList: [
							{
								title: 'Не могу стоять',
								audio: require('../assets/audio/Не могу стоять.mp3'),
							},
							{
								title: 'Сиська-перда',
								audio: require('../assets/audio/Сиська-перда.mp3'),
							},
						],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					museum6: {
						icon: require('../assets/icon-like.svg'),
						title: 'Сноха раннего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						playList: [
							{
								title: 'Не могу стоять',
								audio: require('../assets/audio/Не могу стоять.mp3'),
							},
							{
								title: 'Сиська-перда',
								audio: require('../assets/audio/Сиська-перда.mp3'),
							},
						],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					museum7: {
						icon: require('../assets/icon-like.svg'),
						title: 'Кукуха раннего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						playList: [
							{
								title: 'Не могу стоять',
								audio: require('../assets/audio/Не могу стоять.mp3'),
							},
							{
								title: 'Сиська-перда',
								audio: require('../assets/audio/Сиська-перда.mp3'),
							},
						],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					museum8: {
						icon: require('../assets/icon-like.svg'),
						title: 'Эпоха среднего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						playList: [
							{
								title: 'Не могу стоять',
								audio: require('../assets/audio/Не могу стоять.mp3'),
							},
							{
								title: 'Сиська-перда',
								audio: require('../assets/audio/Сиська-перда.mp3'),
							},
						],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
					museum9: {
						icon: require('../assets/icon-like.svg'),
						title: 'Эпоха среднего Барокко',
						image: require('@/assets/museum.png'),
						time: '4 часа 500 минут',
						road: '13 Объектов',
						gallery: [
							require('../assets/museum.png'),
							require('../assets/museum.png'),
							require('../assets/museum.png'),
						],
						playList: [
							{
								title: 'Не могу стоять',
								audio: require('../assets/audio/Не могу стоять.mp3'),
							},
							{
								title: 'Сиська-перда',
								audio: require('../assets/audio/Сиська-перда.mp3'),
							},
						],
						text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
					},
				},
			},
		};
	},

	beforeMount() {
		this.id = this.$route.query['cart-catalog'];
		this.typePage = this.$route.query['cart-catalog-type'];
		this.random = this.$route.query.random;
		console.log('title');
		console.log(this.id, this.type);
		if (this.typePage === 'catalog') {
			this.titlePage = 'Каталог маршрутов';
		} if (this.typePage === 'museums') {
			this.titlePage = 'Карточка музея';
		}
	},

	components: {
		Title,
	},

	methods: {

		// Случайный путь

		randomRoute() {
			const
				thisTypePage = this.typePage,
				catalogData = Object.keys(this.catalogData[thisTypePage]),
				// eslint-disable-next-line no-unused-vars
				catalogLength = catalogData.length;

			// eslint-disable-next-line consistent-return
			function typeFunction() {
				if (thisTypePage === 'catalog') {
					return 'architecture';
				} if (thisTypePage === 'museums') {
					return 'museum';
				}
			}

			// eslint-disable-next-line consistent-return
			function randomR() {
				const
					thisType = typeFunction(),
					randomNumber = Math.floor(Math.random() * (catalogLength + 1));

				if (randomNumber === 0) {
					return thisType;
				} if (randomNumber === 1) {
					return thisType.concat('2');
				}
				return thisType.concat(randomNumber);
			}

			this.$router.replace(
				{
					query: {
						'cart-catalog': randomR(),
						'cart-catalog-type': this.typePage,
						random: true,
					},
					name: 'cart-catalog',
				},
			);
		},

		// Переход в плеер

		playList() {
		},

		playSong(i) {
			const
				audio = document.querySelectorAll('.cart-catalog__play-list-audio'),
				audioNow = audio[i],
				player = document.querySelectorAll('.cart-catalog__play-list-part'),
				playerNow = player[i];

			console.log('audio', audioNow, audio);

			// Плей

			function playSong() {
				audioNow.play();
				console.log('src', audioNow.src);
				console.log('play');
			}

			// Пауза

			function pauseSong() {
				audioNow.pause();
				console.log('pause', audioNow.paused);
			}

			// Звук

			audioNow.volume = 0.7;

			if (!playerNow.classList.contains('play')) {
				// Проеверка на другие запущенные аудиодорожки
				for (let b = 0; b < audio.length; b++) {
					if (audio[b] !== audioNow) {
						audio[b].pause();
						player[b].classList.remove('play');
						player[b].classList.add('pause');
						console.log(audio[b]);
					}
				}

				playSong();
				playerNow.classList.remove('pause');
				playerNow.classList.add('play');
			} else {
				pauseSong();
				playerNow.classList.remove('play');
				playerNow.classList.add('pause');
			}
		},

		// В путь!

		inWays() {
			this.$router.push(
				{
					name: 'step-cart',
				},
			);
		},
	},
};

</script>

<style lang="stylus">
	.cart-catalog
		display flex
		flex-direction column
		height 100%
		width 100%
		margin 0 20px

		&> .header
			margin 0 20px 42px 20px

		&__title
			margin 0 0 32px 20px
			font-size 24px
			font-weight bold
			letter-spacing 1.2px
			text-align start

		&__image
			margin 0 auto 38px auto

		&__info
			display flex
			flex-direction row
			align-items center
			justify-content space-around
			margin-bottom 32px
			font-size 16px
			font-weight bold

			&-item
				display flex
				flex-direction row
				align-items center

				&-watch
					margin-right 15px

				&-road
					margin-right 15px

		&__gallery
			height 130px
			overflow hidden
			margin-bottom 45px

			&-slider
				height 121px
				overflow-x scroll
				display flex
				flex-direction row
				padding-bottom 20px

			&-photo
				max-height 121px
				margin-right 20px
				border-radius 10px

				&:first-child
					margin-left 20px

		&__time-line
			position relative
			max-width 265px
			display flex
			margin 0 20px 42px 20px
			font-size 16px
			font-weight bold
			letter-spacing 1px

			&-segments
				position relative
				left 32px

				&-segment
					margin-bottom 20px
					display flex
					flex-direction row
					align-items center

					&-text
						height 42px

					&-stick
						width 2px
						height 42px
						background-color #59A4F2
						margin-left 32px

					&:first-child
						margin-top 20px

					&:last-child
						margin-bottom 0

			&-steps
				position relative
				right -22px

				&-step
					margin-bottom 42px
					text-align start
					display flex
					flex-direction row

					&-point
						width 20px
						height 20px
						background-color #59A4F2
						border-radius 50%
						margin-right 24px

					&:last-child
						margin-bottom 0

		&__text
			letter-spacing 1.2px
			font-size 16px
			font-weight bold
			text-align start
			margin 0 20px 40px 20px
			line-height 107%

		&__play-list
			width 100%

			&-title
				font-size 24px
				font-weight bold
				margin 0 0 32px 20px
				text-align start

			&-part
				display flex
				flex-direction row
				justify-content space-between
				align-items center
				margin 0 20px 40px 20px

			&-container
				display flex
				flex-direction column
				text-align start
				width 100%

			&-chapter
				font-size 16px
				margin-bottom 8px
				letter-spacing 1px

			&-track-name
				font-size 18px
				font-weight bold
				letter-spacing 1px

			&-btn-play
				width 26px
				height @width
				background-color none
				border none
				border-radius 50%
				background-image url(../assets/play.svg)
				background-size cover
				background-repeat no-repeat
				background-color transparent

			&-audio
				display none

	.pause > .cart-catalog__play-list-btn-play
		background-image url(../assets/play.svg)
		background-size cover
		background-repeat no-repeat

	.play > .cart-catalog__play-list-btn-play
		background-image url(../assets/pause.svg)
		background-size cover
		background-repeat no-repeat

</style>

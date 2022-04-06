<template>
	<div class="service-cart">
		<Title
			:headerTitle = 'titlePage'
			:like = 'like'
		/>
		<h1 class="service-cart__title">{{services[id].title}}</h1>
		<div class="service-cart-number">
			<div class="service-cart-number__number">{{services[id].number}}</div>
			<div class="service-cart-number__button">Позвонить</div>
		</div>
		<div class="service-cart__text">{{services[id].text}}</div>
		<div class="service-cart__reason">
			<h3 class="service-cart__reason-title">Причины вызова</h3>
			<ul class="service-cart__reason-list">
				<li
					class="service-cart__reason-list_item"
					v-for="reason in services[id].reasons"
					:key="reason"
				>
					{{reason}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

import Title from './Title.vue';

export default {
	data() {
		return {
			titlePage: 'Карточка телефона',
			like: true,
			id: '',
			services: {
				medicine: {
					title: 'Скорая помощь',
					number: '112',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sed tempor, at magna purus quam sit id. Ut id aliquam molestie tortor, amet, suspendisse mi. Dictum viverra accumsan a proin amet. Amet, velit consequat enim urna, pellentesque in cursus auctor. Erat a, sapien, nisl id et. Egestas rhoncus, commodo convallis mauris. ',
					reasons: ['Остановилось сердце', 'Пошла пена изо рта', 'Нужны драгсы'],
				},
				medicine2: {
					title: 'Скорая помощь',
					number: '112',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sed tempor, at magna purus quam sit id. Ut id aliquam molestie tortor, amet, suspendisse mi. Dictum viverra accumsan a proin amet. Amet, velit consequat enim urna, pellentesque in cursus auctor. Erat a, sapien, nisl id et. Egestas rhoncus, commodo convallis mauris. ',
					reasons: ['Остановилось сердце', 'Пошла пена изо рта', 'Нужны драгсы'],
				},
				cops: {
					title: 'Скорые копы',
					number: '02-02',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sed tempor, at magna purus quam sit id. Ut id aliquam molestie tortor, amet, suspendisse mi. Dictum viverra accumsan a proin amet. Amet, velit consequat enim urna, pellentesque in cursus auctor. Erat a, sapien, nisl id et. Egestas rhoncus, commodo convallis mauris. ',
					reasons: ['Остановилось сердце', 'Пошла пена изо рта', 'Нужны драгсы'],
				},
				cops2: {
					title: 'Скорая копы',
					number: '02-02',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sed tempor, at magna purus quam sit id. Ut id aliquam molestie tortor, amet, suspendisse mi. Dictum viverra accumsan a proin amet. Amet, velit consequat enim urna, pellentesque in cursus auctor. Erat a, sapien, nisl id et. Egestas rhoncus, commodo convallis mauris. ',
					reasons: ['Остановилось сердце', 'Пошла пена изо рта', 'Нужны драгсы'],
				},
				embassy: {
					title: 'Вызвать президента',
					number: '89000000000',
					text: 'Не надо....',
					reasons: ['Терроризм', 'Политические вопросы', 'Не покормили котика'],
				},
				embassy2: {
					title: 'Вызвать президента',
					number: '89000000000',
					text: 'Не надо....',
					reasons: ['Терроризм', 'Политические вопросы', 'Не покормили котика'],
				},
				taxi: {
					title: 'Взывать таксисочку',
					number: '89153245623',
					text: 'Если вам нужно доехать туда, куда вам нужно доехать, то вам стоить закать то, что отвезет вас туда, куда вам нужно доехать!',
					reasons: ['Терроризм', 'Политические вопросы', 'Не покормили котика'],
				},
				taxi2: {
					title: 'Взывать таксисочку',
					number: '89153245623',
					text: 'Если вам нужно доехать туда, куда вам нужно доехать, то вам стоить закать то, что отвезет вас туда, куда вам нужно доехать!',
					reasons: ['Терроризм', 'Политические вопросы', 'Не покормили котика'],
				},
			},
		};
	},

	components: {
		Title,
	},

	beforeMount() {
		this.id = this.$route.query['service-number'];
	},

};

</script>

<style lang="stylus">
	.service-cart
		display flex
		flex-direction column
		height 100%
		width 100%
		margin 0 20px

		&__title
			margin-bottom 42px
			font-size 36px
			width 100%
			text-align start
			font-weight 600
			letter-spacing .7px

		&-number
			margin-bottom 32px
			display flex
			justify-content space-between
			flex-wrap wrap

			&__number
				font-size 42px
				font-weight bold

			&__button
				border-radius 15px
				background-color red
				padding 12px 20px
				color white
				font-size 21px
				letter-spacing 1.3px
				text-transform uppercase
				font-weight bold

		&__text
			margin-bottom 32px
			font-size 16px
			line-height 140%
			text-align start
			font-weight bold
			letter-spacing 1px

		&__reason
			font-weight bold
			margin-bottom 32px

			&-title
				font-weight bold
				font-size 24px
				text-align start

			&-list
				font-weight bold
				margin 24px 0 0 20px
				display flex
				align-items flex-start
				flex-direction column

				&_item
					margin-bottom 15px
					font-size 16px
					letter-spacing: .8px
					box-sizing border-box

				&_item:last-child
					margin-bottom 0

</style>

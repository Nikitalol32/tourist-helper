<template>
	<div class="process-buying">
		<Title
			:headerTitle="titlePage"
		></Title>
		<div class="process-buying__info">
			<div
				class="process-buying__info-item"
				v-for="info in flightData[city][transport].info"
				:key="info"
			>
				<img class="process-buying__info-item-icon" :src="info[0]">
				<div class="process-buying__info-item-text">{{info[1]}}</div>
			</div>
		</div>

		<div class="process-buying__steps">
			<!-- Покупка -->
			<div class="process-buying__steps-step-container">
				<div class="process-buying__steps-step-line"></div>
				<div class="process-buying__steps-step">
					<div class="process-buying__steps-step-point"></div>
					<div class="process-buying__steps-step-title">Купить билеты</div>
				</div>
				<div class="process-buying__steps-description">
					<p class="process-buying__steps-description-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
						tempora, minima ipsa officia deleniti magnam debitis
						quia repellat ipsam earum voluptate sunt consequatur nulla enim atque aut reprehenderit
						nostrum impedit?
					</p>
					<div class="btn">Купить билеты</div>
				</div>
			</div>
			<!-- Бронь -->
			<div class="process-buying__steps-step-container">
				<div class="process-buying__steps-step-line"></div>
				<div class="process-buying__steps-step">
					<div class="process-buying__steps-step-point"></div>
					<div class="process-buying__steps-step-title">Забронировать отель</div>
				</div>
				<div class="process-buying__steps-description">
					<p class="process-buying__steps-description-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
						tempora, minima ipsa officia deleniti magnam debitis
						quia repellat ipsam earum voluptate sunt consequatur nulla enim atque aut reprehenderit
						nostrum impedit?
					</p>
					<div class="btn">Забронировать</div>
				</div>
			</div>
			<!-- Вызов такси -->
			<div class="process-buying__steps-step-container">
				<div class="process-buying__steps-step">
					<div class="process-buying__steps-step-point"></div>
					<div class="process-buying__steps-step-title">Вызвать такси</div>
				</div>
				<div class="process-buying__steps-description">
					<p class="process-buying__steps-description-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
						tempora, minima ipsa officia deleniti magnam debitis
						quia repellat ipsam earum voluptate sunt consequatur nulla enim atque aut reprehenderit
						nostrum impedit?
					</p>
					<div class="btn">Заказать такси</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Title from './Title.vue';

export default {
	data() {
		return {
			titlePage: 'Хотите попасть в очко?',
			city: '',
			transport: '',
			flightData: {
				moscow: {
					plane: {
						info: [
							[
								require('../assets/watch.svg'),
								'10-11 часов',
							],
							[
								require('../assets/tickets.svg'),
								'5000 - 7000 р.',
							],
							[
								require('../assets/watch.svg'),
								'2 раза в час',
							],
							[
								require('../assets/road.svg'),
								'аэр. Пупково',
							],
						],
					},
					train: {
						info: [
							[
								require('../assets/watch.svg'),
								'10 - 11 часов',
							],
							[
								require('../assets/tickets.svg'),
								'5000 - 7000 р.',
							],
							[
								require('../assets/watch.svg'),
								'2 раза в час',
							],
							[
								require('../assets/road.svg'),
								'аэр. Пупково',
							],
						],
						text: [
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!f',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!s',
						],
					},
					bus: {
						info: [
							[
								require('../assets/watch.svg'),
								'10-11 часов',
							],
							[
								require('../assets/tickets.svg'),
								'5000 - 7000 р.',
							],
							[
								require('../assets/watch.svg'),
								'2 раза в час',
							],
							[
								require('../assets/road.svg'),
								'аэр. Пупково',
							],
						],
						text: [
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!f',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!s',
						],
					},
				},
				sochi: {
					plane: {
						info: [
							[
								require('../assets/watch.svg'),
								'10-11 часов',
							],
							[
								require('../assets/tickets.svg'),
								'5000 - 7000 р.',
							],
							[
								require('../assets/road.svg'),
								'аэр. Пупково',
							],
						],
					},
					train: {
						info: [
							[
								require('../assets/watch.svg'),
								'10 - 11 часов',
							],
							[
								require('../assets/tickets.svg'),
								'5000 - 7000 р.',
							],
							[
								require('../assets/watch.svg'),
								'2 раза в час',
							],
							[
								require('../assets/road.svg'),
								'аэр. Пупково',
							],
						],
						text: [
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!f',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!s',
						],
					},
					bus: {
						info: [
							[
								require('../assets/watch.svg'),
								'10-11 часов',
							],
							[
								require('../assets/tickets.svg'),
								'5000 - 7000 р.',
							],
							[
								require('../assets/watch.svg'),
								'2 раза в час',
							],
							[
								require('../assets/road.svg'),
								'аэр. Пупково',
							],
						],
						text: [
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!f',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!s',
						],
					},
				},
				ecb: {
					plane: {
						info: [
							[
								require('../assets/watch.svg'),
								'10-11 часов',
							],
							[
								require('../assets/tickets.svg'),
								'5000 - 7000 р.',
							],
							[
								require('../assets/road.svg'),
								'аэр. Пупково',
							],
						],
					},
					train: {
						info: [
							[
								require('../assets/watch.svg'),
								'10 - 11 часов',
							],
							[
								require('../assets/tickets.svg'),
								'5000 - 7000 р.',
							],
							[
								require('../assets/watch.svg'),
								'2 раза в час',
							],
							[
								require('../assets/road.svg'),
								'аэр. Пупково',
							],
						],
						text: [
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!f',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!s',
						],
					},
					bus: {
						info: [
							[
								require('../assets/watch.svg'),
								'10-11 часов',
							],
							[
								require('../assets/tickets.svg'),
								'5000 - 7000 р.',
							],
							[
								require('../assets/watch.svg'),
								'2 раза в час',
							],
							[
								require('../assets/road.svg'),
								'аэр. Пупково',
							],
						],
						text: [
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!f',
							'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam molestias illo eveniet rem velit ullam mollitia hic sunt. Eius excepturi dolor iure doloremque aspernatur magnam hic vitae consequuntur eos!s',
						],
					},
				},
			},
		};
	},

	components: {
		Title,
	},

	beforeMount() {
		this.city = this.$route.query['selected-city'];
		this.transport = this.$route.query['selected-transport'];

		console.log('city', this.city);
		console.log('transport', this.transport);
	},
};

</script>

<style lang="stylus">
	.process-buying
		width calc(100% - 40px)
		margin 0 20px
		display flex
		flex-direction column
		letter-spacing 1px

		&__info
			display flex
			flex-direction row
			// justify-content space-between
			flex-wrap wrap
			margin-bottom 36px

			&-item
				display flex
				flex-direction row
				align-items center
				margin-bottom 20px
				margin-right 41px

				&:nth-child(2n)
					margin-right 0

				&-icon
					margin-right 16px

				&-text
					font-size 16px
					font-weight bold

		&__steps
			display flex
			flex-direction column
			max-width 342px
			width 100%

			&-step
				display flex
				flex-direction row
				align-items center
				position relative
				margin-bottom 16px

				&-container
					display flex
					flex-direction column
					position relative

				&-line
					position absolute
					top 0
					left 16.4px
					width 8px
					height 100%
					background-color var(--blue)

				&-point
					border-radius 50%
					background-color var(--blue)
					width 40px
					height @width
					margin-right 21px
					position absolute
					top -5px
					left 0

				&-title
					font-size 24px
					font-weight bold
					text-align start
					margin-left 57px

			&-description
				display flex
				flex-direction column
				align-items flex-start
				position relative
				margin-left 57px

				&-text
					text-align start
					font-size 16px
					margin-bottom 24px

				& > .btn
					padding 12px 17px
					margin 0 0 43px 0

</style>

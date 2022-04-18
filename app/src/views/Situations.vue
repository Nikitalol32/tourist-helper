<template>
	<div class="situations">
		<Title
			:headerTitle="titlePage"
		></Title>
		<div class="situations__container">
			<div
				class="situations__container-item"
				v-for="situation in situationsData"
				:key="situation"
				@click="situationSelect(i)"
			>
				<img
					:srcset="situation.image"
					alt="иконка"
					class="situations__container-item-icon"
				>
				<div class="situations__container-item-text">{{situation.text}}</div>
			</div>
		</div>
	</div>
</template>

<script>
import Title from '../components/Title.vue';

export default {
	data() {
		return {
			titlePage: 'Выберите ситуацию',
			situationsData: [
				{ image: require('@/assets/cafe.svg'), text: 'Ресторан и кафе' },
				{ image: require('@/assets/cafe.svg'), text: 'Ресторан и кафе' },
				{ image: require('@/assets/cafe.svg'), text: 'Ресторан и кафе' },
				{ image: require('@/assets/cafe.svg'), text: 'Ресторан и кафе' },
				{ image: require('@/assets/cafe.svg'), text: 'Ресторан и кафе' },
				{ image: require('@/assets/cafe.svg'), text: 'Ресторан и кафе' },
				{ image: require('@/assets/cafe.svg'), text: 'Ресторан и кафе' },
				{ image: require('@/assets/cafe.svg'), text: 'Ресторан и кафе' },
				{ image: require('@/assets/cafe.svg'), text: 'Ресторан и кафе' },
			],
		};
	},

	components: {
		Title,
	},

	methods: {
		situationSelect(i) {
			this.$router.push({
				query: { 'phrases-list': i },
				name: 'phrases',
			});
			console.log('select', i);
		},
	},
};

</script>

<style lang="stylus">
	.situations
		display flex
		flex-direction column
		width calc(100% - 40px)

		&__container
			display flex
			flex-direction row
			justify-content space-between
			flex-wrap wrap
			margin-bottom 40px

			&-item
				background-color var(--blue)
				display flex
				flex-direction column
				justify-content center
				padding 25px 43px 24px 43px
				border-radius 15px
				margin-bottom 12px

				&-icon
					width 80px
					height @width

				&-text
					color #fff
					font-size 16px
					font-weight bold
					text-align center
					max-width 80px
					width 100%

	@media (max-width: 371px)
		.situations__container
			justify-content center

</style>

<template>
	<div class="service-cart">
		<h1 class="service-cart__title">{{cartTitle}}</h1>
		<div class="service-cart-number">
			<div class="service-cart-number__number">{{cartNumber}}</div>
			<div class="service-cart-number__button">Позвонить</div>
		</div>
		<div class="service-cart__text">{{cartText}}</div>
		<div class="service-cart__reason">
			<div class="service-cart__reason">
				<h3>Причины</h3>
				<ul
					v-for="reason in reasons"
					:key="reason"
				>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		cartTitle: String,
		cartNumber: String,
		cartText: String,
	}
};

</script>

<style lang="stylus">

</style>

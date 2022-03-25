import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import ServiceNumbers from '../views/ServiceNumbers.vue';
import ServiceNumber from '../components/ServiceNumber.vue';
import AddNumber from '../components/AddNumber.vue';
import Catalog from '../views/Catalog.vue';
import CartCatalog from '../components/CartCatalog.vue';
import StepCart from '../components/StepCart.vue';
import Museums from '../views/Museums.vue';
import Maps from '../components/Maps.vue';
import Player from '../components/Player.vue';

const routes = [
	// Главная
	{
		path: '/',
		name: 'Index',
		component: Index,
	},
	// Сервисы
	{
		path: '/service-numbers',
		name: 'service-numbers',
		component: ServiceNumbers,
	},
	// Сервис
	{
		path: '/service-number',
		name: 'service-number',
		component: ServiceNumber,
	},
	// Добавить номер
	{
		path: '/add-number',
		name: 'add-number',
		component: AddNumber,
	},
	// Каталог маршрутов
	{
		path: '/catalog',
		name: 'catalog',
		component: Catalog,
	},
	// Страница маршрута
	{
		path: '/cart-catalog',
		name: 'cart-catalog',
		component: CartCatalog,
	},
	// Точка остановки
	{
		path: '/step-cart',
		name: 'step-cart',
		component: StepCart,
	},
	// Каталог музеев
	{
		path: '/museums',
		name: 'museums',
		component: Museums,
	},
	// Карта
	{
		path: '/map',
		name: 'map',
		component: Maps,
	},
	// Плеер
	{
		path: '/player',
		name: 'player',
		component: Player,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	// eslint-disable-next-line no-unused-vars
	scrollBehavior(to, from, savedPosition) {
		return savedPosition || { top: 0 };
	},
});

export default router;

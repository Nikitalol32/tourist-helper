import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import ServiceNumbers from '../views/ServiceNumbers.vue';
import ServiceNumber from '../components/ServiceNumber.vue';
import addNumber from '../components/addNumber.vue';

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index,
	},
	{
		path: '/service-numbers',
		name: 'service-numbers',
		component: ServiceNumbers,
	},
	{
		path: '/service-number',
		name: 'service-number',
		component: ServiceNumber,
	},
	{
		path: '/add-number',
		name: 'add-number',
		component: addNumber,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;

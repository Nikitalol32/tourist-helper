import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import ServiceNumbers from '../views/ServiceNumbers.vue';

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
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;

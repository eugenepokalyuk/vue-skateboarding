import {createRouter, createWebHistory} from 'vue-router';
// Импортируем компоненты страниц
import AboutPages from '../pages/AboutPages.vue';
import ErrorPages from '../pages/ErrorPages.vue';
import LandingPages from '../pages/LandingPages.vue';
import PricingPages from '../pages/PricingPages.vue';
import {ABOUT_PATH, HOME_PATH, PRICING_PATH} from './consts.js';

// Определяем маршруты
const routes = [
    { path: HOME_PATH, component: LandingPages },
    { path: PRICING_PATH, component: PricingPages },
    { path: ABOUT_PATH, component: AboutPages },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: ErrorPages }, // Для несуществующих маршрутов
];

// Создаем экземпляр маршрутизатора
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

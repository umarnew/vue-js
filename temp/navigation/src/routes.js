
import {createWebHistory, createRouter} from 'vue-router';
import home from './components/home.vue';
import services from './components/services.vue';
import portfolio from './components/portfolio.vue';
import contactus from './components/contactus.vue';




const routes=[
    {
        name:'home',
        path:'/home',
        component: home
    },
    {
        name:'services',
        path:'/services',
        component: services
    },
    {
        name:'portfolio',
        path:'/portfolio',
        component: portfolio
    },
    {
        name:'contactus',
        path:'/contactus',
        component: contactus
    }
];
const router=createRouter({
    history : createWebHistory(),
    routes
});
export default router;
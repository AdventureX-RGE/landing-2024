import Index from "@/pages/index/Index.vue";
import About from "@/pages/about/About.vue";
import VueRouter from "vue-router";

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/about',
        component: About
    }
];

const router = new VueRouter({
    routes
});

export default router;

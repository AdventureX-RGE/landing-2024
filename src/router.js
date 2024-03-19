import VueRouter from "vue-router";
import Index from "@/pages/Index.vue";
import Friends from "@/pages/Friends.vue";
import AboutAdx from "@/pages/AboutAdx.vue";
import AboutTeam from "@/pages/AboutTeam.vue";
import FAQ from "@/pages/FAQ.vue";

const routes = [
    {
        path: '/',
        component: Index,
        meta: {
            title: "AdventureX｜逃逸计划"
        }
    },
    {
        path: '/about-adx',
        component: AboutAdx
    },
    {
        path: '/friends',
        component: Friends
    },
    {
        path: '/about-team',
        component: AboutTeam
    },
    {
        path: '/faq',
        component: FAQ,
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
})

export default router;

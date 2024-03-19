import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import router from "@/router";

// css
import "@/fonts/fonts.css";
import "@/css/global.css";

Vue.use(VueRouter);
Vue.use(VueCookies);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');

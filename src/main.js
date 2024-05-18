import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import router from "@/router";
import i18n from "@/js/i18n";

// css
import "@/fonts/fonts.css";
import "@/css/global.css";

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueCookies);

new Vue({
  i18n,
  render: h => h(App),
  router
}).$mount('#app');

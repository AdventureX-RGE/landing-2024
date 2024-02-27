import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from "@/router";

// css
import "@/fonts/fonts.css";
import "@/css/global.css";

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');

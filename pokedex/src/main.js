import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

export const baseUrl = "https://pokeapi.co/api/v2";

let data = {
  pokemon: []
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");

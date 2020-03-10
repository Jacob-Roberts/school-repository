import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

export const baseUrl = "https://pokeapi.co/api/v2";

let data = {
  pokemon: []
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");

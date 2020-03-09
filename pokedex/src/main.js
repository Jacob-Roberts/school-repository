import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const baseUrl = "https://pokeapi.co/api/v2";

let data = {
  message: "Hello Vue!",
  pokemonName: "",
  loading: true,
  errorMessage: "",
  pokemon: []
},

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");

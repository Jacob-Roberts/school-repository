<template>
  <div class="home">
    <h1>My Pokemon</h1>
    <hr />
    <form v-on:submit.prevent="addPokemon">
      <div class="form-group">
        <label>Add New Pokemon</label>
        <input
          v-model="search"
          class="d-block border form-control"
          style="max-width: 400px;"
          type="text"
        /><br />
      </div>
      <button type="submit" class="btn btn-lg btn-secondary">
        Add
      </button>
    </form>
    <span class="text-danger">{{ errorMessage }}</span>

    <PokemonList :pokemon="pokemon" />
  </div>
</template>

<script>
import axios from "axios";
import PokemonList from "../components/PokemonList.vue";
import { baseUrl } from "../Constants";
export default {
  name: "Home",
  components: {
    PokemonList
  },
  data() {
    return { search: "", loading: false, errorMessage: "" };
  },
  computed: {
    pokemon() {
      return this.$root.$data.pokemon;
    }
  },
  methods: {
    async addPokemon() {
      try {
        const url = `${baseUrl}/pokemon/${this.search}`;

        this.loading = true;
        let response = await axios.get(url);
        this.loading = false;
        if (!response.status !== 200) {
          this.errorMessage = response.statusText;
        } else {
          this.search = "";
        }

        this.$root.$data.pokemon.push(response.data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          this.errorMessage = `${error.response.status} ${error.response.data}`;
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          // console.log(error.request);
          this.errorMessage = `${error.request}`;
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log("Error", error.message);
          this.errorMessage = error.message;
        }
        // this.errorMessage = error.message;
      }
    }
  }
};
</script>

<template>
  <div class="home">
    <h1>My Pokemon</h1>
    <hr />
    <div class="form-group">
      <label>Add New Pokemon</label>
      <input
        v-model="pokemonName"
        class="d-block border form-control"
        style="max-width: 400px;"
        type="text"
      /><br />
    </div>
    <button v-on:click="addPokemon" class="btn btn-lg btn-secondary">
      Add
    </button>
    <span class="text-danger">{{ errorMessage }}</span>

    <div v-for="pokemon in pokemon" :key="pokemon.id">
      <p>{{ pokemon.species.name }}</p>
      <img v-bind:src="pokemon.sprites.front_default" />
    </div>

    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    async addPokemon() {
      try {
        const url = `${baseUrl}/pokemon/${this.pokemonName}`;

        this.loading = true;
        let data = await fetch(url);
        this.loading = false;
        if (!data.ok) {
          this.errorMessage = "No Pokemon found by that name";
          //   document.getElementById("pokemonInput").focus();
        } else {
          this.pokemonName = "";
          //   document.getElementById("pokemonInput").value = "";
          //   document.getElementById("pokemonInput").focus();
        }

        let pokemon = await data.json();

        this.pokemon.push(pokemon);

        // let result = document.getElementById("myPokemon").innerHTML;
        // result += "<div>";
        // result += "<p>";
        // result += pokemon.name;
        // result += `<img src="${pokemon.sprites.front_default}">`;
        // if (pokeball !== null && pokeball !== undefined && pokeball != -1) {
        //   let data = await fetch(`${baseUrl}/item/${pokeball}`);
        //   let dataJson = await data.json();
        //   result += `<img src="${dataJson.sprites.default}">`;
        // }
        // result += "<p>";
        // result += "</div>";

        // document.getElementById("myPokemon").innerHTML = result;
      } catch (exception) {
        console.error(exception);
      }
    }
  }
};
</script>

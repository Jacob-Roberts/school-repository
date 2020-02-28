const baseUrl = "https://pokeapi.co/api/v2";

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    pokemonName: "",
    loading: true,
    errorMessage: "",
    pokemon: []
  },
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
});

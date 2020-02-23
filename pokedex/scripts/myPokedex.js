const baseUrl = "https://pokeapi.co/api/v2";

async function addPokemonToPokedex(name) {
  const url = `${baseUrl}/pokemon/${name}`;
  let data = await fetch(url);
  if (!data.ok) {
    document.getElementById("pokemonError").innerHTML =
      "No Pokemon found by that name";
    document.getElementById("pokemonInput").focus();
  } else {
    document.getElementById("pokemonInput").value = "";
    document.getElementById("pokemonInput").focus();
  }
  let pokemon = await data.json();

  let result = document.getElementById("myPokemon").innerHTML;
  result += "<div>";
  result += "<p>";
  result += pokemon.name;
  result += `<img src="${pokemon.sprites.front_default}">`;
  result += "<p>";
  result += "</div>";

  document.getElementById("myPokemon").innerHTML = result;
}

document
  .getElementById("pokemonSubmit")
  .addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("pokemonError").innerHTML = "";
    addPokemonToPokedex(document.getElementById("pokemonInput").value);
  });

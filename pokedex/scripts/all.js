const baseUrl = "https://pokeapi.co/api/v2";

async function getAllPokemon(offset = 0, amount = 20) {
  const url = `${baseUrl}/pokemon`;
  let list = await fetch(url);
  let json = await list.json();

  let result = "";
  result += "<h2>Available Pokemon</h2>";
  result += "<div class='container-lg bg-light rounded text-dark'>";
  result += "<div class='accordian' id='pokemon-accordian'>";
  for (let pokemon of json.results) {
    let pokemonData = await fetch(pokemon.url);
    let pokemonDataJson = await pokemonData.json();
    let image = pokemonDataJson.sprites.front_default;
    result += "<p class='border-top'>";
    result += `<img src="${image}">`;
    result += `<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${pokemon.name}">`;
    result += pokemon.name;
    result += "</button>";
    result += "</p>";
    result += `<div id="collapse${pokemon.name}" class="collapse" aria-labelledby="headingOne" data-parent="#pokemon-accordian">
    <div class="card-body">
      <p>Type: `;
    for (let type of pokemonDataJson.types) {
      result += type.type.name;
      result += ", ";
    }
    result = result.slice(0, -2);
    result += "</p>";
    result += "<p>Abilities: ";
    for (let ability of pokemonDataJson.abilities) {
      result += ability.ability.name;
      result += ", ";
    }
    result = result.slice(0, -2);
    result += "</p>";
    result += "<p>Stats:";
    result += "<dl>";
    for (let stat of pokemonDataJson.stats) {
      result += `<dt>${stat.stat.name}</dt>`;
      result += `<dd>${stat.base_stat}</dd>`;
    }
    result = result.slice(0, -2);
    result += "</dl>";
    result += "</p>";
    result += `
    </div>
  </div>`;
  }
  result += "</div>";
  result += "</div>";

  document.getElementById("pokemonResults").innerHTML = result;
}

getAllPokemon();

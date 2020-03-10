<template>
  <div>
    <div v-for="pokemon in pokemon" :key="pokemon.id">
      <p class="border-top mb-0" v-bind:style="{ background: color(pokemon) }">
        <img :src="pokemon.sprites.front_default" />
        <b-button variant="link" v-b-toggle="pokemon.name" class="text-dark">
          {{ pokemon.name }}
        </b-button>
      </p>
      <b-collapse accordion="pokemon-accordion" :id="pokemon.name">
        <PokemonDetails :pokemon="pokemon" />
      </b-collapse>
    </div>
  </div>
</template>

<script>
import { typeToColorMap } from "../Constants";
import PokemonDetails from "./PokemonDetails";
export default {
  name: "PokemonAccordian",
  components: {
    PokemonDetails
  },
  methods: {
    color(pokemon) {
      return typeToColorMap[
        [...pokemon.types].sort((a, b) => a.slot - b.slot)[0].type.name
      ];
    }
  },
  props: {
    pokemon: Array
  }
};
</script>

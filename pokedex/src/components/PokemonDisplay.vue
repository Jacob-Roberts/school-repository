<template>
  <div>
    <div class="info" v-bind:style="{ background: color }">
      <h1>{{ pokemon.species.name }}</h1>
      <p>
        {{ types }}
      </p>
    </div>
    <div class="image">
      <img :src="pokemon.sprites.front_default" />
    </div>
  </div>
</template>

<script>
import { typeToColorMap } from "../Constants";
export default {
  name: "PokemonDisplay",
  props: {
    pokemon: Object
  },
  computed: {
    types() {
      return [...this.pokemon.types]
        .sort((a, b) => a.slot - b.slot)
        .map(i => i.type.name)
        .join(", ");
    },
    color() {
      return typeToColorMap[
        [...this.pokemon.types].sort((a, b) => a.slot - b.slot)[0].type.name
      ];
    }
  }
};
</script>

<style scoped>
.pokemon {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.pokemon img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.pokemon .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>

<template>
  <b-card-body>
    <h3>Attack</h3>
    <p>
      Weak Against:
      <label
        class="ml-3 p-1"
        v-for="weakness in weaknessAttack"
        :key="weakness"
        v-bind:style="{ background: color(weakness) }"
        >{{ weakness }}</label
      >
    </p>
    <p>
      Strong Against:
      <label
        class="ml-3 p-1"
        v-for="strength in strengthAttack"
        :key="strength"
        v-bind:style="{ background: color(strength) }"
        >{{ strength }}</label
      >
    </p>
    <p>
      Ineffective Against:
      <label
        class="ml-3 p-1"
        v-for="ineffective in ineffectiveAttack"
        :key="ineffective"
        v-bind:style="{ background: color(ineffective) }"
        >{{ ineffective }}</label
      >
    </p>

    <h3>Defense</h3>
    <p>
      Weak Against:
      <label
        class="ml-3 p-1"
        v-for="weakness in weaknessDefense"
        :key="weakness"
        v-bind:style="{ background: color(weakness) }"
        >{{ weakness }}</label
      >
    </p>
    <p>
      Strong Against:
      <label
        class="ml-3 p-1"
        v-for="strength in strengthDefense"
        :key="strength"
        v-bind:style="{ background: color(strength) }"
        >{{ strength }}</label
      >
    </p>
    <p>
      Invulnerable Against:
      <label
        class="ml-3 p-1"
        v-for="invulnerable in invulnerableDefense"
        :key="invulnerable"
        v-bind:style="{ background: color(invulnerable) }"
        >{{ invulnerable }}</label
      >
    </p>
  </b-card-body>
</template>

<script>
import { typeToColorMap } from "../Constants";
export default {
  name: "TypeDetails",
  props: {
    type: Object
  },
  methods: {
    color(type) {
      return typeToColorMap[type];
    }
  },
  computed: {
    weaknessAttack() {
      return this.type.damage_relations.half_damage_to.map(i => i.name);
    },
    weaknessDefense() {
      return this.type.damage_relations.double_damage_from.map(i => i.name);
    },
    strengthAttack() {
      return this.type.damage_relations.double_damage_to.map(i => i.name);
    },
    strengthDefense() {
      return this.type.damage_relations.half_damage_from.map(i => i.name);
    },
    ineffectiveAttack() {
      return this.type.damage_relations.no_damage_to.map(i => i.name);
    },
    invulnerableDefense() {
      return this.type.damage_relations.no_damage_from.map(i => i.name);
    }
  }
};
</script>

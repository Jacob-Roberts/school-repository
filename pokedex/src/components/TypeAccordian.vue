<template>
  <div>
    <div v-for="type in types" :key="type.id">
      <p class="border-top mb-0" v-bind:style="{ background: color(type) }">
        <b-button variant="link" v-b-toggle="type.name" class="text-dark">
          {{ type.name }}
        </b-button>
      </p>
      <b-collapse accordion="type-accordion" :id="type.name">
        <TypeDetails :type="type" />
      </b-collapse>
    </div>
  </div>
</template>

<script>
import { typeToColorMap } from "../Constants";
import TypeDetails from "./TypeDetails";
export default {
  name: "TypeAccordian",
  components: {
    TypeDetails
  },
  methods: {
    color(type) {
      return typeToColorMap[type.name];
    }
  },
  props: {
    types: Array
  }
};
</script>

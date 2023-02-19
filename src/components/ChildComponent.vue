<script setup>
import AButton from "./AButton.vue";
</script>
<template>
  <input
    v-model="input"
    type="text"
    class="inputfield"
    placeholder="enter text"
  />
  <a-button @click="click" />
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },

  methods: {
    click() {
      this.$emit("emit", this.input);
    },
  },
};
</script>

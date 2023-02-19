<script setup>
import AButton from "./AButton.vue";
</script>

<template>
  <div>
    Another counther, this time initiated through Vuex store mutation
    <a-button @click="onClick"></a-button>
    {{ store.state.count }}
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  data() {
    const store = useStore();

    return {
      store,
    };
  },
  methods: {
    onClick() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style scoped>
/* Styling added to adjust some of the Bootstrap-styling */
.addedFormatting {
  min-width: 650px;
  max-width: 60vw;
  margin: 0 auto;
}
.accordion {
  --bs-accordion-btn-focus-border-color: var(--jonquil);
  --bs-accordion-active-color: var(--black-olive);
  --bs-accordion-active-bg: var(--jonquil_transparent);
  --bs-accordion-color: var(--black-olive);
  --bs-accordion-btn-color: var(--black-olive);
  --bs-accordion-btn-focus-box-shadow: var(--satin-sheen-gold);
}
.accordion-body {
  padding: 0;
}
.accordion-item {
  color: var(--black-olive);
  background-color: var(--jonquil_transparent);
}
.accordion-button {
  font-weight: 700;
}

.image {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>

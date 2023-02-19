<script setup>
import ChildComponent from "../components/ChildComponent.vue";
</script>
<template>
  <child-component :value="input" @emit="writtenInput" />

  <p>Received text: {{ this.text }}</p>
</template>

<script>
export default {
  props: {
    input: {
      type: String,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  components: {
    ChildComponent,
  },
  methods: {
    writtenInput(input) {
      this.text = input;
    },
  },
};
</script>

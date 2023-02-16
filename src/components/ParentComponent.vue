<script setup>
import ChildComponent from "../components/ChildComponent.vue";
</script>
<template>
  <h1>Sending props</h1>
  <child-component :value="input" @emit="writtenInput" />

  <p>Entered text: {{ this.text }}</p>
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
      text: {
        type: String,
      },
    };
  },
  components: {
    ChildComponent,
  },
  methods: {
    writtenInput(input) {
      this.text = input;
      console.log("input:", input);
      console.log("this.text:", this.text);
    },
  },
};
</script>

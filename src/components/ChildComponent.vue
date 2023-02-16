<template>
  <input v-model="input" type="text" class="inputfield" />
  <input type="button" value="Click" @click="click" class="btn" />
</template>

<script>
export default {
  data() {
    return {
      input: {
        type: String,
        value: "",
      },
    };
  },
  methods: {
    click() {
      console.log("event:");
      console.log("this.input:", this.input);
      this.$emit("emit", this.input);
    },
  },
};
</script>

<template>
  <button :style="{ background, color }" v-bind:disabled="disabled">
    Button
  </button>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
    },
    color: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
}
button {
  background: var(--jonquil);
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  font-family: "interregular";
}
button:hover {
  filter: brightness(125%);
  background: var (--jonquil_transparent);
}
</style>

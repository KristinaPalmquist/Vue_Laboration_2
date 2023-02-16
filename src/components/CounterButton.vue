<script setup></script>

<template>
  <h3>Counter button</h3>
  <div class="flexContainer">
    <p>Click the button</p>

    <MyButton
      class="btn"
      :value="counter"
      @click="counter++"
      :disabled="!valid"
    />

    <div :class="getClass(counter)">
      <p v-if="isEven()">{{ counter }} is an <strong>even</strong> number</p>
      <p v-else>{{ counter }} is an <strong>odd</strong> number</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { start: { type: Number } },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getClass(counter) {
      return this.isEven(counter) ? "even" : "uneven";
    },
    isEven() {
      return this.counter % 2 === 0;
    },
  },
};
</script>

<style scoped>
.flexContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
/*
#flexItem2 {
  font-size: 15pt;
  width: 50px;
  font-weight: 200;
} */

.even {
  color: darkgreen;
}
.uneven {
  color: brown;
}
</style>

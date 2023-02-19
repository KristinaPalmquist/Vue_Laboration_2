<script setup>
import AButton from "./AButton.vue";
</script>

<template>
  <div class="flexContainer" :class="getClass(counter)">
    <p id="flexItem1">Click the submit-button</p>

    <a-button id="flexItem2" :value="counter" @click="counter++" />

    <div id="flexItem3">
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
  max-width: 50vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}

#flexItem1,
#flexItem3 {
  display: flex;
  align-items: center;
  margin: 0;
}
#flexItem3 p {
  margin: auto;
}
.even {
  color: darkgreen;
}
.uneven {
  color: brown;
}
</style>

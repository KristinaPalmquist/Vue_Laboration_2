<script setup>
import AButton from "./AButton.vue";
</script>

<template>
  <div class="flexContainer" :class="getClass(counter)">
    <p id="flexItem1">Click the submit-button</p>

    <a-button id="flexItem2" :value="counter" @click="counter++" />
  </div>

  <div :class="getClass(counter)">
    <p v-if="isEven()">
      If {{ counter }} is an <strong>even</strong> number, this text appears
    </p>
    <p v-else>
      If {{ counter }} is <strong>not</strong> an even number, this text appears
      instead
    </p>
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
      return this.isEven(counter) ? "even" : "odd";
    },
    isEven() {
      return this.counter % 2 === 0;
    },
  },
};
</script>

<style scoped>
.flexContainer {
  max-width: 30vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}

#flexItem1 {
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
.odd {
  color: brown;
}
</style>

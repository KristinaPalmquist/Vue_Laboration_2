<script setup>
import CounterButton from "../../src/components/CounterButton.vue";
import NameForm from "../../src/components/NameForm.vue";
import ComPuted from "../components/ComPuted.vue";
import ParentComponent from "../components/ParentComponent.vue";
</script>

<template>
  <main>
    <NameForm />
    <CounterButton :start="0" />
    <ComPuted />
    <ParentComponent />
  </main>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 0 0 4vh 0;
}
h2 {
  padding: 0 0 2vh 0;
}
p {
  padding: 1vh 0;
}
</style>

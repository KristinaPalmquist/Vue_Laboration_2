<script setup>
import CounterButton from "../../src/components/CounterButton.vue";
import NameForm from "../../src/components/NameForm.vue";
import ParentComponent from "../components/ParentComponent.vue";
import VuexStore from "../components/VuexStore.vue";
</script>

<template>
  <main>
    <div id="nameForm">
      <NameForm />
    </div>
    <div id="counterButton">
      <CounterButton :start="0" />
    </div>
    <div id="parentComponent">
      <ParentComponent />
    </div>
    <div id="vuexStore">
      <VuexStore />
    </div>
    <div id="userView">
      <span>Click one of these links to see a nested router in action:</span>
      <router-link to="/other/alice">About Alice</router-link>
      <router-link to="/other/bob">About Bob</router-link>
      <RouterView />
    </div>
  </main>
</template>

<script>
export default {};
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
#nameForm,
#vuexStore,
#userView,
#counterButton,
#parentComponent {
  margin: 4vh auto;
}
#userView a {
  padding: 0 5vw;
}
</style>

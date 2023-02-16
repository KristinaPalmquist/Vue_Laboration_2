<script setup>
// import fetch from "fetch";
// import FetchApi from "../components/FetchApi.vue";
</script>

<template>
  <h3>fetch api</h3>
  <div class="details">
    <!-- <FetchApi
      v-for="project in projects"
      :key="project.id"
      :project="project"
    /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  //   components: { "fetch-api": FetchApi },
  //   mounted() {
  //     this.fetchData();
  //   },
  //   methods: {
  //     async fetchData() {
  //       const result = await fetch("data.json");
  //       const value = await result.json;

  //       this.projects = value;
  //     },
  //   },
};
</script>

<style scoped></style>

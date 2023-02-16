<script setup>
import axios from "axios";
import AxiosApi from "../components/AxiosApi.vue";
</script>

<template>
  <main>
    <h2>Projects</h2>
    <div class="projects">
      <axios-api
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  components: { "axios-api": AxiosApi },
  mounted() {
    this.axiosGet();
  },
  methods: {
    async axiosGet() {
      const res = await axios.get("data.json");

      this.projects = res.data;
    },
  },
};
</script>

<style scoped>
.projects {
  margin-top: 10vh;
}
</style>

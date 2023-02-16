<script setup>
// import fetch from "fetch";
// import FetchApi from "../components/FetchApi.vue";
</script>

<template>
  <h3>bootstrap</h3>
  <div class="details">
    <!-- <FetchApi
      v-for="project in projects"
      :key="project.id"
      :project="project"
    /> -->
    <!-- Bootstrap accordion -->
    <div class="accordion" id="accordionExample">
      <div
        class="accordion-item"
        v-for="project in projects"
        :key="project.id"
        @click="click(project)"
      >
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {{ project.course }}, {{ project.school }}
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>{{ project.from }} - {{ project.to }}</strong>
            <img :src="`${project.src}`" />
            {{ project.link }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("assigments/fetch");
  },
  computed: {
    // blir denna rätt?
    works() {
      return this.$store.state.assignments.works;
    },
    chosenProject() {
      return this.$store.getters["assignments/chosenProject"];
    },
    methods: {
      click(work) {
        return this.$store.commit("assignments/setProjects", work.id);
      },
    },
  },
  //   data() {
  //     return {
  //       projects: [],
  //     };
  //   },
  //   components: { "fetch-api": FetchApi },
  //   mounted() {
  //     this.fetchData();
  //   },
  //   methods: {
  //     async fetchData() {
  //       const res = await fetch("data.json");
  //       const val = await res.json;
  //       this.projects = val;
  //     },
  //   },
};
</script>

<style scoped></style>

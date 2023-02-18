<script setup>
import TestStore from "../components/TestStore.vue";
</script>

<template>
  <h3>bootstrap</h3>
  <TestStore />
  <!-- <div class="details"> -->
  <!-- Bootstrap accordion -->
  <!-- <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="project in projects" :key="project.id">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Kurs, skola -->
  <!-- {{ project.course }}, {{ project.school }} -->
  <!-- '        </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>
              Rubrik' -->
  <!-- {{ project.from }} - {{ project.to }} -->
  <!-- </strong>
            bild och text/länk -->
  <!-- <img :src="`${project.src}`" />
            {{ project.link }} -->
  <!-- </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  //   components: {
  //     TestStore,
  //   },
  //   data() {
  //     return {
  //       projects: null,
  //     };
  //   },
  //   created() {
  //     this.$store.dispatch("posts/fetch");
  //   },
  //   computed: {
  //     // blir denna rätt?
  //     works() {
  //       return this.$store.state.posts.works;
  //     },
  //     chosenProject() {
  //       return this.$store.getters["posts/chosenProject"];
  //     },
  //     methods: {
  //       click(post) {
  //         return this.$store.commit("posts/setProjects", post.id);
  //       },
  //     },
  //   },
};
</script>

<style scoped></style>

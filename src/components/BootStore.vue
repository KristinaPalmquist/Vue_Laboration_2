<script setup></script>

<template>
  <!-- Bootstrap accordion -->
  <div class="addedFormatting">
    <div class="accordion" id="accordionExample">
      <div v-for="project in projects()" :key="project.id" class="box">
        <div class="accordion-item">
          <h2 class="accordion-header" :id="'heading' + `${project.id}`">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + `${project.id}`"
              aria-expanded="false"
              :aria-controls="'collapse' + `${project.id}`"
            >
              {{ project.course }}
              , {{ project.school }} ({{ project.from }} - {{ project.to }})
            </button>
          </h2>
          <div
            :id="'collapse' + `${project.id}`"
            class="accordion-collapse collapse"
            :aria-labelledby="'heading' + `${project.id}`"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <img :src="`${project.src}`" class="image" />
              <a :href="`${project.link}`" class="link" target="_blank">
                {{ project.link }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  data() {
    const store = useStore();

    return {
      store,
    };
  },
  created() {
    this.$store.dispatch("fetchData");
  },
  mounted() {
    setTimeout(() => this.projects(), 2000);
  },
  methods: {
    projects() {
      if (this.$store.state.projects) {
        return JSON.parse(JSON.stringify(this.$store.state.projects));
      }
      console.log("Cannot find the projects");
      return [];
    },
  },
};
</script>

<style scoped>
/* Styling added to adjust some of the Bootstrap-styling */
.addedFormatting {
  min-width: 650px;
  max-width: 60vw;
  margin: 10vh auto;
}
.accordion {
  --bs-accordion-btn-focus-border-color: var(--jonquil);
  --bs-accordion-active-color: var(--black-olive);
  --bs-accordion-active-bg: var(--jonquil_transparent);
  --bs-accordion-color: var(--black-olive);
  --bs-accordion-btn-color: var(--black-olive);
  --bs-accordion-btn-focus-box-shadow: var(--satin-sheen-gold);
}
.accordion-body {
  padding: 0;
}
.accordion-item {
  color: var(--black-olive);
  background-color: var(--jonquil_transparent);
}
.accordion-button {
  font-weight: 700;
}

.image {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>

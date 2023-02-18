<script setup></script>

<template>
  <div>
    <h3>Project Details</h3>
    <div v-for="project in projects()" :key="project.id">
      <!-- Bootstrap accordion -->
      <div class="addedFormatting">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {{ project.course }}, {{ project.school }} ({{ project.from }} -
                {{ project.to }})
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <img :src="`${project.src}`" class="image" />
                <a :href="`${project.link}`" class="link" />
              </div>
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
    setTimeout(() => this.projects(), 1000);
  },
  methods: {
    projects() {
      console.log(
        "computed projects:",
        JSON.parse(JSON.stringify(this.$store.state.projects))
      );
      console.log("bajs");
      console.log(this.$store.state.projects);
      return JSON.parse(JSON.stringify(this.$store.state.projects));
    },
  },
};
</script>

<style scoped>
.addedFormatting {
  min-width: 650px;
  max-width: 60vw;
  margin: 0 auto;
}
.accordion {
  --bs-accordion-btn-focus-border-color: var(--jonquil);
  --bs-accordion-active-color: var(--black-olive);
  --bs-accordion-active-bg: var(--jonquil_transparent);
  --bs-accordion-color: var(--black-olive);
  --bs-accordion-color: var(--black-olive);
  --bs-accordion-btn-color: var(--black-olive);
  --bs-accordion-btn-focus-box-shadow: var(--satin-sheen-gold);
}
.accordion-item {
  color: var(--black-olive);
  background-color: var(--jonquil_transparent);
}
.accordion-button {
  text-align: center;
}

.image {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>

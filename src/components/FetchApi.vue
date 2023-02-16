<script>
export default {
  props: {
    project: {
      required: true,
      type: Object,
    },
  },
};
</script>

<template>
  <!-- Bootstrap accordian -->
  <div>
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
            <strong>{{ from }} - {{ to }}</strong>
            <img :src="`${project.src}`"/>
            It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* h1 {
  font-size: xx-large;
  color: var(--field-drab);
} */

ul {
  list-style: none;
  font-size: xx-large;
}

a {
  padding: 0 3vw;
}
</style>

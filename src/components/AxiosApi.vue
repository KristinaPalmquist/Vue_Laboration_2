<template>
  <ul>
    <li>
      <!-- {{ project.id }} -->
      <a :href="`${project.link}`">
        {{ project.course }}
      </a>
      {{ project.school }}
    </li>
  </ul>
</template>

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

<style scoped>
ul {
  list-style: none;
  font-size: 4vh;
}

a {
  padding: 0 3vw;
}
</style>

<template>
  <ul>
    <li>
      <a :href="`${project.link}`" target="_blank">
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

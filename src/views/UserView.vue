<template>
  <h2>This is {{ $route.params.userName }}s view!</h2>
  <img src="../assets/img/pexels-brett-sayles-992734.jpg" />
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
    },
  },
};
</script>

<style scoped>
img {
  max-width: 60vw;
  max-height: 60vh;
}
</style>

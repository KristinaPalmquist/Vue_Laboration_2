<script setup></script>

<template>
  <div>
    <h3>welcome text</h3>
    <h1>This is my portfolio page</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos
      nobis, laboriosam id odio odit qui modi adipisci fugiat dolores,
      perferendis tempore? Voluptates, consequatur unde? Illum molestias
      pariatur, maxime molestiae explicabo unde nisi esse nesciunt velit
      dignissimos minus dolore ipsam natus nulla voluptates itaque eos nobis
      ullam in ratione quaerat.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      show: true,
      isHidden: true,
    };
  },
  methods: {
    onClick() {
      this.show = false;
      console.log(this.name);
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 0 0 4vh 0;
}
h2 {
  padding: 0 0 2vh 0;
}
p {
  padding: 1vh 0;
}
</style>

<script setup>
import { RouterLink, RouterView } from "../../node_modules/vue-router";
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="wrapper" id="container">
    <img alt="Initials" class="logo" :src="logoSource" />
    <header>
      <h1>{{ name }}</h1>
      <h3>Portfolio</h3>
    </header>
    <nav>
      <RouterLink to="/" class="link" id="link1">Home</RouterLink>
      <RouterLink to="/projects" class="link" id="link2">Projects</RouterLink>
      <RouterLink to="/details" class="link" id="link2">Details</RouterLink>
      <RouterLink to="/other" class="link" id="link3">Other</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<script>
export default {
  data() {
    return { logoSource: "/src/assets/img/logo.png" };
  },
};
</script>

<style scoped>
.wrapper {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  padding: 2vh 4vw;
}

@media (min-width: 1024px) {
  .wrapper {
    align-items: center;
  }
}
#container {
  display: grid;
  grid-template-columns: min-content, auto, min content;
  grid-template-rows: auto, auto, auto;
  grid-template-areas:
    "logo head1 nav1 "
    "logo head1 nav2"
    "logo head2 nav3";
}

.logo {
  grid-area: logo;
  align-self: center;
  width: auto;
  min-height: 15vh;
  max-height: 20vh;
}
header h1 {
  grid-area: head1;
  font-size: 9vh;
  top: -10px;
  margin-top: 8px;
  margin-bottom: 0px;
}
h3 {
  grid-area: head2;
  font-size: 4vh;
}
#link1 {
  grid-area: nav1;
}
#link2 {
  grid-area: nav2;
}
#link3 {
  grid-area: nav3;
}
.link {
  display: block;
  text-align: right;
  font-size: 3vh;
  margin: 0;
  padding: 0;
}
.router-link-active {
  font-weight: 700;
  color: var(--jonquil);
}
</style>

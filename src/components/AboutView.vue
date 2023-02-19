<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <router-link to="/about/alice">Om Alice</router-link>
  <router-link to="/about/bob">Om Bob</router-link>
  <RouterView />
</template>

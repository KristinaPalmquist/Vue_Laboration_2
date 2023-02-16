<script setup></script>

<template>
  <h3>ComPuted</h3>
  <h4>Does {{ person.name }} have children?</h4>
  <span> {{ hasChildren }}, </span>
  <span v-if="hasChildren === 'Yes'">
    they have {{ person.children.length }} and their names are:
  </span>
  <span v-else>they don't</span>
  <div v-for="(child, index) in person.children" :key="index">
    <div>{{ child }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: "Sara Johnson",
        age: 42,
        children: ["John", "Anna", "Ben"],
      },
    };
  },
  computed: {
    hasChildren() {
      return this.person.children.length > 0 ? "Yes" : "No";
    },
  },
};
</script>

<style scoped>
h4 {
  margin-top: 20pt;
}
</style>

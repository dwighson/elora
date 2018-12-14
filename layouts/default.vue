<template>
  <div>
    <navigation></navigation>
    <nuxt></nuxt>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
export default {
  name: "default",
  components: {
    Header,
    Navigation
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>

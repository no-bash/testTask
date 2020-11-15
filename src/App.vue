<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
.container {
  max-width: 1170px;
  width: 100%;
}
</style>

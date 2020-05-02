<template>

  <div id="app">
      <NavBar></NavBar>
      <router-view>
            <b-container>
            </b-container>
      </router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
    NavBar: () => import("./components/NavBar.vue")
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Video Viewer";
    },
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
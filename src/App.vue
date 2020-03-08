<template>
  <div id="app">
    <NavBar></NavBar>
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'app',
  components: {
    NavBar
  },
	watch: {
		'$route' (to) {
			document.title = to.meta.title || 'Your Website'
		}
	},
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
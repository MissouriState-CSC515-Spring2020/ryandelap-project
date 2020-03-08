<template>
  <div>
    <h1>Dogs</h1>

    <b-row class="text-center">
      <b-col>
				<router-link to="/single"><img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" /></router-link>
      </b-col>
      <b-col>
				<router-link to="/single"><img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" /></router-link>
      </b-col>
      <b-col>
				<router-link to="/single"><img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" /></router-link>
      </b-col>
      <b-col>
				<router-link to="/single"><img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" /></router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Single"
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
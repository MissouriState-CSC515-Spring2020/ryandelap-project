<template>
  <div>
    <h1>Profile for User: X_MDS_SLAYER_X</h1>

		<p>Recent Posts:</p>
    <b-row class="text-center">
      <b-col>
				<router-link to="/single"><img src="cutedoge.jpg" /></router-link>
      </b-col>
      <b-col>
				<router-link to="/single"><img src="cutedoge.jpg" /></router-link>
      </b-col>
      <b-col>
				<router-link to="/single"><img src="cutedoge.jpg" /></router-link>
      </b-col>
      <b-col>
				<router-link to="/single"><img src="cutedoge.jpg" /></router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "User"
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
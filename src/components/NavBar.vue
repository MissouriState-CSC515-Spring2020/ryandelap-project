<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand :to="'/home'">Images</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="'/home'">Home</b-nav-item>
          <b-nav-item-dropdown text="Categories" right>
            <b-dropdown-item :to="{name: 'Category'}">Memes</b-dropdown-item>
						<b-dropdown-item :to="{name: 'Category'}">Dogs</b-dropdown-item>
						<b-dropdown-item :to="{name: 'Category'}">Pictures of Chad</b-dropdown-item>
          </b-nav-item-dropdown>
					<b-nav-item :to="'/user'">Profile</b-nav-item>
					<b-nav-item :to="'/single'">Random Image</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
</style> 
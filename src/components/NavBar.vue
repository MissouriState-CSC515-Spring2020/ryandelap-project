<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand :to="'/home'">Videos</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="'/home'">Home</b-nav-item>
          <b-nav-item-dropdown text="Categories" right>
            <b-dropdown-item to="/category/Chad%20Killingsworth">Videos of Chad Killingsworth</b-dropdown-item>
            <b-dropdown-item to="/category/Cute%20Dogs">Videos of Cute Dogs</b-dropdown-item>
            <b-dropdown-item to="/category/Cows">Videos of cows</b-dropdown-item>
          </b-nav-item-dropdown>
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
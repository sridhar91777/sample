<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand v-b-toggle.sidebar-1 href="#">
        <div class="navButton"></div>
        <div class="navButton"></div>
        <div class="navButton"></div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <router-link to="/home">Go to Home</router-link>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: "Navbar",
  props: {},
};
</script>

<style>
.navButton {
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
}
</style>
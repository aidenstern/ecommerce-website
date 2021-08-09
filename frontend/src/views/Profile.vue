<template>
  <div id="home" class="container mt-5">
    <div class="columns">
      <div class="column is-narrow">
        <div class="menu">
          <ul class="menu-list">
            <li>
              <router-link :class="{ 'is-active': this.$route.name === 'Dashboard' }" :to="{ name: 'Dashboard' }">Dashboard</router-link>
            </li>
            <li>
              <router-link :class="{ 'is-active': this.$route.name === 'Orders' }" :to="{ name: 'Orders' }">Orders</router-link>
            </li>
            <li>
              <router-link :class="{ 'is-active': this.$route.name === 'Shipping' }" :to="{ name: 'Shipping' }">Shipping</router-link>
            </li>
            <li>
              <router-link :class="{ 'is-active': this.$route.name === 'Billing' }" :to="{ name: 'Billing' }">Billing</router-link>
            </li>
            <li>
              <router-link :class="{ 'is-active': this.$route.name === 'Preferences' }" :to="{ name: 'Preferences' }">Preferences</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="column content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Profile",
  data() {
    return {};
  },
};
</script>

<style scoped>
.menu-list a.is-active {
    background-color: whitesmoke;
    color: black;
}
</style>
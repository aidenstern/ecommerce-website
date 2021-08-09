<template>
  <div class="navbar-item has-dropdown" :class="{ 'is-active': showMenu }">
    <a class="navbar-link is-arrowless" @click="showMenu = !showMenu">User</a>
    <div class="navbar-dropdown is-right">
      <div class="div pr-6">
        <div class="div navbar-item">
          <router-link :to="{ name: 'Dashboard' }">Profile</router-link>
        </div>
        <div class="div navbar-item">
          <router-link :to="{ name: 'Billing' }">Billing</router-link>
        </div>
        <div class="div navbar-item">
          <router-link :to="{ name: 'Orders' }">Orders</router-link>
        </div>
      </div>
      <hr class="navbar-divider" />
      <div class="div pr-6">
        <div class="navbar-item">
          <a @click="signOut()">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NavbarUserDropdown",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    ...mapActions("account", ["logout"]),
    signOut() {
      this.logout();
      if (this.$route.name !== "Home") {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style>
</style>
<template>
  <nav class="navbar is-dark">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" :to="{ name: 'Home' }">
          <strong>BrandLogo</strong>
        </a>
        <div
          @click="showNav = !showNav"
          :class="{ 'is-active': showNav }"
          class="navbar-burger burger disable-margin"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div
        v-if="!status.loggedIn"
        :class="{ 'is-active': showNav }"
        class="navbar-menu is-hidden-desktop"
      >
        <a class="navbar-item" @click="loginModal('register')">Register</a>
        <a class="navbar-item" @click="loginModal('login')">Log in</a>
      </div>
      <div v-else :class="{ 'is-active': showNav }" class="navbar-menu is-hidden-desktop">
        <NavbarUserDropdown></NavbarUserDropdown>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="navbar-item" :to="{ name: 'Home' }">About</router-link>
          <router-link class="navbar-item" :to="{ name: 'Store' }">Store</router-link>
        </div>
        <div v-if="!status.loggedIn" class="navbar-end is-hidden-touch">
          <a class="navbar-item" @click="loginModal('register')">Register</a>
          <a class="navbar-item" @click="loginModal('login')">Log in</a>
        </div>
        <div v-else class="navbar-end is-hidden-touch">
          <NavbarUserDropdown></NavbarUserDropdown>
        </div>
      </div>
    </div>
    <LoginRegistrationModal v-if="!status.loggedIn" ref="LoginRegistrationModal"></LoginRegistrationModal>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import LoginRegistrationModal from "@/components/modals/LoginRegistrationModal";
import NavbarUserDropdown from "@/components/dropdowns/NavbarUserDropdown";

export default {
  name: "AppHeader",
  data() {
    return {
      showNav: false,
    };
  },
  components: {
    LoginRegistrationModal,
    NavbarUserDropdown,
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  methods: {
    loginModal(page) {
      this.$refs.LoginRegistrationModal.toggleModal(page);
    },
  },
};
</script>
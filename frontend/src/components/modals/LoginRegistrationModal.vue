<template>
  <div class="modal" v-bind:class="{'is-active': showModal}">
    <div class="modal-background" @click="toggleModal"></div>

    <div class="modal-content">
      <div class="columns is-marginless is-mobile">
        <div class="column is-10 is-offset-1">
          <div class="box">
            <h1 class="title has-text-centered is-4" v-if="currentTab==='login'">Log in to BrandName</h1>
            <h1
              class="title has-text-centered is-4"
              v-if="currentTab==='register'"
            >Join BrandName today</h1>

            <div class="tabs">
              <ul>
                <li v-bind:class="{'is-active': currentTab === 'login' ? true : false}">
                  <a @click="currentTab='login'">Log in</a>
                </li>
                <li v-bind:class="{'is-active': currentTab === 'register' ? true : false}">
                  <a @click="currentTab='register'">Register</a>
                </li>
              </ul>
            </div>

            <section class="mt-2">
              <LoginForm v-if="currentTab==='login'" />
              <RegisterForm v-if="currentTab==='register'" />
            </section>

            <div class="columns is-vcentered has-text-centered mt-1 mb-0">
              <div class="column">
                <hr />
              </div>
              <div class="column is-1">
                <p>or</p>
              </div>
              <div class="column">
                <hr />
              </div>
            </div>

            <div class="buttons is-centered">
              <FacebookLoginButton />
              <GoogleLoginButton />
            </div>
          </div>
        </div>

        <div class="column is-1">
          <button class="delete" aria-label="close" @click="toggleModal"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookLoginButton from "@/components/buttons/FacebookLoginButton";
import GoogleLoginButton from "@/components/buttons/GoogleLoginButton";
import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";

export default {
  name: "LoginRegistrationModal",
  data() {
    return {
      showModal: false,
      currentTab: "login",
    };
  },
  components: {
    FacebookLoginButton,
    GoogleLoginButton,
    LoginForm,
    RegisterForm,
  },
  methods: {
    toggleModal(page) {
      this.currentTab = page;
      this.showModal = !this.showModal;
    },
  },
};
</script>

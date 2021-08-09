<template>
  <a class="button facebook" @click="logInWithFacebook">
    <span class="icon mr-2">
      <i class="fab fa-facebook-f fa-lg"></i>
    </span>
    <span>Facebook</span>
  </a>
</template>

<script>
import FACEBOOK_APP_ID from "@/services/config"
export default {
  name: "FacebookLoginButton",
  created() {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: "v8.0",
      });
    };
  },
  methods: {
    logInWithFacebook() {
      window.FB.login(
        function (resp) {
          console.log(resp);
        },
        { scope: "public_profile,email" }
      );
    },
  },
};
</script>

<style scoped>
.facebook {
  height: 45px;
  width: 120px;
  color: white !important;
  background-color: #3b5998;
}
</style>
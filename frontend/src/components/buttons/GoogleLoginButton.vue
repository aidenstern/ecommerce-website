<template>
  <a class="button google" @click="logInWithFacebook">
    <span class="icon mr-2">
      <i class="fab fa-google fa-lg"></i>
    </span>
    <span>Google</span>
  </a>
</template>

<script>
export default {
  name: "GoogleLoginButton",
  mounted() {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1568721949976486",
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
.google {
  height: 45px;
  width: 120px;
  color: white !important;
  background-color: #db4437;
}
</style>
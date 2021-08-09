<template>
  <form @submit.prevent="submit">
    <div class="field">
      <label class="label">Email</label>
      <p class="control has-icons-right">
        <input class="input" type="email" v-model="user.username" />
        <span class="icon is-small is-right">
          <i class="fas fa-envelope"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <p class="control has-icons-right">
        <input class="input" type="password" v-model="user.password" />
        <span class="icon is-small is-right">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <span class="tag is-light" v-if="alert.message" :class="`${alert.type}`">{{alert.message}}</span>
    </div>

    <div class="field">
      <a class="is-size-7">Forgot your password?</a>
    </div>
    <div class="field">
      <button type="submit" class="button is-fullwidth">Log In</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState({
      alert: (state) => state.alert,
    }),
  },
  methods: {
    ...mapActions("account", ["login"]),
    ...mapActions({
      clearAlert: "alert/clear",
    }),
    submit() {
      if (this.user) {
        this.login(this.user);
      }
    },
  },
  watch: {
    $route(to, from) {  
      if (to !== from) {
        this.clearAlert();
      }
    },
  },
};
</script>

<style scoped>
div.field button {
  background-color: lightgrey !important;
}
</style>

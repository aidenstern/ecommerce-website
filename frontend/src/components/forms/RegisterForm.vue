<template>
  <form @submit.prevent="submit">
    <div class="field">
      <label class="label">Email</label>
      <p class="control has-icons-right">
        <input class="input" type="email" v-model="user.username" />
        <span class="icon is-small is-right">
          <i class="fas fa-user"></i>
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
      <label class="label">Confirm password</label>
      <p class="control has-icons-right">
        <input class="input" type="password" v-model="user.confirm_password" />
        <span class="icon is-small is-right">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <label class="label">Date of birth</label>
    <div class="field">
      <div class="field-body">
        <div class="field">
          <div class="select">
            <select>
              <option selected>Month</option>
              <option>August</option>
              <option>September</option>
            </select>
          </div>
        </div>
        <div class="field">
          <input class="input" type="text" placeholder="Day" />
        </div>
        <div class="field">
          <input class="input" type="text" placeholder="Year" />
        </div>
      </div>
    </div>

    <div class="field mt-4 mb-4">
      <p class="is-size-7 has-text-centered">
        By clicking
        <strong>Sign Up</strong>, you are indicating that you have
        <br />read and acknowledge the
        <a>Terms of Service</a> and
        <a>Privacy Notice</a>.
      </p>
    </div>

    <div class="field">
      <button type="submit" class="button is-fullwidth">Sign Up</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RegisterForm",
  data() {
    return {
      user: {
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  methods: {
    ...mapActions("account", ["register"]),
    submit() {
      if (this.user) {
        this.register(this.user);
      }
    },
  },
};
</script>

<style>
div.field button {
  background-color: lightgrey !important;
}
</style>
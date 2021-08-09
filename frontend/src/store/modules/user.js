import { userService } from "@/services";

// state
const user = JSON.parse(localStorage.getItem("user"));
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

// mutations
const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  loginSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  registerRequest(state, user) {
    state.status = { registering: true };
    state.user = user;
  },
  registerSuccess(state, user) {
    state.status = { registered: true };
    state.user = user;
  },
  registerFailure(state) {
    state.status = {};
    state.user = null;
  },
};

// actions
const actions = {
  login({ dispatch, commit }, user) {
    commit("loginRequest", user);
    userService.login(user).then(
      (data) => {
        commit("loginSuccess", data);
        dispatch("alert/clear", {}, { root: true });
      },
      (error) => {
        commit("loginFailure", error);
        dispatch("alert/error", error, { root: true });
      }
    );
  },
  logout({ commit }) {
    userService.logout();
    commit("logout");
  },
  register({ commit }, user) {
    commit("registerRequest", user);
    userService.register(user);
  },
};
// getters
const getters = {
  getUser(state) {
    return state.user;
  },
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

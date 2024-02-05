import AuthService from "@/service/auth";

const state = {
  isLoading: false,
  user: null,
  error: null,
};

const mutations = {
  registerStart(state) {
    state.isLoading = true;
    state.user = null;
    state.error = null;
  },
  registerSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
  },
  registerFailure(state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("registerStart");
      AuthService.register(user)
        .then((response) => {
          context.commit("registerSuccess", response.data);
          resolve(response.data);
        })
        .catch((error) => {
          context.commit("registerFailure", error.response.statusText);
          reject(error.response.statusText);
        });
    });
  },
};
export default {
  state,
  mutations,
  actions,
};

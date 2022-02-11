import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: null,
    };
  },
  mutations: {
    SET_NAME(state, value) {
      state.name = value;
    },
  },
  actions: {
    setName({ commit }, value) {
      commit("SET_NAME", value);
    },
  },
});

export default store;

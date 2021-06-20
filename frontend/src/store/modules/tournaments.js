import AxiosApi from "../../AxiosApi";
export default {
  namespaced: true,
  state() {
    return {
      tournamentsData: {},
    };
  },
  mutations: {},
  actions: {
    async login(payload) {
      await AxiosApi.login({
        email: payload.email,
        password: payload.password,
      });
    },
    signup(context, payload) {},
  },
  getters: {},
};

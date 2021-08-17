export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      name: null,
      balance: null,
      token: null,
      role: null,
      expires: null,
      email: null,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.name = payload.name;
      state.balance = payload.balance;
      state.userId = payload.userId;
      state.role = payload.role;
      state.expires = payload.expires;
      state.email = payload.email;
    },
  },
  actions: {
    login(context, payload) {
      return context.dispatch("auth", {
        ...payload,
        mode: "login",
      });
    },
    signup(context, payload) {
      return context.dispatch("auth", {
        ...payload,
        mode: "signup",
      });
    },
    autoLogin(context) {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const role = localStorage.getItem("role");
      const email = localStorage.getItem("email");
      const expires = localStorage.getItem("expires");
      const name = localStorage.getItem("name");
      const balance = localStorage.getItem("balance");

      if (token && userId) {
        context.commit("setUser", {
          token,
          userId,
          role,
          email,
          expires,
          name,
          balance,
        });
      }
    },
    logout(context) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("role");
      localStorage.removeItem("email");
      localStorage.removeItem("expires");
      localStorage.removeItem("name");
      localStorage.removeItem("balance");

      context.commit("setUser", {
        token: null,
        userId: null,
        role: null,
        email: null,
        expires: null,
        name: null,
        balance: null,
      });
    },
    async auth(context, payload) {
      const mode = payload.mode;
      let url = "/api/v1/auth/login";
      if (mode === "signup") {
        url = "/api/v1/auth/register";
      }
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to authenticate"
        );
        throw error;
      }

      localStorage.setItem("token", responseData.token);
      localStorage.setItem("userId", responseData.id);
      localStorage.setItem("role", responseData.role);
      localStorage.setItem("email", responseData.email);
      localStorage.setItem("expires", responseData.expires);
      localStorage.setItem("name", responseData.name);
      localStorage.setItem("balance", responseData.balance);

      context.commit("setUser", {
        token: responseData.token,
        userId: responseData.id,
        role: responseData.role,
        email: responseData.email,
        expires: responseData.expires,
        name: responseData.name,
        balance: responseData.balance,
      });
    },
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return `Bearer ${state.token}`;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
    isAdmin(state) {
      if (state.role === "admin") {
        return true;
      }
    },
    isPublisher(state) {
      if (state.role === "publisher") {
        return true;
      }
    },
    balance(state) {
      return state.balance;
    },
  },
};

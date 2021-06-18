export default {
  namespaced: true,
  state() {
    return {
      tournamentsData: {},
    };
  },
  mutations: {},
  actions: {
    getTournaments() {
      fetch("http://localhost:5000/api/v1/tournaments", {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  getters: {
    tournamentsAll(state) {
      return state.tournamentsData;
    },
  },
};

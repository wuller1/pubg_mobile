import axios from "axios";

const url = "/api/v1/tournaments/";

class AxiosApi {
  // Get all tournaments
  static getTournaments() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  // Get single tournament
  static getTournament(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}${id}`);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  // Create Tournament
  static createTournament(data, token) {
    return axios({
      method: "POST",
      url: "/api/v1/tournaments",
      data: data,
      headers: {
        Authorization: token,
      },
    });
  }

  static updateTournament(data, token, id) {
    return axios({
      method: "PUT",
      url: `/api/v1/tournaments/${id}`,
      data: data,
      headers: {
        Authorization: token,
      },
    });
  }

  // Delete Tournament
  static deleteTournament(id, token) {
    return axios({
      method: "DELETE",
      url: `/api/v1/tournaments/${id}`,
      headers: {
        Authorization: token,
      },
    });
  }

  // login user
  static login(data) {
    return axios({
      method: "POST",
      url: "/api/v1/auth/login",
      data: data,
    });
  }
}

export default AxiosApi;

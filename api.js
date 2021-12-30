const axios = require("axios").default;

module.exports = class {
  constructor(id, token) {
    this.token = token;
    this.id = id;
  }

  setID(id) {
    this.id = id;
    return this;
  }

  setToken(token) {
    this.token = token;
    return this;
  }

  async getUser(secret) {
    let returnValue;
    await axios
      .post("https://auth.redcrafter07.de/api/getToken", {
        headers: {
          Authorization: this.token,
          id: this.id,
          token: secret,
        },
      })
      .then((res) => (returnValue = res.data))
      .catch((e) => {
        console.error(
          `[RE-AUTH-API]: API Error: ${e.response.status} | ${e.response.statusText} | ${e.response.data}`
        );
        throw new Error(
          `[RE-AUTH-API]: API Error: ${e.response.status} | ${e.response.statusText} | ${e.response.data}`
        );
      }
      );

    return returnValue;
  }
};
const axios = require("axios");

export const tournamentService = {
  getTournament
};

async function getTournament() {
  let response = await axios.get("http://localhost:3001/tournament/");
  if (response.status === 200) {
    return response.data;
  }
  return "";
}

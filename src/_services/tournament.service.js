const axios = require("axios");

export const tournamentService = {
  getTournaments,
  getTournament
};

async function getTournaments() {
  let response = await axios.get("http://localhost:3001/tournament/");

  if (response.status === 200) {
    return response.data;
  }
  return "";
}
async function getTournament(id) {
  let response = await axios.get("http://localhost:3001/tournament/" + id);
  console.log("aaaaaaaaaaaaaaaa" + response.data);
  if (response.status === 200) {
    return response.data;
  }
  return "";
}

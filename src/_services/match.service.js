const axios = require("axios");

export const matchService = {
  getMatchbyTeam
};

async function getMatchbyTeam(teamId) {
  let response = await axios.get(
    "http://localhost:3001/match/getbyteam/" + teamId
  );
  if (response.status === 200) {
    return response.data;
  }
  return "";
}

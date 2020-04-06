const axios = require("axios");

export const teamService = {
  getTeamByTeamLeader,
  getAllteams
};

async function getTeamByTeamLeader(userId) {
  let response = await axios.get("http://localhost:3001/team/find/" + userId);
  if (response.status === 200) {
    return response.data;
  }
  return "";
}

async function getAllteams() {
  let response = await axios.get("http://localhost:3001/team/getall");
  if (response.status === 200) {
    return response.data;
  }
  return "";
}

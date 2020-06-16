const axios = require("axios");

export const tournamentService = {
  getTournaments,
  getTournament,
  addTournament,
  participate,
  getMyTournaments,
  updateTournament,
  createFirstMatchsTournament,
  createNextMatchsTournament,
  checkIn,
  matchSimulation,
};

async function getTournaments() {
  let response = await axios.get("http://localhost:3001/tournament/");

  if (response.status === 200) {
    console.log("response" + response.data);
    return response.data;
  }
  return "";
}

async function getMyTournaments() {
  const parsedUser = JSON.parse(localStorage.getItem("user"));
  const token = parsedUser.token;

  console.log(parsedUser.token);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config);
  let response = await axios.get(
    "http://localhost:3001/tournament/my/Tournament",
    config
  );

  if (response.status === 200) {
    return response.data;
  }
  return "";
}
async function getTournament(id) {
  let response = await axios.get("http://localhost:3001/tournament/" + id);

  if (response.status === 200) {
    return response.data;
  }
  return "";
}
async function participate(idTeam, idTournament) {
  const parsedUser = JSON.parse(localStorage.getItem("user"));
  const token = parsedUser.token;
  console.log(token);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config);
  let response = await axios.get(
    "http://localhost:3001/tournament/" + idTeam + "/" + idTournament,
    config
  );
  if (response.status === 200) {
    return response.data;
  }
  return "error";
}
async function addTournament(tournament) {
  console.log(tournament);
  let response = await axios.post(
    "http://localhost:3001/tournament",
    tournament
  );
  if (response.status === 200) {
    return response.data;
  }
}
async function updateTournament(tournamentId, tournament) {
  let response = await axios.put(
    "http://localhost:3001/tournament/updateTournamen/" + tournamentId,
    tournament
  );
  if (response.status === 200) {
    return response.data;
  }
}
async function createFirstMatchsTournament(tournamentId) {
  let response = await axios.patch(
    "http://localhost:3001/tournament/" + tournamentId
  );
  if (response.status === 200) {
    return response.data;
  }
}
async function createNextMatchsTournament(tournamentId) {
  let response = await axios.patch(
    "http://localhost:3001/tournament/next/" + tournamentId
  );
  if (response.status === 200) {
    return response.data;
  }
}
async function checkIn(matchId, teamId) {
  let response = await axios.put(
    "http://localhost:3001/match/checkIn/" + matchId + "/" + teamId
  );
  if (response.status === 200) {
    return response.data;
  }
}
async function matchSimulation(tournamentId) {
  let response = await axios.put(
    "http://localhost:3001/match/matchTournamentSimulation/" + tournamentId
  );
  if (response.status === 200) {
    return response.data;
  }
}

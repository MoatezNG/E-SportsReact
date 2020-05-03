const axios = require("axios");

export const notificationService = {
  getNotification,
  challengeTeam,
  acceptChallenge,
  getAcceptedNotif,
  getUndreadedNotif,
  readNotification,
};

async function getNotification(userId) {
  let response = await axios.get(
    "http://localhost:3001/notification/get/" + userId
  );
  if (response.status === 200) {
    return response.data;
  }
  return "";
}
async function readNotification(userId) {
  let response = await axios.get(
    "http://localhost:3001/notification/read/" + userId
  );
  if (response.status === 200) {
    return response.data;
  }
  return "";
}
async function getAcceptedNotif(userId) {
  let response = await axios.get(
    "http://localhost:3001/notification/getaccepted/" + userId
  );
  if (response.status === 200) {
    return response.data;
  }
  return "";
}
async function getUndreadedNotif(userId) {
  let response = await axios.get(
    "http://localhost:3001/notification/unreaded/" + userId
  );
  if (response.status === 200) {
    return response.data;
  }
  return "";
}
async function acceptChallenge(notifId, invitingL, recevingL) {
  let response = await axios.patch(
    "http://localhost:3001/notification/accept/" +
      notifId +
      "/" +
      invitingL +
      "/" +
      recevingL
  );
  if (response.status === 200) {
    return response.data;
  }
  return "";
}
function challengeTeam(invitingL, recevingL, DateGame) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ DateGame }),
  };

  return fetch(
    "http://localhost:3001/notification/challenge/" +
      invitingL +
      "/" +
      recevingL,
    requestOptions
  )
    .then(handleResponse)
    .then((notif) => {
      return notif;
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

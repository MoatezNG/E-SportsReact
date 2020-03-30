const axios = require("axios");

export const notificationService = {
  getNotification
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

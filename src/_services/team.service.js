import { authHeader } from '../_helpers';

const axios = require("axios");

export const teamService = {
  getTeamByTeamLeader,
  getAllteams,
  addteam,
  getMyTeam,
  deleteMyTeam
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

async function getMyTeam() {
  const requestOptions = {
    headers: authHeader()
};
  return await axios.get("http://localhost:3001/team/getmyteam",requestOptions);
 
}

async function deleteMyTeam() {
  const requestOptions = {
    headers: authHeader()
};
  return await axios.delete("http://localhost:3001/team/delete",requestOptions);
 
}

async function addteam(team) {
  const requestOptions = {
    headers: authHeader()
};
  const formData = new FormData()
  Object.entries(team).forEach(obj => {
    const [key, value] = obj
    formData.append(key, value)
})
return axios.post('http://localhost:3001/team/create', formData,requestOptions)
        //.then(handleResponse)
        .then(team =>{
           
            return team;
        })

  
}

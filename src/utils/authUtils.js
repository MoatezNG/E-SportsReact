import jwtDecode from "jwt-decode";

export const isUserAuthenticated = () => {
  const user = localStorage.getItem("user");
  if (!user) return false;
  const parsedUser = JSON.parse(localStorage.getItem("user"));

  const { token } = parsedUser;
  if (!token) {
    return false;
  }
  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    localStorage.removeItem("user");
    return false;
  } else {
    return true;
  }
};

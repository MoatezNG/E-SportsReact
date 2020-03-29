import jwtDecode from 'jwt-decode';

export const isUserAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) return false
    const { token } = user
    if (!token) {
        return false;
    }
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        localStorage.removeItem("user")
        return false;
    } else {
        return true;
    }
};
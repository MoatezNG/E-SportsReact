
import { authHeader } from '../_helpers';
import axios from 'axios'

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();

            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch('http://localhost:3001/users/login', requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    localStorage.removeItem('user');
    return fetch('http://localhost:3001/users/me/logout', requestOptions).then(handleResponse);
    // remove user from local storage to log user out

}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://localhost:3001/users/me', requestOptions).then(handleResponse);
}

function register(user) {
    const formData = new FormData()
    Object.entries(user).forEach(obj => {
        const [key, value] = obj
        formData.append(key, value)
    })

    // form-data bugs when using fetch
    return axios.post('http://localhost:3001/users/aa', formData)
        //.then(handleResponse)
        .then(user => {
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        })
}

function updateUser(user) {
    const formData = new FormData()
    Object.entries(user).forEach(obj => {
        const [key, value] = obj
        formData.append(key, value)
    })
    const headers = {
        headers: {
            'Authorization': authHeader().Authorization
        }
    }
    // form-data bugs when using fetch
    return axios.put('http://localhost:3001/users/me/updateprofile', formData, headers)
        //.then(handleResponse)
        .then(user => {
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        })
}



export const userService = {
    login,
    logout,
    getAll,
    register,
    updateUser
};
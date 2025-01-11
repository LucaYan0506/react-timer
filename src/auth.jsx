import { BACKEND_URL, token } from './globalVar';

let username = null;

async function isAuthenticated() {
    try {
        const response = await fetch(`${BACKEND_URL}/session/`, {
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.isAuthenticated; 
    } catch (err) {
        console.error('Error fetching authentication status:', err);
        return false;  
    }
}

function login (_username, _password, errorMessageRef){
    function isResponseOk(response) {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else {
        throw Error(response.statusText);
    }
    }
    console.log(token);
    
    fetch(`${BACKEND_URL}/login/`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": token,
    },
    credentials: "include",
    body: JSON.stringify({ username: _username, password: _password }),
    })
    .then((response) => isResponseOk(response))
    .then((data) => {
        username = _username
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
        errorMessageRef.current.innerHTML = "Wrong username or password";
    });
}

async function logout () {
    // try {
    //     const data = await  fetch(`${BACKEND_URL}/logout/`, {
    //         credentials: "include",
    //     }).then(response => response)
    //     .then(data => data.json());
    //     console.log(data)
    // } catch (err) {
    //     console.error('Error fetching token:', err);
    // }
}


export { login, isAuthenticated, logout, username };

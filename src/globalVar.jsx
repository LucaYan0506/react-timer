const BACKEND_URL = 'http://127.0.0.1:8000';
let token = null;

async function updateToken() {
    try {
        const res = await fetch(`${BACKEND_URL}/getCRSF/`, {
            credentials: "include",
        });
        token = res.headers.get("X-CSRFToken");
        return token;
    } catch (err) {
        console.error('Error fetching token:', err);
    }
}

export { BACKEND_URL, updateToken, token };

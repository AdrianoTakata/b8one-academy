import fetchJson from "./fetchJson.js";

function requestServe(user) {
    return fetchJson(`https://test-final.b8one.academy/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });
}

export default requestServe;
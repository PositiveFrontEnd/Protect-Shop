import React from "react";

const sendRequest = async (url, method = "GET", options) => {
    const response = await fetch(url, { method: method, ...options});
    
    if (!response.ok) {

        throw new Error(response.status)

    }

    if (method === "DELETE") {
        return response;
    }

    return await response.json();
}


export default sendRequest
import  axios from "axios";


const api = axios.create({
    timeout: 10000,
    baseURL: "http://localhost:80",
    headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: localStorage.token
    },
});

api.interceptors.request.use((request) => {
    console.log("Starting Request", request);
    return request;
});

api.interceptors.response.use((response) => {
    console.log("Response:", response);
    return response;
});

export default api;

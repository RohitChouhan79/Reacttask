import axios from "axios";

const instance = axios.create({
    baseURL:
        "https://reqres.in/api",
    withCredentials: true,
});

export default instance;
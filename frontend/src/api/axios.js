import axios from "axios";

const BASE_URL = "http://localhost:80";
axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: BASE_URL,
});

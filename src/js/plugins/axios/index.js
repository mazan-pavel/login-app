import axios from "axios";
import API_ENV from "../../config/api.config";
import intercepters from "./intercepters";

const instance = axios.create({
  baseURL: API_ENV.apiUrl,
  headers: { "Content-type": "application/JSON" },
});

intercepters(instance);
export default instance;

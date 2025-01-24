import axios from "axios";
import { COIN_GEKO_API_URL } from "./Constants";

const axiosInstance = axios.create({
    baseURL: COIN_GEKO_API_URL,

});
export default axiosInstance;
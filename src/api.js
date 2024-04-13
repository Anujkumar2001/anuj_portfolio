import axios from "axios";
import { apiUrl } from "./url.js";
export const getUserData = async () => {
  try {
    const response = await axios.get(`${apiUrl.userBaseUrl}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

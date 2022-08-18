//import Axios from "axios";
import Axios from "../plugins/axios";

/**
 * Function login. Make login from API
 * @param {String} email
 * @param {String} password
 */

export async function login(email, password) {
  try {
    const response = await Axios.post(
      `/auth/login`,
      JSON.stringify({ email, password })
    );
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

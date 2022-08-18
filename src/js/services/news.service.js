import Axios from "../plugins/axios";

/**
 * Function login. Make login from API
 * @param {String} email
 * @param {String} password
 */

export async function getNews() {
  try {
    const response = await Axios.get(`/news`);
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

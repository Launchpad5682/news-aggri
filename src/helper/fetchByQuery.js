import axios from "axios";
import { API_KEY, API_URI } from "../constants";

export const fetchByQuery = async (query) => {
  try {
    const response = await axios.get(`${API_URI}${query}apiKey=${API_KEY}`);

    const { data, status } = response;

    if (status === 200) {
      return { data };
    }
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

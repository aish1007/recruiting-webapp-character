import axios from "axios";
import { BACK_END_URL } from "../consts";
export const saveCharacters = async (characters) => {
  try {
    const response = await axios.post(`${BACK_END_URL}/character`, {
      characters,
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const loadCharacters = async () => {
  try {
    const response = await axios.get(`${BACK_END_URL}/character`);
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};

import api from "./apiConfig";

export const getCoders = async () => {
  try {
    const resp = await api.get("/coders");
    return resp.data.coders;
  } catch (error) {
    throw error;
  }
};

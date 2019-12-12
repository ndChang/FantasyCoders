import api from "./apiConfig";

export const getCoderByUserId = async id => {
  try {
    const resp = await api.get(`/coders/${id}`);
    return resp.data.import;
  } catch (error) {
    throw error;
  }
};

export const getRosterFromUser = async () => {
  try {
    const resp = await api.get("/items");
    return resp.data.items;
  } catch (error) {
    throw error;
  }
};

export const getCoders = async () => {
  try {
    const resp = await api.get("/coders");
    return resp.data.coders;
  } catch (error) {
    throw error;
  }
};

export const updateCoder = async (coderId, userId) => {
  try {
    const resp = await api.put(`/coders/${coderId}`, userId);
    return resp.data.coders;
  } catch (error) {
    throw error;
  }
};

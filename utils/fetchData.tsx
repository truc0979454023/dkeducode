import axios from "./axios";

export const getDataAPI = async (url: string, token?: string) => {
  const res = await axios.get(`/${url}`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return res;
};


export const getDataAPIParam = async (url: string, param?: any, token?: string) => {
  const res = await axios.get(`/${url}`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    params: param
  });
  return res;
};


export const postDataAPI = async (url: string, data: any, token?: string) => {
  const res = await axios.post(`/${url}`, data, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return res;
};

export const putDataAPI = async (url: string, data: any, token?: string) => {
  const res = await axios.put(`/${url}`, data, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return res;
};

export const patchDataAPI = async (url: string, data: any, token?: string) => {
  const res = await axios.patch(`/${url}`, data, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return res;
};

export const deleteDataAPI = async (url: string, token?: string) => {
  const res = await axios.delete(`/${url}`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return res;
};

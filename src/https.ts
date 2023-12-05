import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "https://wayfair.p.rapidapi.com",
  timeout: 10000,
  headers: {
    "X-RapidAPI-Key": "b9437445bdmsh2e3bd45f4e4a434p1fd62ejsnd50113313b5a",
    "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
  },
});

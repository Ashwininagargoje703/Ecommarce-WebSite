import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "https://wayfair.p.rapidapi.com",
  timeout: 10000,
  headers: {
    "X-RapidAPI-Key": "4775374d44msh264bcf28aa26175p1c4db3jsn8aa768dde036",
    "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
  },
});

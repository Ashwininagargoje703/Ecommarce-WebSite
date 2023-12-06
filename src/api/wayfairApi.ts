import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "https://wayfair.p.rapidapi.com",
  timeout: 10000,
  headers: {
    "X-RapidAPI-Key": "2f762a64bbmsh26f7724880a6963p1868ccjsn9c58aa1c53c7",
    "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
  },
});

import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "https://wayfair.p.rapidapi.com",
  timeout: 10000,
  headers: {
    "X-RapidAPI-Key": "5d87d63f58msh59e51e7e9de2c59p13c1aejsne96bc259808e",
    "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
  },
});

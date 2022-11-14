import axios from "axios";

export const api = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
  timeout: 5000,
});

export const apiTimeout = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout",
});

export const apiInternalError = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError",
});

import axios, { AxiosInstance } from 'axios';

export const Http: AxiosInstance = (() => axios.create({
  baseURL: 'http://localhost:4000/api/',
  timeout: 1000
}))();

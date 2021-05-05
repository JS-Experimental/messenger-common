import axios, { AxiosInstance } from 'axios';

export const Http: AxiosInstance = (() => axios.create({
  baseURL: 'http://localhost/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
}))();

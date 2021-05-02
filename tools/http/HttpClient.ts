import axios, { AxiosInstance } from 'axios';

export const Http: AxiosInstance = (() => axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
}))();

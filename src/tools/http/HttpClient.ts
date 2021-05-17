import axios, { AxiosInstance } from 'axios';

export const HTTP = (function () {
  let $client = null;

  return {
    createClient(url:string): AxiosInstance {
      console.log('CREATE HTTP CLIENT');
      $client = axios.create({
        baseURL: url || 'http://localhost:4000/api/',
        timeout: 1000
      });

      return $client;
    },
    client() {
      console.log('GET HTTP CLIENT');
      return $client;
    }
  };
}());

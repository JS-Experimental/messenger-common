import axios, { AxiosInstance } from 'axios';

export const HTTP = (function () {
  let $client = null;

  return {
    createClient(url:string): AxiosInstance {

      if($client) {
        return $client
      }

      $client = axios.create({
        baseURL: url || 'http://localhost:4000/api/',
        timeout: 1000
      });

      return $client;
    },
    client() {
      return $client;
    }
  };
}());

import axios, { AxiosRequestConfig } from "axios";

interface FetchGameResponse<T> {
  status: number;
  data: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://valorant-api.com/v1",
});

class APIclient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchGameResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
export default APIclient;

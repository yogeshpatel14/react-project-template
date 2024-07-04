import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { baseUrl } from "./url-schemas";

const httpConfig: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

const handleError = (error: AxiosError<any>): Promise<AxiosError> => {
  //   const { response } = error;
  return Promise.reject(error);
};

httpConfig.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

httpConfig.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError<any>) => handleError(error)
);

export default httpConfig;

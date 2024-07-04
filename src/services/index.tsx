import { utilPromiseCallback } from "utils";
import httpConfig from "./httpClientConfig";

const addAuthorizationHeader = (isToken: boolean) => {
  if (isToken) {
    httpConfig.interceptors.request.use((config) => {
      config.headers.Authorization = "token_1234";
      return config;
    });
  }
};

const HttpGetMethod = (
  endpoint: string,
  params: any = {},
  isToken: boolean = false
) => {
  addAuthorizationHeader(isToken);
  return utilPromiseCallback(httpConfig.get(endpoint, { params }));
};
const HttpPostMethod = (
  endpoint: string,
  reqBody: any = null,
  isToken: boolean = false
) => {
  addAuthorizationHeader(isToken);
  utilPromiseCallback(httpConfig.post(endpoint, { data: reqBody }));
};
const HttpPutMethod = (
  endpoint: string,
  reqBody: any = null,
  isToken: boolean = false
) => {
  addAuthorizationHeader(isToken);
  utilPromiseCallback(httpConfig.put(endpoint, { data: reqBody }));
};

export const httpClientServices = {
  HttpGetMethod,
  HttpPostMethod,
  HttpPutMethod,
};

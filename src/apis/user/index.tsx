import { httpClientServices } from "services";
import { endpoint } from "services/url-schemas";
import { utilPromiseCallback } from "utils";

const apiCallGetUserList = (params: any = {}, isToken: boolean = false) => {
  return utilPromiseCallback(
    httpClientServices.HttpGetMethod(endpoint.user.userList, params, isToken)
  )
    .then((_res: any) => {
      return Promise.resolve(_res);
    })
    .catch((_err: any) => {
      return Promise.reject(_err);
    });
};

export const ServiceUser = {
  apiCallGetUserList,
};

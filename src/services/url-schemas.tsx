import { isProduction } from "utils";

export const baseUrl = isProduction
  ? "https://reqres.in/api"
  : "https://reqres.in/api";

const user = {
  userList: "/users",
};

export const endpoint = {
  user,
};

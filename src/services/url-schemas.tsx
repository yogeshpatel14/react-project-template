import { isProduction } from "utils";

export const baseUrl = isProduction ? "your_base_url_api" : "your_base_url_api";

const user = {
  userList: "/users",
};

export const endpoint = {
  user,
};

import Login from "screen/auth/login";
import ProtectRoute from "./check-authenticate.route";
import Dashboard from "screen/dashboard";
import { listOfPathName } from "./path-name";

export const listOfElement = [
  {
    path: listOfPathName.home,
    element: <Login />,
  },
  {
    path: listOfPathName.dashboard,
    element: <ProtectRoute childElement={<Dashboard />} />,
  },
];

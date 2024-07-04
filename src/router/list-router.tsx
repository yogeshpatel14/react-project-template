import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page.route";
import { listOfElement } from "./list-elements";

const createRoutesList = listOfElement.map((item: any) => {
  item.errorElement = <ErrorPage />;
  item.index = true;
  return item;
});

const ListRouter = createBrowserRouter(createRoutesList);

export default ListRouter;

import { RouterProvider } from "react-router-dom";
import ListRouter from "./list-router";
import { Spinner } from "components";

function RootRouter() {
  return (
    <RouterProvider
      router={ListRouter}
      fallbackElement={<Spinner />}
      future={{ v7_startTransition: true }}
    />
  );
}

export default RootRouter;

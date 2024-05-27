import { createBrowserRouter } from "react-router-dom";
import mainRoute from "./mainroute";

const initRoutes = () => {
  const routes: object[] = [];

  mainRoute(routes);

  return routes;
};

const appRoutes = initRoutes();

const router = createBrowserRouter(appRoutes);

export default router;

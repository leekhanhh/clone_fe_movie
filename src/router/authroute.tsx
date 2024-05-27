import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../pages/ErrorPage";

export default function init(routes: object[]) {
  const route = {
    path: "/",
    element: AuthLayout,
    errorElement: ErrorPage,
    children: [],
  };
  // push route
  routes.push(route);
}

import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import MovieDetailPage from "../pages/MovieDetailPage";
import MoviePage from "../pages/MoviePage";
export default function init(routes: object[]) {
  const route = {
    path: "/",
    exact: true,
    element: <MainLayout />,
    errorComponent: ErrorPage,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/movies",
        exact: true,
        element: <MoviePage />,
      },
      {
        path: "/movie/:id",
        exact: true,
        element: <MovieDetailPage />,
      },
    ],
  };
  // push route
  routes.push(route);
}

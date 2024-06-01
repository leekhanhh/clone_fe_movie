import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import MovieDetailPage from "../pages/MovieDetailPage";
import MoviePage from "../pages/MoviePage";
import ProfilePage from "../pages/ProfilePage";
export default function init(routes: object[]) {
  const route = {
    path: "/",
    exact: true,
    element: <MainLayout />,
    errorComponent: ErrorPage,
    children: [
      {
        path: "home",
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
      {
        path: "/profile/:id",
        element: <ProfilePage />,
      },
    ],
  };
  // push route
  routes.push(route);
}

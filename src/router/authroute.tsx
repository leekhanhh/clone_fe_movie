import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../pages/ErrorPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

export default function init(routes: object[]) {
  const route = {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        index: true,
        // path: "login",
        element: <SignInPage />,
      },
    ],
  };
  // push route
  routes.push(route);
}

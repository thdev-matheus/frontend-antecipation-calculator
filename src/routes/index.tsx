import { createBrowserRouter } from "react-router-dom";
import { Error } from "../pages/ErrorPage";
import { Main } from "../pages/MainPage";
import { NotFound } from "../pages/NotFoundPage";
import { Welcome } from "../pages/WelcomePage";

export const router = createBrowserRouter([
  {
    element: <Welcome />,
    path: "/",
    errorElement: <NotFound />,
  },
  {
    element: <Main />,
    path: "/main",
  },
  {
    element: <Error />,
    path: "/error",
  },
]);

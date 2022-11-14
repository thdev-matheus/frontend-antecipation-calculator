import { createBrowserRouter } from "react-router-dom";
import { Error } from "../pages/ErrorPage";
import { Main } from "../pages/MainPage";
import { NotFound } from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <Main />,
    path: "/",
    errorElement: <NotFound />,
  },
  {
    element: <Error />,
    path: "/error",
  },
]);

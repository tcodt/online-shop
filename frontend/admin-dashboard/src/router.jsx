import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login";
import Register from "./features/identity/components/register";
import NotFoundPage from "./pages/error-page/not-found-page";
import IdentityLayout from "./layouts/identity-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IdentityLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;

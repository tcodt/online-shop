import { createBrowserRouter } from "react-router-dom";
import IdentityLayout from "./layouts/identity-layout";
import Login from "./features/identity/components/login";
import Register from "./features/identity/components/register";
import NotFoundPage from "./pages/error-page/not-found-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;

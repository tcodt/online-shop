import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/error-page/not-found-page";
import IdentityLayout from "./layouts/identity-layout";
import AdminDashboard from "./layouts/admin-dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IdentityLayout />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/error-page/not-found-page";
import IdentityLayout from "./layouts/identity-layout";
import AdminDashboard from "./layouts/admin-dashboard";
import Users from "./pages/users/users";
import Category from "./pages/category/category";
import Product from "./pages/product/product";
import SingleProduct from "./pages/single-product/single-product";
import Upload from "./pages/upload/upload";
import Review from "./pages/review/review";
import Profile from "./pages/profile/profile";
import Cart from "./pages/cart/cart";
import Off from "./pages/off/off";
import Message from "./pages/message/message";
import CreateProduct from "./pages/create-product/create-product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IdentityLayout />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      { path: "category", element: <Category /> },
      { path: "product", element: <Product /> },
      { path: "product/edit-product/:id", element: <SingleProduct /> },
      { path: "upload", element: <Upload /> },
      { path: "review", element: <Review /> },
      { path: "profile", element: <Profile /> },
      { path: "cart", element: <Cart /> },
      { path: "Off", element: <Off /> },
      { path: "message", element: <Message /> },
      { path: "create-product", element: <CreateProduct /> },
      { path: "users", element: <Users /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;

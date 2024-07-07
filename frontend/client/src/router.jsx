import { createBrowserRouter } from "react-router-dom";
import Index from "./layout/Index/Index";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

export default router;

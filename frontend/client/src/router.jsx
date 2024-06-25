import { createBrowserRouter } from "react-router-dom";
import Index from "./layout/Index/Index";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

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
    path: "/about",
    element: <About />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index/Index";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Category from "./pages/Category/Category";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import NotFound from "./pages/NotFound/NotFound";
import Courses from "./pages/Courses/Courses";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyCourses from "./pages/Dashboard/MyCourses";
import Tickets from "./pages/Dashboard/Tickets";
import EditAccount from "./pages/Dashboard/EditAccount";
import MyAccount from "./pages/Dashboard/MyAccount";
import NewTicket from "./pages/Dashboard/NewTicket";

const routes = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category-info/:categoryName", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/courses", element: <Courses /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "my-account",
        element: <MyAccount />,
      },
      {
        path: "courses",
        element: <MyCourses />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "edit-account",
        element: <EditAccount />,
      },
      {
        path: "new_ticket",
        element: <NewTicket />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "./ErrorPage";
import Dashboard from "../Pages/Dashboard/dashboard";
// import Dashboard from "../Pages/Dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      }
      // {
      //   path: "/blog",
      //   element: <Blog></Blog>
      // },
      // {
      //   path: "/contact",
      //   element: <About></About>,
      // },
      // {
      //   path: "/blog/:id", 
      //   element: <FeaturedCardDetails></FeaturedCardDetails>,
      // },
      // {
      //   path: "/enroll", 
      //   element: <Enroll></Enroll>
      // }
      
    ],
  },
]);
export default routes;

import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "./ErrorPage";
import Dashboard from "../Pages/Dashboard"; 
import IdeaChat from "../Pages/IdeaChat";   

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,           
        element: <Home />,
      },
      {
        path: "dashboard",        
        element: <Dashboard />,
      },
      {
        path: "ideas/:id/chat",   
        element: <IdeaChat />,
      },
    ],
  },
]);

export default routes;

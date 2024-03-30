import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Error from "../pages/Error";
import News from "../pages/News";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

export default router;

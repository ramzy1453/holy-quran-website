import { useLayoutEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Home from "./pages";
import Sourate from "./pages/[sourateID]";
import About from "./pages/about";
import Feedback from "./pages/feedback";
import Reciters from "./pages/reciters/";
import ReciterPage from "./pages/reciters/[reciter]";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/:sourateID",
      element: <Sourate />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/feedback",
      element: <Feedback />,
    },
    {
      path: "/reciters",
      element: <Reciters />,
    },
    {
      path: "/reciters/:reciterIdentifier",
      element: <ReciterPage />,
    },
  ]);

  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return routes;
}

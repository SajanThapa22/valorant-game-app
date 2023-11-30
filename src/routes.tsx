import { createBrowserRouter } from "react-router-dom";
import CharactersGrid from "./components/CharactersGrid";
import WeaponsGrid from "./components/WeaponsGrid";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CharactersGrid />,
      },
      {
        path: "weapons",
        element: <WeaponsGrid />,
      },
    ],
  },
]);
export default router;

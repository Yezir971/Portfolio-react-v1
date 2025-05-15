import { Home } from "@/pages";
import Error from "./pages/error";
import Politique from "./pages/politique";
import Mention from "./pages/mention";
import Login from "./pages/Login";
import SignUp from "./pages/signUp";
import Description from "./pages/Description";

export const routes = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    name:"errur_404",
    path:"*",
    element: <Error />,
  },
  {
    name:"Politique",
    path:"/politique_confidentialite",
    element: <Politique />,
  },
  {
    name:"Mentions légales",
    path:"/mentions_legales",
    element: <Mention />,
  },
  {
    name:"login",
    path:"/kingdom",
    element: <Login />,
  },
  {
    name:"signUp",
    path:"/hearts",
    element: <SignUp />,
  },
  {
    name:"description",
    path:"/description/:id",
    element: <Description />,
  },
];

export default routes;

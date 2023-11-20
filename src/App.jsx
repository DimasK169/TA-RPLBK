import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { GamesNewsProvider } from "./context/GamesNewsContext";
import ReadGameNews from "./component/ReadGamesNews";
import axios from "axios";
import Root from "./layout/Root";
import GamesNewsDetail from "./component/GamesNewsDetail";
import Login from "./component/LoginPage";
import AuthProvider from "./context/AuthContext";
import Profile from "./component/Profile";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <Root />,
        children: [
          {
            path: "/",
            element: <ReadGameNews />,
          },
          {
            path: "/gamesNews/:year/:month/:day/:key",
            element: <GamesNewsDetail />,
            loader: async ({ params }) => {
              console.log("params : ", params);
              const res = await axios.get(
                `http://localhost:3001/api/detail/${params.year}/${params.month}/${params.day}/${params.key}`
              );
              return res.data.results;
            },
          },
          {
            path: "/Profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    element: <PublicRoutes />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <GamesNewsProvider>
        <RouterProvider router={router} />
      </GamesNewsProvider>
    </AuthProvider>
  );
}

export default App;

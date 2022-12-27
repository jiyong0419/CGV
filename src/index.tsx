import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//
import Root from "./routes/root";
import Home from "./routes/home";
import Login from "./routes/user/login";
import Join from "./routes/user/join";
import Mycgv from "./routes/user/mycgv";
import Logout from "./routes/user/logout";
import Edit from "./routes/user/edit";
import Movies from "./routes/movies/movies";
import Detail from "./routes/movies/detail";
import Theaters from "./routes/theaters/theaters";
import Theater from "./routes/theaters/theater";
import Reservation from "./routes/movies/reservation";
import ReserveCheck from "./routes/user/reserveCheck";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "user/login",
        element: <Login />,
      },
      {
        path: "user/logout", //
        element: <Logout />,
      },
      {
        path: "user/join",
        element: <Join />,
      },
      {
        path: "user/mycgv",
        element: <Mycgv />,
        children: [
          {
            path: "reserve-check", //
            element: <ReserveCheck />,
          },
          {
            path: "edit-myinfo", //
            element: <Edit />,
          },
        ],
      },
      {
        path: "movies",
        element: <Movies />,
        children: [
          {
            path: "detail-view/:movieId",
            element: <Detail />,
          },
        ],
      },
      {
        path: "theaters",
        element: <Theaters />,
        children: [
          {
            path: ":theaterCode",
            element: <Theater />,
          },
        ],
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router}></RouterProvider>);

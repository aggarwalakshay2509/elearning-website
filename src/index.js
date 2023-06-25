import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './pages/Layout';
import About from "./components/AboutUs/AboutUs";
import Newsletter from "./components/Newsletter/Newsletter";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Teacher from "./components/Teacher/Teacher";
import LoginStudent from "./components/LoginStudent/LoginStudent";
import SignupStudent from "./components/SignupStudent/SignupStudent";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "news",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "teacher",
        element: <Teacher />,
      },
      {
        path: "stulogin",
        element: <LoginStudent />,
      },
      {
        path: "stusignup",
        element: <SignupStudent />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import Introduction from "./pages/Introduction.jsx";
import Foundertrustee from "./pages/Foundertrustee.jsx";
import { Outlet } from "react-router-dom";
import Videos from "./pages/Videos.jsx";
import PreparatoryForVIClass from "./pages/PreparatoryForVIClass.jsx";
import {
  createBrowserRouter,
  useNavigate,
  useParams,
  Routes,
  Route,
  RouterProvider,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter(
  
  [
  createRoutesFromElements,

  {
    path: "/",
    element: <Layout />,
    
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "introduction",
        element: <Introduction />,
},

{
        path: "foundertrustee",
        element: <Foundertrustee />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
    ],
  },
  {
    path: "/introduction",
    element: <Introduction />,
    path: "foundertrustee",
        element: <Foundertrustee />,
    
    children: [
      
      {
        path: "introduction",
        element: <Introduction />,
      },
      {
        path: "foundertrustee",
        element: <Foundertrustee />,
      },
      
    ],
  },

  
]);


const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);

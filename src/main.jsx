import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import IntroLinks from "./pages/IntroLinks.jsx";
import Introduction from "./pages/Introduction.jsx";
import Foundertrustee from "./pages/Foundertrustee.jsx";
import Purposes from "./pages/Purposes.jsx";
import Educationsystem from "./pages/Educationsystem.jsx";
import Termsconditions from "./pages/Termsconditions.jsx";
import Skilldevelopment from "./pages/Skilldevelopment.jsx";
import Rauza from "./pages/Rauza.jsx";
import Qaidanazra from "./pages/Qaidanazra.jsx";
import Hifz from "./pages/Hifz.jsx";
import Secondaryschool from "./pages/Secondaryschool.jsx";
import College from "./pages/College.jsx";
import Mahadulhafizat from "./pages/Mahadulhafizat.jsx";
import Mahadulhuffaz from "./pages/Mahadulhuffaz.jsx";
import { Outlet } from "react-router-dom";
// import Root,{loader as rootLoader} from '../src/pages/IntroLinks.jsx'
import Videos from "./pages/Videos.jsx";
import PreparatoryForVIClass from "./pages/PreparatoryForVIClass.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./pages/LoginForm.jsx";
import ErrorPage from "../src/errorpage";
import Adminpanel from "./pages/Adminpanel.jsx"
import RequireAuth from "./Components/ProtectedRoutes.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    
        
    errorElement: <ErrorPage />,

    //  loader: rootLoader,
    //  action: rootAction,
    children: [
      {path: "/", element: <App />,},
      // {path: "introduction",element: <Introduction />,},
      {path: "foundertrustee",element: <Foundertrustee />,},
      {path: "videos",element: <Videos />,},
      
    
      

      {
        path: "introLinks",
        element: <IntroLinks />,
        // element: <IntroLinks />,
        children: [
          { path: "introduction",element: <Introduction />},
          { path: "foundertrustee",element: <Foundertrustee />},
          { path: "preparatoryForVIClass", element: <PreparatoryForVIClass /> },
          { path: "purposes", element: <Purposes /> },
          { path: "educationsystem", element: <Educationsystem /> },
          { path: "termsconditions", element: <Termsconditions /> },
          { path: "skilldevelopment", element: <Skilldevelopment /> },
          { path: "rauza", element: <Rauza /> },
          { path: "qaidanazra", element: <Qaidanazra /> },
          { path: "hifz", element: <Hifz /> },
          { path: "secondaryschool", element: <Secondaryschool /> },
          { path: "college", element: <College /> },
          { path: "mahadulhafizat", element: <Mahadulhafizat /> },
          { path: "mahadulhuffaz", element: <Mahadulhuffaz /> },
          
          
        ]
      },


      
     
    ],
  },
  {path: "login",element: <LoginForm />,},
  
  {path: "admin",element:   <Adminpanel />},
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



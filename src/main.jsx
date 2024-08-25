import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Introduction from './pages/Introduction.jsx'
import Foundertrustee from './pages/Foundertrustee.jsx'
import VideoGallery from './Components/Video-Gallery/VideoGallery.jsx'
import Videos from './pages/Videos.jsx'
import PreparatoryForVIClass from './pages/PreparatoryForVIClass.jsx'



import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <App/>
      },
      {
      
        path:"introduction",
        element: <Introduction/>
       
        
      },
      {
        path:"foundertrustee",
        element: <Foundertrustee/>
      },
      {
        path:"videos",
        element: <Videos/>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={router}/>
  </React.StrictMode>
);

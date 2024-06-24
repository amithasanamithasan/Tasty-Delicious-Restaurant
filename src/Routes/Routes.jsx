import {
   createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Singup from "../Signup/Singup";
import PrivetRouts from "./PrivetRouts";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";



 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        
        {
             path:'/',
             element:<Home></Home>
        },
        {
          path:'/ourmenu',
          element:<OurMenu></OurMenu>,
        },
        {
          path:'order/:category',
          element:<Order></Order>,
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'singup',
          element:<Singup></Singup>,
        },
        {
          path:'secret',
          element:<PrivetRouts><Secret></Secret></PrivetRouts>
        }
      ]
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>,
        }
      ]
    }
  ]);
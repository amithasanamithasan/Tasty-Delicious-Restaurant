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
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItemsAdmin/AddItems";
import AdminRouts from "./AdminRouts";
import ManageItem from "../Pages/Dashboard/ManageItems/ManageItem";
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import Contauctus from "../Pages/Shared/ContactUs/Contauctus";



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
          path:'contact',
          element:<Contauctus></Contauctus>,
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
      element:<PrivetRouts><Dashboard></Dashboard></PrivetRouts>,
      children:[
        // normal users routes
        {
          path:'cart',
          element:<Cart></Cart>,
        },
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'contact',
          element:<Contauctus></Contauctus>,
         },
        {
            path:'reservation',
            element:<Reservation></Reservation>
        },
       
        {
          path:'payment',
          element:<Payment></Payment>,
        },
        {
           path:'paymentHistory',
           element:<PaymentHistory></PaymentHistory>
        },
        // admin only routes
        {
    path:'adminHome',
    element:<AdminRouts><AdminHome></AdminHome></AdminRouts>,
        },
        {
          path:'addItems',
          element:<AdminRouts><AddItems></AddItems></AdminRouts>,

        },
        {
          path:'manageItems',
          element:<AdminRouts><ManageItem></ManageItem></AdminRouts>,
        },
        {
          path:'updateItems/:id',
          element:<AdminRouts><UpdateItems></UpdateItems></AdminRouts>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path:'allUsers',
        element:<AdminRouts><AllUsers></AllUsers></AdminRouts>,
      
        }

      ]
    }
  ]);
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import NavMenu from "../Pages/NavMenu/NavMenu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Pages/Secret";
import PrivatRouts from "./PrivatRouts";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <NavMenu></NavMenu>
        },
        {
          path: 'orderFood/:category',
          element: <OrderFood></OrderFood>
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'secret',
          element: <PrivatRouts><Secret></Secret></PrivatRouts>
        }

      ]
    },
    {
      path: 'dashboard',
      element: <PrivatRouts><Dashboard></Dashboard></PrivatRouts>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);
import {createBrowserRouter,} from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import CoffeeCards from '../Components/CoffeeCards'
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=>fetch('../categories.json'),
//  Q  :  params ki home er sob children i pabe ?

          children:[
            {
              path: '/',
              element: <CoffeeCards></CoffeeCards>,
              loader: () => fetch('../coffees.json')
            },
            {
              path: 'category/:category',
              element: <CoffeeCards></CoffeeCards>,
              loader: () => fetch('../coffees.json')
            },

          ]
        },{
          path: '/coffees',
          element: <Coffees></Coffees>,
          loader: () => fetch('../coffees.json')
        },{
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        }
      ]
    },{

    }
  ]);

  export default router;
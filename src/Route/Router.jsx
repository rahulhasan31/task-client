import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import SignIn from "../Page/SignIn";
import SignUp from "../Page/SignUp";

export const router=createBrowserRouter([
   {
    path:"/",
    element:<Main></Main>,
    children:[
      {
         path:'/',
         element:<SignUp></SignUp>
      },
      {
         path:'/signin',
         element:<SignIn></SignIn>
      }
    ]
   }
])
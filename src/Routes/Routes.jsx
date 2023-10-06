import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Orders from "../Pages/Orders/Orders";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Profile from "../Pages/Profile/Profile";
import PieeChart from "../Pages/PieeChart/PieeChart";
import Details from "../Pages/Details/Details";

const myCreatedRoutes = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/details/:userId',
                element: <Details></Details>,
                loader: ()=> fetch('/data.json')
                

            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/orders',
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            },
            {
                path:'/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path: '/chart',
                element: <PieeChart></PieeChart>
            }
          
        ]
        
    }
])

export default myCreatedRoutes;
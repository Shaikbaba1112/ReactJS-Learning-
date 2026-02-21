import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppLayout } from "./AppLayout";
import { Body } from "./src/components/Body";
import { About } from "./src/components/About";
import { Contact } from "./src/components/Contact";
import { Cart } from "./src/components/Cart";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { Error } from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { lazy, Suspense } from "react";

const Grocery = lazy(()=> import("./src/components/Grocery"));

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/About",
                element:<About/>
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/Cart",
                element:<Cart/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1 style={{padding: "200px"}}>Loading...</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement:<Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={appRouter} />);
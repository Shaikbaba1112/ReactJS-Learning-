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
import { RestaurantPage } from "./src/components/RestaurantPage";

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
                path:"/restaurants/:resId",
                element:<RestaurantPage/>
            },
            {
                path:"*",
                element:<Error/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={appRouter} />);
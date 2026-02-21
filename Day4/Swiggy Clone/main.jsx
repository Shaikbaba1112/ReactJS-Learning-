import ReactDOM from "react-dom/client";
import AppLayout from "./AppLayout";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
// import Grocery from "./src/components/Grocery";
import {lazy, Suspense} from "react";
import Cart from "./src/components/Cart"
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Grocery = lazy(()=> import("./src/components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1 style={{padding: "200px"}}>Loading...</h1>}><Grocery /></Suspense>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
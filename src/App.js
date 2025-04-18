import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./body";
import { Header } from "./header";
import Error from "./error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./about";
import ContactUs from "./contact-us";
import Cart from "./cart";
import useOnlineStatus from "./custom-hooks/useOnlineSatus";

const RestaurantMenu = lazy(() => import('./res-menu'));

//* Chunking the code
//* Lazy loading the component
//* code splitting
//* Dynamic Bundaling
//* On demand loading
//* React.lazy(() => import('./body')) // This will load the component only when it is needed

const AppLayout = () => {
  const isOnline = useOnlineStatus();
  return  (<div className="app"><Header />{isOnline ? <Outlet /> : (<div>Looks like you are offline! Please check you internect connection.</div>)}</div>)
};
//* routing configuration

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [ //*Children are the routes that will be rendered inside the Outlet component
      //* The path is the URL that will be used to access the component
      //* The element is the component that will be rendered when the path is accessed
      //* The errorElement is the component that will be rendered when there is an error
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: 'restaurant/:resId',
        element: <Suspense fallback={<div>Loading menu...!!</div>}><RestaurantMenu /></Suspense>,
      }

    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

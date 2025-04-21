import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/body";
import { Header } from "./components/header";
import Error from "./components/error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about";
import ContactUs from "./components/contact-us";
import Cart from "./components/cart";
import useOnlineStatus from "./custom-hooks/useOnlineSatus";
import ThemeContext from "./context/themeContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const RestaurantMenu = lazy(() => import("./components/res-menu"));

//* Chunking the code
//* Lazy loading the component
//* code splitting
//* Dynamic Bundaling
//* On demand loading
//* React.lazy(() => import('./body')) // This will load the component only when it is needed

const AppLayout = () => {
  const isOnline = useOnlineStatus();
  const { lightTheme } = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  return (
    //* Creates bridge and provide store to our app
    <Provider store={appStore}>
      <ThemeContext.Provider
        value={{ lightTheme: currentTheme, setCurrentTheme }}
      >
        <div data-theme={currentTheme ? "light" : "dark"} className="p-0 m-0 bg-amber-50">
          <Header />
          {isOnline ? (
            <Outlet />
          ) : (
            <div>
              Looks like you are offline! Please check you internect connection.
            </div>
          )}
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
};
//* routing configuration

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      //*Children are the routes that will be rendered inside the Outlet component
      //* The path is the URL that will be used to access the component
      //* The element is the component that will be rendered when the path is accessed
      //* The errorElement is the component that will be rendered when there is an error
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: (
          <Suspense fallback={<div>Loading menu...!!</div>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

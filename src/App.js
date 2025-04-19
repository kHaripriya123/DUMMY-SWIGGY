//**
// * Header
// * - logo container
//* - logo
// * - nav items
// * Body
// * - search
// * - RestaurantContainer
// * - RestaurantCard
// *        -img of  food
// *         - name of res,star rating, cuisine, delivery time
//  * Footer
//  * - Copyright
//  * - Links
//  * - Address
//  * - Contact
//  */
//we will have all the above things inside app layout component
//so we can have a container div where we have all other components
//first we  will build app layout
// second we  will build header
// third will build body
// fourth will build footer
// 
import { Suspense, lazy, useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; //can write .js after header here or no , both will work
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// const Grocery = lazy(() => import("./components/Grocery"));

// const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "Haripriya",
        };
        setUserName(data.name);

    }, []
    );

    return (
        //providing store to our app
        <Provider store = {appStore}> 
        {/* passing the appStore as props */}
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
            
                <Header />
         
            <Outlet />

        </div>
        </UserContext.Provider>
 </Provider>


    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,

            },

            {
                path: "/about",
                element: <About />,


            },
            {
                path: "/contact",
                element: <Contact />,
            },
            // {
            //     path: "/grocery",
            //     element: (
            //         <Suspense fallback={<h1>loading ...</h1>}>
            //             <Grocery />
            //         </Suspense>
            //     ),
            // },
            {
                path : "/Cart",
                element : <Cart/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,//here resId is dynamic it can be changed according to restro
            },
        ],

        errorElement: <Error />,

    },


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
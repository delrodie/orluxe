import React, {Profiler, useEffect} from 'react';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Presentation from "../pages/Presentation";
import AOS from "aos";
import Contact from "../pages/Contact";
import Recherche from "../pages/Recherche";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Root/>,
        children:[
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/presentation',
                element: <Presentation/>
            },
            {
                path: '/services/amenagement-de-terrain',
                element: <Presentation/>
            },
            {
                path: '/services/conception-et-constructtion-de-batiment',
                element: <Presentation/>
            },
            {
                path: '/services/promotion-immobiliere',
                element: <Presentation/>
            },
            {
                path: '/nos-offres/abidjan',
                element: <Presentation/>
            },
            {
                path: '/nos-offres/songon',
                element: <Presentation/>
            },
            {
                path: '/nos-offres/yamoussoukro',
                element: <Presentation/>
            },
            {
                path: '/offre',
                element: <Presentation/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/recherche',
                element: <Recherche/>
            }
        ]
    },
])

function Root() {
    return (
        <>
            <Profiler id="header" onRender={onRender}>
                <Header/>
            </Profiler>
            <Profiler id="main" onRender={onRender}>
                <Outlet/>
            </Profiler>
            <Profiler id="footer" onRender={onRender}>
                <Footer/>
            </Profiler>
        </>
    )
}

function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {

}
export default function () {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <RouterProvider router={router}/>
    )
}
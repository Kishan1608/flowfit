import React from 'react'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import './App.scss';

function App() {
    const Layout = () => {
        return(
          <div className="app">
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element:<Layout />,
            children:[
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/products',
                    element: <Products />
                },
                {
                    path: '/services',
                    element: <Services />
                },
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App

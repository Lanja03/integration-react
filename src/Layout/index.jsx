import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Route, Routes, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'


const items = [
    {
        label: "Home",
        link: '/'
    },
    {
        label: "Recipe",
        link: '/recipe'
    },
    {
        label: "Courses",
        link: '/courses'
    },
    {
        label: "Meal planners",
        link: '/mealplanners'
    },
    {
        label: "About Us",
        link: '/about'
    },
    {
        label: "Contact",
        link: '/contact'
    }
];

export default function index() {
    return (
        <>
            <Navbar items={items} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
        </>
    )
}

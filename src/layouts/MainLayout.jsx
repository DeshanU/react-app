import React from 'react'
import { Outlet } from 'react-router-dom' //components comes through from outlet (like a doorway)

import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    )
}

export default MainLayout

import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom';
const MainLayouts = () => {
    return (
        <div>
            {/* nav bar */}
            <Navbar></Navbar>

            {/* dynamic section */}
            <div className=' min-h-[calc(100vh-232px)] px-12 py-12 container mx-auto'>
            <Outlet>

            </Outlet>

            </div>

            {/* footer */}
            <Footer></Footer>













        </div>
    );
};

export default MainLayouts;
import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='banner h-screen'>
            <div className='overlay'>
                <div className='container mx-auto  '>
                    <header className=''>
                        <Navbar></Navbar>
                        <Banner></Banner>
                        <Outlet></Outlet>
                    </header>
                </div>
            </div>
        </div>
    );
};


export default MainLayout;
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto '>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
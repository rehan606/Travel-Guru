import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logoWhite.png';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const {user, logoutUser} = useContext(AuthContext)

    const links = <>
        <li className='mr-3 text-yellow-400'> <NavLink to="/">Home</NavLink> </li>
        <li className='mr-3 text-yellow-400'> <NavLink to="/news">News</NavLink> </li>
        <li className='mr-3 text-yellow-400'> <NavLink to="/destination">Destination</NavLink> </li>
        <li className='mr-3 text-yellow-400'> <NavLink to="/blog">Blog</NavLink> </li>
        <li className='mr-3 text-yellow-400'> <NavLink to="/contact">Contact</NavLink> </li>
    </>
    return (
        <div>
            <div className="navbar pt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className=" text-xl"><img src={logo} alt="" className='w-20 text-white' /></Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <label className="input input-bordered flex items-center gap-2 mr-20">
                        <input type="text" className="w-96" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>

                    <ul className="menu menu-horizontal px-1 items-center text-white">
                        {links} 
                        {
                            user && (<img src={user.photoURL} alt="" className='w-14 rounded-full border mr-2' />) 
                        }
                    </ul>

                    <div className="">
                        

                        {
                            user && user?.email ? 
                            (<Link onClick={logoutUser} className="px-6 py-3 bg-[#fd4444] rounded-md text-white">LogOut</Link>) 
                            : 
                            (<Link to='/auth/login' className="px-6 py-3 bg-[#F9A51A] rounded-md">Login</Link>)
                        }
                       
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
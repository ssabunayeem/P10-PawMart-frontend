import React, { useContext } from 'react';
import { PiSignInBold } from "react-icons/pi";
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import paw from '../assets/paw.png'


const Navbar = () => {

    const { user } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (

        <div className='z-40'>
            <div className="navbar bg-[#6F00FF] text-white shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16 M4 12h16 M4 18h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-[#6F00FF] text-white rounded-box z-50 mt-3 w-52 p-2 shadow">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to={'/profile'}>Profile</Link></li>
                            <li><Link to={'/add-service'}>Add Service</Link></li>
                            <li><Link to={'/my-services'}>My Services</Link></li>
                            <li><Link to={'/my-orders'}>My Orders</Link></li>
                        </ul>
                    </div>

                    <div className='bg-[#3B0270] rounded-xl hover:scale-105 transition-all duration-300 ease-in-out'>
                        <div className='bg-linear-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text 
                        text-transparent shadow-2xl'>

                            <Link to={'/'} className="btn btn-ghost btn-block text-xl md:text-3xl font-bold py-5 px-7 md:px-2 rounded-xl">
                                <img className='w-6 md:w-8 rounded-full -rotate-35' src={paw} alt="" />
                                PawMart
                            </Link>
                        </div>
                    </div>

                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg px-1 space-x-5">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to={'/profile'}>Profile</Link></li>
                        <li><Link to={'/add-service'}>Add Service</Link></li>
                        <li><Link to={'/my-services'}>My Services</Link></li>
                        <li><Link to={'/my-orders'}>My Orders</Link></li>
                    </ul>
                </div>


                {
                    user && <div className="navbar-end">
                        <button onClick={handleSignOut} className="btn btn-ghost hover:btn-primary shadow-none border-0
                         text-white text-xl">
                            <PiSignInBold className='text-2xl rotate-180' />
                            Logout
                        </button>
                    </div>
                }

                {
                    !user && <div className="navbar-end">
                        <Link to={'/login'} className="btn btn-ghost hover:btn-primary 
                            shadow-none border-0 text-white text-xl">
                            <PiSignInBold className='text-2xl' />
                            Login
                        </Link>
                    </div>
                }




            </div>
        </div>

    );
};

export default Navbar;
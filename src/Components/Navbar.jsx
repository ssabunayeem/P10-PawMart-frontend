import React, { useContext } from 'react';
import { PiSignInBold } from "react-icons/pi";
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';


const Navbar = () => {

    const { user } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (

        <div className='z-40'>
            <div className="navbar bg-[#525CEB] text-white shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-[#525CEB] text-white rounded-box z-50 mt-3 w-52 p-2 shadow">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to={'/profile'}>My Profile</Link></li>
                        </ul>
                    </div>
                    <div className='bg-linear-to-r from-cyan-300 via-white to-sky-400 bg-clip-text text-transparent'>
                        <Link to={'/'} className="btn btn-ghost hover:btn-primary text-xl md:text-3xl font-bold">WinterPetCare</Link>
                    </div>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-10">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to={'/profile'}>My Profile</Link></li>
                    </ul>
                </div>


                {
                    user && <div className="navbar-end">
                        <button onClick={handleSignOut} className="btn btn-ghost hover:btn-primary shadow-none border-0 text-white text-xl">
                            <PiSignInBold className='text-2xl rotate-180' />
                            Logout
                        </button>
                    </div>
                }

                {
                    !user && <div className="navbar-end">
                        <Link to={'/login'} className="btn btn-ghost hover:btn-primary shadow-none border-0 text-white text-xl">
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
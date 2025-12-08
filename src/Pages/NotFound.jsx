import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300">
            <h1 className="text-9xl font-extrabold text-white mb-4 animate-bounce">404</h1>
            <p className="text-2xl text-white mb-6">Oops! Page Not Found</p>
            <Link
                to="/"
                className="px-6 py-3 bg-white text-purple-700 font-bold rounded-lg shadow-lg hover:bg-purple-700 hover:text-white transition-all"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;

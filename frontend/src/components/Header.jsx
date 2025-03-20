import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='max-w-9/10 m-0 auto p-10'>
            <div className='flex justify-between '>
                <Link 
                    to="/" 
                    className="font-semibold text-2xl text-gray-600 ml-24"
                >
                    myBlog
                </Link>
                <div className="flex justify-end">
                <nav className='flex gap-4 items-center'>
                <Link 
                        to="/login" 
                        className="text-lg text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        Login
                    </Link>
                    <Link 
                        to="/register" 
                        className='text-lg text-gray-500 hover:text-gray-700 transition-colors'
                    >
                        Register
                    </Link>
                    
                </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
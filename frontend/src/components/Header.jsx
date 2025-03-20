import React from 'react';
const Header = () => {
    return (
        <div className='max-w-9/10 p-10 m-0 auto'>
      <div className='flex justify-between items-center'>
        <a href="#"className="font-semibold text-2xl text-gray-600 ml-10">myBlog</a>
        <div className='flex justify-center items-center gap-4'> 
            <a href="#" className='text-lg text-gray-500'>login</a>
            <a href="# " className='text-lg text-gray-500'>register</a>
          </div>

        </div>
    </div>
    );
};

export default Header;
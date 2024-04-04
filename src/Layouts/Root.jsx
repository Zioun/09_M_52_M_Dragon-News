import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-[1200px] m-auto font-poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
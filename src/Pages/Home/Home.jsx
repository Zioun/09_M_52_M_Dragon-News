import React from 'react';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';

const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <div className='my-5'>
                <Navbar></Navbar>
            </div>
            <div className='grid grid-cols-12 gap-x-5 mt-20'>
                <div className='col-span-3'><LeftSideNav></LeftSideNav></div>
                <div className='col-span-6'>
                    center
                </div>
                <div className='col-span-3'><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;
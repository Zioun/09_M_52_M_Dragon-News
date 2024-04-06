import React from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';
import Navbar from '../../Shared/Navbar/Navbar';

const Details = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-12 mt-10'>
                <div className='col-span-9'>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h1></h1>
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div>
                            <button></button>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'><RightSideNav /></div>
            </div>
        </div>
    );
};

export default Details;
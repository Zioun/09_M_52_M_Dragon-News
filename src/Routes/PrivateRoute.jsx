import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    console.log(location)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loader || loading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }
    
    return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;

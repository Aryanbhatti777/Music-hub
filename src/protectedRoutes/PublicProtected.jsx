import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PublicProtected = () => {
    const { user } = useContext(AuthContext)
    
    if (user) {
        return <Navigate to="/main" replace/>
    }

    return <Outlet/>
}

export default PublicProtected;
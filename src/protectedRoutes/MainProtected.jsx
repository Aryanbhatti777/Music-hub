import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const MainProtected = () => {
    const user = localStorage.getItem("user")

    if (!user) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default MainProtected;
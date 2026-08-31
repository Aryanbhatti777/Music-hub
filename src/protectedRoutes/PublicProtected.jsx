import { Navigate, Outlet } from 'react-router';

const PublicProtected = () => {
    const user = localStorage.getItem("user")

    if (user) {
        return <Navigate to="/main" replace />
    }

    return <Outlet />
}

export default PublicProtected;
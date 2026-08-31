import { Navigate, Outlet } from 'react-router';

const MainProtected = () => {
    const user = localStorage.getItem("user")

    if (!user) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default MainProtected;
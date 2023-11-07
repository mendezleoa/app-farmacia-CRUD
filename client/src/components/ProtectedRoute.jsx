import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
    const { loading, isAutenticated } = useAuth();
    if (loading) return;
    if (!loading && !isAutenticated) return <Navigate to='/login' replace />

    return <Outlet/>
}

export default ProtectedRoute;
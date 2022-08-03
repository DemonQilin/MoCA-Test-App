import React from 'react'
import { Navigate, useLocation } from 'react-router';

const ProtectedRoute = (children) => {
    const logged = false;
    const location = useLocation();

    if (logged) {
        return children;
    }
    return <Navigate to='/login' state={{ backPage: location.pathname }} />;
}

export default ProtectedRoute
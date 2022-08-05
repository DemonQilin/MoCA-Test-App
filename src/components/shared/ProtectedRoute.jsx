import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

const ProtectedRoute = ({children}) => {
    const user = useSelector(store => store.user);
    const location = useLocation();

    if (user) return children;
    
    return <Navigate to='/login' state={{ backPage: location.pathname }} />;
}

export default ProtectedRoute
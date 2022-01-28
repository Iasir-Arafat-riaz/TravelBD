import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Loading from '../../Pages/shared/Loading/Loading';

const AdminRoute = ({children}) => { const location=useLocation()
    const { user, isLoading,admin } = useAuth();
    if (isLoading) {
      return <Loading></Loading>
    }
    return <div>{user.email && admin ? children : <Navigate state={{from:location}} to="/login"/>}</div>
};

export default AdminRoute;
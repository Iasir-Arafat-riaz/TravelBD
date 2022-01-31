import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Loading from '../../Pages/shared/Loading/Loading';

const AdminRoute = ({children}) => { const location=useLocation()
    const { user, isLoading, admin } = useAuth();
    if (!admin.admin) {
      return <Loading></Loading>
    }
    return <div>{user.email && admin.admin ? children : <Navigate state={{from:location}} to="/"/>}</div>
};

export default AdminRoute;
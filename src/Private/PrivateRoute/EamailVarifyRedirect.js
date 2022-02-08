import React, { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const EamailVarifyRedirect = ({children}) => {
    const location=useLocation()
    const {user}=useAuth()
    //console.log(user);
    if(!user.emailVerified){
        return <Navigate state={{from:location}} to="/EmailVerify"/>
    }
    return children;
};

export default EamailVarifyRedirect;
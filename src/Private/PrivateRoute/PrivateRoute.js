import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Pages/shared/Loading/Loading";



const PrivateRoute = ({ children }) => {
  const location=useLocation()
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Loading></Loading>
  }
  return <div>{user.email ? children : <Navigate state={{from:location}} to="/login"/>}</div>
};

export default PrivateRoute;
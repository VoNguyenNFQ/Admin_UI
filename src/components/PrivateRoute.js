import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = (Component) => {
    const checkRoute = (props) => {
        const token = localStorage.getItem("token");
        return token ? <Component {...props} /> : <Navigate to="/login" />
    }
    return checkRoute();
};

export default PrivateRoutes;
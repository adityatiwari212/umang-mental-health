

import React, { useState, useEffect } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../../api";

function ProtectRoute({ children }) {
    const [isAuth, setIsAuth] = useState(null);

    

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN);
       
        if (!token) {
            setIsAuth(false);
        } else {
            const decode = jwtDecode(token);
            if (decode.exp < Date.now() / 1000) {
                setIsAuth(false);
            } else {
                setIsAuth(true);
            }
        }
    }, []); 

    if (isAuth === null) return <>Loading...</>;
    if (isAuth === false) return <Navigate to="/login" />;
    return children;
}

export default ProtectRoute;

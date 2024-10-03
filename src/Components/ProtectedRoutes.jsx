import React from "react"; 
import { useLocation } from "react-router-dom";
export default function RequireAuth ({childern}) {
    // const {authed} = useAuth();
    const checkAuth = () => {
        const isAuth = localStorage.getItem('isAuth');
        return isAuth
    }
    const location = useLocation();
    const isAuthRes = checkAuth();
    return isAuthRes === true ? (
        childern
    ) : (
        <Navigate to="admin" replace state={{path:location.pathname}} />
    
    );
}
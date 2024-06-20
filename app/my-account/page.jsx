'use client';
import { useState, useEffect } from 'react';
import Login from "../../components/Login";

export default function MyAccount () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token')
        setIsLoggedIn(!!token)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setTimeout(() => {
            setIsLoggedIn();
        }, 1000);
    }

    const handleLoginSuccess = () => {
        setIsLoggedIn(true)
    }
    
    return(
        <div>
            {isLoggedIn ? (
                <div className="pt-[5rem]">
                    <h1>My Account</h1>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
            ) : (
                <div>
                    <Login onLoginSuccess={handleLoginSuccess} />
                </div>
            )}
        </div>
    );
}

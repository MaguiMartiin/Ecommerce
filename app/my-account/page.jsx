'use client';
import { useState, useEffect } from 'react';
import Login from "../../components/Login";
import Account from '@/components/Account';

export default function MyAccount () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token')
        setIsLoggedIn(!!token)
    }, [])

    const handleLoginSuccess = () => {
        setIsLoggedIn(true)
    }
    
    return(
        <div>
            {isLoggedIn ? (
                <div>
                    <Account setIsLoggedIn={setIsLoggedIn} />
                </div>
            ) : (
                <div>
                    <Login onLoginSuccess={handleLoginSuccess} />
                </div>
            )}
        </div>
    );
}

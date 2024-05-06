import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinnerrr from '../Spinner';
import { useAuth } from '../../context/auth';
import {Outlet} from 'react-router-dom'

export const PrivateRoute = () => {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get("http://localhost:8002/user-auth", {
                    headers: {
                        "Authorization": auth?.token
                    }
                });
                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                console.error("Error checking authentication:", error);
                setOk(false);
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <Outlet/> : <Spinnerrr />
};

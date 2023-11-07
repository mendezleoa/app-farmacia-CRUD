import { createContext, useState, useContext, useEffect } from 'react'
import { registerRequest, loginRequest, verifyTokenRequest, logoutRequest } from '../api/auth';
import Cookies from 'js-cookie';

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error ('useAuth must be used within an AuthProvider instance');
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAutenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                setErrors(error.response.data);
            }
            else {
                setErrors([error.response.data]);
            }
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                setErrors(error.response.data);
            }
            else {
                setErrors([error.response.data]);
            }
        }
    };

    const logout = async () => {
        try {
            await logoutRequest();
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                setErrors(error.response.data);
            }
            else {
                setErrors([error.response.data]);
            }
        }
    };

    useEffect(() => {
        if (errors.length === 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 6000)
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        async function checkLogin () {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }
            try {
                const res = await verifyTokenRequest(cookies.token);
                if (!res.data) setIsAuthenticated(false);
                setIsAuthenticated(true);
                setLoading(false);
                setUser(res.data);
            } catch (error) {
                setIsAuthenticated(false);
                setLoading(false);
                setUser(null)
            }
        }
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider
            value= {{
                signup,
                signin,
                logout,
                user,
                isAutenticated,
                errors,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
import { createContext, useState, useContext } from 'react'
import { registerRequest } from '../api/auth';

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

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setError(error.response.data);
        }
    };

    return (
        <AuthContext.Provider
            value= {{
                signup,
                user,
                isAutenticated,
                errors,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
import { createContext, useState, useContext } from 'react'
import { createProdRequest } from '../api/prods';
import Cookies from 'js-cookie';

export const ProdsContext = createContext()

export const useProds = () => {
    const context = useContext(ProdsContext);
    if (!context) {
        throw new Error ('useProds must be used within an ProdsProvider instance');
    }
    return context;
}

export const ProdsProvider = ({children}) => {
    const [prods, setProds] = useState(null);

    const createProd = async (prod) => {
        try {
            const res = await createProdRequest(prod);
            setProds(res.data);
        } catch (error) {
            setError(error.response.data);
        }
    };

    return (
        <ProdsContext.Provider
            value= {{
                prods,
                createProd
            }}
        >
            {children}
        </ProdsContext.Provider>
    );
}
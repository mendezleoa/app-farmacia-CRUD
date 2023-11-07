import { createContext, useState, useContext } from 'react'
import { createProdRequest, getProdsRequest } from '../api/prods';
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

    const getProds = async () => {
        const res = await getProdsRequest();
        setProds(res.data);
    }

    const createProd = async (prod) => {
        const res = await createProdRequest(prod);
    };

    return (
        <ProdsContext.Provider
            value= {{
                prods,
                createProd,
                getProds
            }}
        >
            {children}
        </ProdsContext.Provider>
    );
}
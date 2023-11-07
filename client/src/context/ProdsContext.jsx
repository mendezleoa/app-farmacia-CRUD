import { createContext, useState, useContext } from 'react'
import { createProdRequest, getProdsRequest, deleteProdRequest } from '../api/prods';
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
        try {
            const res = await getProdsRequest();
            setProds(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const createProd = async (prod) => {
        try {
            const res = await createProdRequest(prod);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteProd = async (id) => {
        try {
            const res = await deleteProdRequest(id);
            if (res.status === 204) setProds(prods.filter(prod => prod._id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <ProdsContext.Provider
            value= {{
                prods,
                createProd,
                getProds,
                deleteProd
            }}
        >
            {children}
        </ProdsContext.Provider>
    );
}
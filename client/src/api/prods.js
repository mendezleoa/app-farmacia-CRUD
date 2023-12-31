import axios from './axios';

export const getProdsRequest = () => axios.get(`/items`);
export const getProdRequest = (id) => axios.get(`/items/${id}`);
export const createProdRequest = (prod) => axios.post(`/items`, prod);
export const updateProdRequest = (prod) => axios.put(`/items/${prod._id}`, prod);
export const deleteProdRequest = (id) => axios.delete(`/items/${id}`);

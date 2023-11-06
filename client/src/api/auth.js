import axios from 'axios';

const api = 'http://localhost:4000';

export const registerRequest = (user) => axios.post(`${api}/register`, user);
import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";
import { publicRoutes } from "../routes";

export const registration = async (email, password) => {
    const { data } = await $host.post('/user/registration', { email, password });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const login = async (email, password) => {
    const { data } = await $host.post('/user/login', { email, password });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}
export const check = async () => {
    const currentPath = window.location.pathname; 
    const publicPaths = publicRoutes.map(route => route.path);
    if (!publicPaths.includes(currentPath) && localStorage.getItem('token')) {
        const { data } = await $authHost.get('/user/auth');
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token); 
    }
   
};

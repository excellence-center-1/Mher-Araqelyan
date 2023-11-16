import {$authHost, $host} from "./index";
import { jwtDecode } from 'jwt-decode';

export const createVideo = async (video) => {
    const {data} = await $authHost.post('/video/create', video )
    return data
}

export const fetchVideos = async (category) => {
    const {data} = await $authHost.get('/video/list',{params: {
        category
    }})
    return data
}


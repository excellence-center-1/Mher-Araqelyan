import {$authHost, $host} from "./index";

export const fetchCategories = async () => {
    const {data} = await $authHost.get('/category/list')
    return data
}


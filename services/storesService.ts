import baseURL from "./api"

export type StoreType = {
    id: string,
    name: string,
    address: string,
    phone: string,
    city: string,
    state: string,
    imgUrl: string
}

interface CreateStoreParams {
    name: string,
    address: string,
    phone: string,
    city: string,
    state: string,
    imgUrl: string
}

const storesService = {
    /* Get all stores */
    findAll: async () => {
        const response = await $fetch("/stores/get", {
            method: "GET",
            baseURL: baseURL,
            headers: {
                "client-platform": "browser",
            }
        })

        return response
    },
}

export default storesService
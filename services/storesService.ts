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
        const { data: response } = await useLazyFetch(`/stores/get`, {
            method: 'GET',
            baseURL: baseURL
        })

        return response
    },
}

export default storesService
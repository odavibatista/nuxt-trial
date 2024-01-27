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
        const { data: response } = await apiRequest(`/stores/get`, {
            method: 'GET'
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },
}

export default storesService
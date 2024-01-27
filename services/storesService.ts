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
            method: 'GET',
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Get one store by its id */
    getById: async (storeId: string) => {
        const { data: response } = await apiRequest(`/stores/get/${storeId}`, {
            method: 'GET',
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Create a new store */
    create: async (store: CreateStoreParams) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const { data: response } = await apiRequest(`/stores/create`, {
            method: 'POST',
            headers: {
                "client-platform": "browser",
                Authorization: `Bearer ${token}`
            },
            body: store
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Update a store */
    update: async (store: StoreType) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const { data: response } = await apiRequest(`/stores/update/${store.id}`, {
            method: 'PUT',
            headers: {
                "client-platform": "browser",
                Authorization: `Bearer ${token}`
            },
            body: store
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Delete a store */
    delete: async (storeId: string) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const { data: response } = await apiRequest(`/stores/delete/${storeId}`, {
            method: 'DELETE',
            headers: {
                "client-platform": "browser",
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    }
}

export default storesService
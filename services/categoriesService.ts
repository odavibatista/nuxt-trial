interface CreateCategoryParams {
    name: string
    description: string
}

const categoriesService = {
    /* Get all categories */
    findAll: async () => {
        const { data: response } = await apiRequest("/categories/get", {
            method: 'GET',
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Get one cateogory by its id */
    getById: async (categoryId: string) => {
        const { data: response } = await apiRequest(`/categories/get/${categoryId}`, {
            method: 'GET',
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Create a new category */
    create: async (data: CreateCategoryParams) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const { data: response } = await apiRequest("/categories/create", {
            method: 'POST',
            headers: {
                "client-platform": "browser",
                Authorization: `Bearer ${token}`,
            },
            body: data
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Update a category */
    update: async (id: string, data: CreateCategoryParams) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const { data: response } = await apiRequest(`/categories/update/${id}`, {
            method: 'PATCH',
            headers: {
                "client-platform": "browser",
                Authorization: `Bearer ${token}`
            },
            body: data
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Delete a category */
    delete: async (id: string) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const { data: response } = await apiRequest(`/categories/delete/${id}`, {
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

export default categoriesService
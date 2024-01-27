export type ProductType = {
    id: string,
    title: string,
    price: number,
    imgUrl: string,
    description: string,
    category: string,
    featured: boolean
}

interface CreateProductParams {
    title: string,
    price: number,
    imgUrl: string,
    description: string,
    category: string,
    featured: boolean

}

const productsService = {
    /* Get all products */
    findAll: async () => {
        const { data: response} = await apiRequest("/products/get", {
            method: "GET",
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Get one product by its id */
    findById: async (productId: string) => {
        const { data: response} = await apiRequest(`/products/get/${productId}`, {
            method: "GET",
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Get all the products of a specific category by its id */
    findByCategory: async (categoryId: string) => {
        const { data: response} = await apiRequest(`/products/getByCategory/${categoryId}`, {
            method: "GET",
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Find featured products */
    findFeatured: async () => {
        const { data: response} = await apiRequest("/products/getFeatured", {
            method: "GET",
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Search a product by its name */
    search: async (name: string) => {
        const { data: response} = await apiRequest(`/products/search/${name}`, {
            method: "GET",
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* Create a new product */
    create: async (data: CreateProductParams) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const { data: response} = await apiRequest("/products/create", {
            method: "POST",
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

    /* Update a product */
    update: async (productId: string, data: CreateProductParams) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const { data: response} = await apiRequest(`/products/update/${productId}`, {
            method: "PATCH",
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

    /* Delete a product */
    delete: async (productId: string) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const { data: response} = await apiRequest(`/products/delete/${productId}`, {
            method: "DELETE",
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

export default productsService
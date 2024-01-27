import baseURL from "./api"

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
        const response = await $fetch("/products/get", {
            method: "GET",
            baseURL: baseURL,
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return response
    },

    /* Get one product by its id */
    findById: async (productId: string) => {
        const response = await $fetch(`/products/get/${productId}`, {
            method: "GET",
            baseURL: baseURL,
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return response
    },

    /* Get all the products of a specific category by its id */
    findByCategory: async (categoryId: string) => {
        const response = await $fetch(`/products/getByCategory/${categoryId}`, {
            method: "GET",
            baseURL: baseURL,
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return response
    },

    /* Find featured products */
    findFeatured: async () => {
        const response = await $fetch("/products/getFeatured", {
            method: "GET",
            baseURL: baseURL,
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return response
    },

    /* Search a product by its name */
    search: async (name: string) => {
        const response = await $fetch(`/products/search/${name}`, {
            method: "GET",
            baseURL: baseURL,
            headers: {
                "client-platform": "browser",
            }
        }).catch((err) => {
            return err.response
        })

        return response
    },

    /* Create a new product */
    create: async (data: CreateProductParams) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const response = await $fetch("/products/create", {
            method: "POST",
            baseURL: baseURL,
            headers: {
                "client-platform": "browser",
                Authorization: `Bearer ${token}`
            },
            body: data
        }).catch((err) => {
            return err.response
        })

        return response
    },

    /* Update a product */
    update: async (productId: string, data: CreateProductParams) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const response = await $fetch(`/products/update/${productId}`, {
            method: "PATCH",
            baseURL: baseURL,
            headers: {
                "client-platform": "browser",
                Authorization: `Bearer ${token}`
            },
            body: data
        }).catch((err) => {
            return err.response
        })

        return response
    },

    /* Delete a product */
    delete: async (productId: string) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const response = await $fetch(`/products/delete/${productId}`, {
            method: "DELETE",
            baseURL: baseURL,
            headers: {
                "client-platform": "browser",
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => {
            return err.response
        })

        return response
    }
}

export default productsService
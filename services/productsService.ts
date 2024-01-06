import api from "./api";

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
        const response = api.get("/products/get").catch((err) => {
            return err.response
        })

        return response
    },

    /* Get one product by its id */
    findOne: async (productId: string) => {
        const response = api.get(`/products/get/${productId}`).catch((err) => {
            return err.response
        })

        return response
    },

    /* Get all the products of a specific category by its id */
    findByCategory: async (categoryId: string) => {
        const response = api.get(`/products/getByCategory/${categoryId}`).catch((err) => {
            return err.response
        })

        return response
    },

    /* Search a product by its name */
    search: async (name: string) => {
        const response = api.get(`/products/search?title=${name}`).catch((err) => {
            return err.response
        })

        return response
    },

    /* Create a new product */
    create: async (data: CreateProductParams) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const response = api.post("/products/create", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => {
            return err.response
        })

        return response
    },

    /* Update a product */
    update: async (productId: string, data: CreateProductParams) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const response = api.put(`/products/update/${productId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => {
            return err.response
        })

        return response
    },

    /* Delete a product */
    delete: async (productId: string) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const response = api.delete(`/products/delete/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => {
            return err.response
        })

        return response
    }
}

export default productsService
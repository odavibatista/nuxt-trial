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
    create: (data: any) => api.post("/products/create", data),
}

export default productsService
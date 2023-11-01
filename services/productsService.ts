import api from "./api";

const productsService = {
    /* Get all products */
    findAll: () => api.get("/products"),

    /* Get one product by its id */
    findOne: (id: string) => api.get(`/products/${id}`),

    /* Get all the products of a specific category by its id */
    findByCategory: (id: string) => api.get(`/products/category/${id}`),

    /* Search a product by its name */
    search: (name: string) => api.get(`/products/search/${name}`),
}

export default productsService
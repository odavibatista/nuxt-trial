import api from "./api"

const categoriesService = {
    /* Get all categories */
    findAll: () => api.get("/categories"),

    /* Get one category by its id */
    findOne: (id: string) => api.get(`/categories/${id}`)
}

export default categoriesService
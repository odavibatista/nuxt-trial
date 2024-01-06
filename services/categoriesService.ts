import api from "./api"

interface CreateCategoryParams {
    name: string
    description: string
}

const categoriesService = {
    /* Get all categories */
    findAll: async () => {
        const response = api.get("/categories/get").catch((err) => {
            return err.response
        })

        return response
    },

    /* Get one category by its id */
    findOne: async (id: string) => {
        const response = api.get(`/categories/get/${id}`).catch((err) => {
            return err.response
        })

        return response
    },

    /* Create a new category */
    create: async (data: CreateCategoryParams) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const response = api.post("/categories/create", { name }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => {
            return err.response
        })

        return response
    },

    /* Update a category */
    update: async (id: string, data: CreateCategoryParams) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const response = api.put(`/categories/update/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => {
            return err.response
        })

        return response
    },

    /* Delete a category */
    delete: async (id: string) => {
        // Dummy token, still to be added
        const token = localStorage.getItem("user-token")

        const response = api.delete(`/categories/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((err) => {
            return err.response
        })

        return response
    }
}

export default categoriesService
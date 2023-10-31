import api from "./api"

const categoriesService = {
    findAll: () => api.get("/categories", {
        headers: { 'token': sessionStorage.getItem("token")}
    }),

    findOne: (id: string) => api.get(`/categories/${id}`, {
        headers: { 'token': sessionStorage.getItem("token")}
    })
}

export default categoriesService
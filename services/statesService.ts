import api from "./api";

const statesService = {
    /* Get all states */
    findAll: () => api.get("/states"),

    /* Get one state by its id */
    findOne: (id: string) => api.get(`/states/${id}`)
}

export default statesService
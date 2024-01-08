import api from "./api";

interface subscriptionParams {
    email: string
}

const subscriptionsService = {
    /* Create  a new sub */
    create: async (params: subscriptionParams) => {
        const response = await api.post("/subs/create", params).catch((error) => {
            if (error.response.status === 400 || error.response.status === 401) {
                return error.response;
            }
            return error;
        })
        return response;
    },

    /* Get all the subscriptions */
    findAll: async () => {
        const response = api.get("/subs/get").catch((error) => {
            return error.response
        })

        return response
    },

    /* Delete a subscritpion passing its id */
    delete: async (id: string) => {
        const response = api.delete(`/subs/delete/${id}`).catch((error) => {
            return error.response
        })

        return response
    }
}

export default subscriptionsService
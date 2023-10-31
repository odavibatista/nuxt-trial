import api from "./api";

interface subscriptionParams {
    email: string
}

const subscriptionsService = {
    /* Create  a new sub */
    create: async (params: subscriptionParams) => {
        const res = await api.post("/subscriptions", params).catch((error) => {
            if (error.response.status === 400 || error.response.status === 401) {
                return error.response;
            }
            return error;
        })
        return res;
    }
}

export default subscriptionsService
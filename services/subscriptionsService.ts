interface subscriptionParams {
    email: string
}

const subscriptionsService = {
    /* Create  a new sub */
    create: async (params: subscriptionParams) => {
        const { data: response } = await apiRequest("/subs/create", {
            method: "POST",
            headers: {
                "client-platform": "browser"
            },
            body: params
        }).catch((error) => {
            if (error.response.status === 400 || error.response.status === 401) {
                return error.response;
            }
            return error;
        })

        return toRaw(response.value)
    },

    /* Get all the subscriptions */
    findAll: async () => {
        const { data: response } = await apiRequest("/subs/get", {
            method: "GET",
            headers: {
                "client-platform": "browser"
            }
        }).catch((error) => {
            return error.response
        })

        return toRaw(response.value)
    },

    /* Delete a subscritpion passing its id */
    delete: async (id: string) => {
        const { data: response } = await apiRequest(`/subs/delete/${id}`,   {
            method: "DELETE",
            headers: {
                "client-platform": "browser"
            }
        }).catch((error) => {
            return error.response
        })

        return response
    }
}

export default subscriptionsService
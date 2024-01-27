interface RegisterParams {
    name: string;
    email: string;
    password: string;
}

interface LoginParams {
    email: string;
    password: string;
}

const authService   =   {
    /* User register */
    register: async (params: RegisterParams) => {
        const { data: response } = await apiRequest(`/auth/register`, {
            method: 'POST',
            headers: {
                "client-platform": "browser"
            },
            body: params
        }).catch((err) => {
            return err.response
        })

        return toRaw(response.value)
    },

    /* User login */
    login: async (params: LoginParams) => {
        const { data: response } = await apiRequest("/auth/login", {
            method: "POST",
            headers: {
                "client-platform": "browser"
            },
            body: params
        }).catch((err) => {
            if (err.response.status === 400 || err.response.status === 401) {
                return err.response;
            }

            return err
        })

        console.log(response)
        if (response.status === 200) {
            sessionStorage.setItem("token", response.data.token);
        }
    }
    
}

export default authService
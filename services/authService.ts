import api from "./api"

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
        const response = await api.post("/auth/register", params).catch((error) => {
            if (error.response.status === 400 || error.response.status === 401) {
                return error.response;
            }

            return error;
        })

        return response;
    },

    /* User login */
    login: async (params: LoginParams) => {
        const response = await api.post("/auth/login", params).catch((error) => {

        if (error.response.status === 400 || error.response.status === 401) {
            return error.response;

        }

        return error;

        })

        if (response.status === 200) {
            sessionStorage.setItem("token", response.data.token);
        }

        return response;
    }
}

export default authService
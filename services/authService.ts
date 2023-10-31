import api from "./api"

interface LoginParams {
    email: string;
    password: string;
}

const authService   =   {
    /* User login */
    login: async (params: LoginParams) => {

        const res = await api.post("/auth/login", params).catch((error) => {

        if (error.response.status === 400 || error.response.status === 401) {
            return error.response;

        }

        return error;

        })

        if (res.status === 200) {
            sessionStorage.setItem("token", res.data.token);
        }

        return res;
    }
}

export default authService
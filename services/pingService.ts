import baseURL from './api'

const pingService = async ()    =>  {
    const response = await $fetch("/ping", {
        method: "GET",
        baseURL: baseURL,
        headers: {
            "client-platform": "browser",
        },
    }).catch((err) => {
        return err.response
    })

    return response    
}

export default pingService
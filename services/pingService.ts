const pingService = async ()    =>  {
    const { data: response } = await apiRequest("/ping", {
        method: "GET",
        headers: {
            "client-platform": "browser",
        },
    }).catch((err) => {
        return err.response
    })

    return toRaw(response.value)    
}

export default pingService
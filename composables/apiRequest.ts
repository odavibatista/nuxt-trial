export const apiRequest: typeof useFetch = (request, opts?) => {
    const config = useRuntimeConfig()
  
    return useFetch(request, { 
        baseURL: config.public.baseURL, 
        headers: { 
            "client-platform": "browser",
        }, 
        ...opts 
    })
}
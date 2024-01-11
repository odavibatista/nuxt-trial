import api from './api'

const pingService = async ()    =>  {
    const response = api.get('/ping').catch((err) => {
        return err.response
    })

    return response    
}

export default pingService
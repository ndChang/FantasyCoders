import api from './apiConfig'

export const getCoderByUserId = async () => {
    try {
        const resp = await api.get(`/coders/${id}`)
        return resp.data.import
    } catch (error) {
        throw error
    }
}

export const getRosterFromUser = async () => {
    try {
        const resp = await api.get('/items')
        return resp.data.items
    } catch (error) {
        throw error
    }
}

export const getCoders = async () => {
    try {
        const resp = await api.get('/coders')
        return resp.data.coders
    } catch (error){
        throw(error)
    }
}
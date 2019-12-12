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

export const updateRoster = async () => {
    try {
        const resp = await api.put(`/users:${id}/coders/${id}`)
        return resp.data
    } catch (error){
        throw(error)
    }
}

export const updateCoder = async () => {
    try {
        const resp = await api.put(`/coders/${coder_id}`)
        // body user id
        return resp.data
    } catch (error){
        throw(error)
    }
}
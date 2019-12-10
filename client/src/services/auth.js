import api from './apiConfig'

export const signUp = async credentials => {
    try {
        console.log(credentials)

        const resp = await api.post('/sign-up', credentials)
        console.log(resp)   
        // localStorage.setItem('token', resp.data.token)
        return resp.data
    } catch (error) {
        throw error
    }
}

export const signInUser = async credentials => {
    try {
        const resp = await api.post('/sign-in', credentials)
        localStorage.setItem('token', resp.data.token)
        return resp.data
    } catch (error) {
        throw error
    }
}

export const signOut = async user => {
    try {
        await localStorage.clear()
        return true
    } catch (error) {
        throw error
    }
}
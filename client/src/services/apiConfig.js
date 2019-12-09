import Axios from 'axios'

let apiUrls

const apiUrls = {
    development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost'){
    apiUrl = apiUrls.development 
} else {
    apiUrl = apiUrls.production 
}


const JwtToken = localStorage.getItem('token') || null

const api = Axios.create({
    baseUrl: apiUrl,
    headers:{
        Authorization: `Bearer ${JwtToken}`,
        'Access-Control-Allow-Origin': '*'
    }
})

export default api
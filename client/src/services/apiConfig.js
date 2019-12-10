import Axios from 'axios'

// Grab the JSON Web Token (JWT) from localStorage and set to a variable so we can send the token in the HTTP Header
const jwtToken = localStorage.getItem('token') || null

let apiUrl

const apiUrls = {
  production: 'https://sei-items-api.herokuapp.com/api',
  development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = Axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${jwtToken}`,
    'Access-Control-Allow-Origin': '*'
  }
})

export default api

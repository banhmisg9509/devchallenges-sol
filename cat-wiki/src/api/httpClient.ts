import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': import.meta.env.VITE_API_KEY,
  },
})

httpClient.interceptors.response.use(
  function (value) {
    return value.data
  },
  function (error) {
    return error
  }
)

export default httpClient

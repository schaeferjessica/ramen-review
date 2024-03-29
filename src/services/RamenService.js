import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/schaeferjessica/db-json',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/ramen')
  },
  getEvent(id) {
    return apiClient.get('/ramen/' + id)
  },
}

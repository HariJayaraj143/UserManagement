import axios from 'axios'

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const fetchUsers = () => axios.get(`${API_BASE_URL}/users`)
export const addUser = userData => axios.post(`${API_BASE_URL}/users`, userData)
export const updateUser = (userId, userData) =>
  axios.put(`${API_BASE_URL}/users/${userId}`, userData)
export const deleteUser = userId =>
  axios.delete(`${API_BASE_URL}/users/${userId}`)

import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:5500/',
    headers: {
        'Content-Type': 'application/json',
        Accept:'application/json',
    }
})
// http://127.0.0.1:5500/api/send-otp
// endpoints
export const sendOtp = (data) => api.post('api/send-otp', data)
export const verifyOtp = (data) => api.post('api/verify-otp', data)


export default api;
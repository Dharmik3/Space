import axios from 'axios'

const api = axios.create({
    withCredentials: true,
    // credentials: 'include',

    baseURL: 'http://192.168.126.179:5500',
    // baseURL: 'http://192.168.43.169:5500/',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
})
// http://127.0.0.1:5500/api/send-otp
// endpoints
export const sendOtp = (data) => api.post('api/send-otp', data)
export const verifyOtp = (data) => api.post('api/verify-otp', data)
export const activate = (data) => api.post('api/activate', data)
export const logout = () => api.post('api/logout')


// iterceptors
// place btn req and res
api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const orignalRequest = error.config;

    if (error.response.status === 401 && orignalRequest && !orignalRequest._isRetry) {
        orignalRequest._isRetry = true;
        try {
             await axios.get(`http://192.168.126.179:5500/api/refresh`, {
                withCredentials:true,
            })

            return api.request(orignalRequest);
        } catch (err) {
            console.log(err.message);
        }
    }
    throw error;
})

export default api;
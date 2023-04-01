import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/authSlice';

export function useLoadingWithRefresh() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {

            try {
                const { data } = await axios.get(`http://192.168.126.179:5500/api/refresh`, {
                    withCredentials: true,
                })
                dispatch(setAuth(data));
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
        }
        })();
        // eslint-disable-next-line
    }, [])
    
    return {loading}
}
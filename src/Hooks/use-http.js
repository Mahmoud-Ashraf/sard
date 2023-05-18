import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
// import { modalsActions } from "../store/Modals/Modals";


const useHTTP = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = useSelector(state => {
        return state.auth.token;
    })
    const sendRequest = useCallback(async (requestConfig, applyData, applyError) => {
        setIsLoading(true);
        setError(null);
        let contentTypeHeader = requestConfig.method === 'POST' ? { 'Content-Type': 'application/json' } : {};
        let langHeader = { 'lang': 'ar' };
        let tokenHeader = token ? { 'Authorization': `Bearer ${token}` } : {};
        let baseUrl = process.env.REACT_APP_BASE_URL;
        try {
            const response = await fetch(
                baseUrl + requestConfig.url,
                {
                    method: requestConfig.method,
                    headers: { ...contentTypeHeader, ...langHeader, ...tokenHeader, ...requestConfig.headers },
                    body: (contentTypeHeader && contentTypeHeader['Content-Type'] === 'application/json') ? JSON.stringify(requestConfig.body) : requestConfig.body
                }
            );
            if (!response.ok) {
                if (response.status === 401) {
                }
                throw new Error('Request Failed!');
            }

            const data = await response.json();
            if (data.error) {
                throw new Error(`${data.message}  ${data.errors ? ('(' + data.errors.join(', ') + ')') : ''}`);
            }
            applyData(data);
        } catch (err) {
            setError(err.message);
            applyError(err.message);
        }
        setIsLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);
    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHTTP;
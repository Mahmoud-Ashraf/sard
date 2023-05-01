import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import useHTTP from "../../Hooks/use-http";
import { authActions } from "../../Store/Auth/Auth";
import { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";

const LayoutWrapper = () => {
    const dispatch = useDispatch();
    const { isLoading, sendRequest } = useHTTP();
    const countryCode = useSelector(state => state.auth.countryCode);
    const getGuestToken = () => {
        if (localStorage.getItem('token') && localStorage.getItem('user')) {
            dispatch(authActions.setUser({ token: localStorage.getItem('token'), user: JSON.parse(localStorage.getItem('user')) }));
        }
        else {
            sendRequest(
                {
                    url: 'client/regist_guest',
                    method: 'POST',
                    body: { country_shortcode: countryCode }
                },
                data => {
                    dispatch(authActions.setUser({ token: data.data.api_token, user: data.data }));
                    localStorage.setItem('token', data.data.api_token);
                    localStorage.setItem('user', JSON.stringify(data.data));
                },
                err => {
                }
            )
        }
    }

    const getCurrentLocation = () => {
        fetch('https://ipapi.co/json/', { mehtod: 'GET', })
            .then(res => res.json())
            .then(data => {
                dispatch(authActions.setLocation({ long: data.longitude, lat: data.latitude, countryCode: data.country_code }))
            });
    }
    useEffect(() => {
        getCurrentLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        getGuestToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryCode])
    return (
        isLoading ?
            <Loader />
            :
            <div className="layout-wrapper">
                <Header />
                <Outlet></Outlet>
                <Footer />
            </div>
    )
}

export default LayoutWrapper;
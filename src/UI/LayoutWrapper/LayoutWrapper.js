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
    const { lat, long } = useSelector(state => state.auth);
    const countryCode = useSelector(state => state.auth.countryCode);
    const getGuestToken = () => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if (token && user) {
            dispatch(authActions.setUser({ token, user }));
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
        if (!countryCode) {
            fetch('https://ipapi.co/json/', { mehtod: 'GET' })
                .then(res => res.json())
                .then(data => {
                    dispatch(authActions.setLocation({ long: data.longitude, lat: data.latitude, countryCode: data.country_code }))
                });
        }
    }
    const getWeatherTempreature = () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=d5f4ef18f3ac4a409bf224727230505&q=${lat},${long}&aqi=no
        `)
            .then(res => res.json())
            .then(resualt => {
                dispatch(authActions.setTemperature({ temp: resualt.current.temp_c }))
            })
    }
    useEffect(() => {
        if (long && lat) {
            getWeatherTempreature();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [long, lat]);
    useEffect(() => {
        getCurrentLocation();
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
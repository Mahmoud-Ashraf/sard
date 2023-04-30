import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import useHTTP from "../../Hooks/use-http";
import { authActions } from "../../Store/Auth/Auth";
import { Fragment, useEffect } from "react";
import Loader from "../../Components/Loader/Loader";

const LayoutWrapper = () => {
    const dispatch = useDispatch();
    const { isLoading, error, sendRequest } = useHTTP();
    const token = useSelector(state => {
        return state.auth.token;
    });
    const getGuestToken = () => {
        if (localStorage.getItem('token') || localStorage.getItem('user')) {
            if (localStorage.getItem('token')) {
                dispatch(authActions.setUser({ token: localStorage.getItem('token') }));
            }
            if (localStorage.getItem('user')) {
                dispatch(authActions.setUser({ user: JSON.parse(localStorage.getItem('user')) }));
            }
        }
        else {
            sendRequest(
                {
                    url: 'client/regist_guest',
                    method: 'POST',
                    body: { country_shortcode: 'EG' }
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
    useEffect(() => {
        getGuestToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
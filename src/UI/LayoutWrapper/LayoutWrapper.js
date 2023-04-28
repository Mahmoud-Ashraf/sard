import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import useHTTP from "../../Hooks/use-http";
import { authActions } from "../../Store/Auth/Auth";
import { Fragment, useEffect } from "react";

const LayoutWrapper = () => {
    const dispatch = useDispatch();
    const { isLoading, error, sendRequest } = useHTTP();
    const token = useSelector(state => {
        return state.auth.token;
    });
    const getGuestToken = () => {
        if (localStorage.getItem('token')) {
            dispatch(authActions.setUser({ token: localStorage.getItem('token') }));
        } else {
            sendRequest(
                {
                    url: 'client/regist_guest',
                    method: 'POST',
                    body: { country_shortcode: 'EG' }
                },
                data => {
                    dispatch(authActions.setUser({ token: data.data.api_token }));
                    localStorage.setItem('token', data.data.api_token);
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
        <div className="layout-wrapper">
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    )
}

export default LayoutWrapper;
import { useEffect } from 'react';
import MainBox from '../../UI/MainBox/MainBox';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../Store/Auth/Auth';
import useHTTP from '../../Hooks/use-http';
import { Outlet, useNavigate } from 'react-router-dom';

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { sendRequest } = useHTTP();
    const countryCode = useSelector(state => state.auth.countryCode);
    const logo = require('../../assets/images/logo-red.webp');
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        console.log(user);
        if (user.name) {
            navigate('/home');
        }
        // getCurrentLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        getGuestToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryCode]);

    // const getCurrentLocation = () => {
    //     fetch('https://ipapi.co/json/', { mehtod: 'GET' })
    //         .then(res => res.json())
    //         .then(data => {
    //             dispatch(authActions.setLocation({ long: data.longitude, lat: data.latitude, countryCode: data.country_code }))
    //         });
    // }
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
    return (
        <div className="auth-section">
            <MainBox>
                <div className='auth-section-content'>
                    <header className="stepper-header">
                        <img className='stepper-header-logo' src={logo} alt='sard logo' />
                        <div className="stepper-header-back" onClick={() => navigate(-1)}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </div>
                    </header>
                    <Outlet />
                </div>
            </MainBox>
        </div>
    )
}

export default Auth;
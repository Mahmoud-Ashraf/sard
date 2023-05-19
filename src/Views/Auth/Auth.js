import { useEffect } from 'react';
import MainBox from '../../UI/MainBox/MainBox';
import Register from '../../Components/Register/Register';
import EmailVerify from '../../Components/EmailVerify/EmailVerify';
import Stepper from '../../UI/Stepper/Stepper';
import { useDispatch, useSelector } from 'react-redux';
import { StepperActions } from '../../Store/Stepper/Stepper';
import { authActions } from '../../Store/Auth/Auth';
import SelectCountries from '../../Components/SelectCountries/SelectCountries';
import SelectCategories from '../../Components/SelectCategories/SelectCategories';
import SelectResourcesType from '../../Components/SelectResourcesType/SelectResourcesType';
import SelectResources from '../../Components/SelectResources/SelectResources';
import useHTTP from '../../Hooks/use-http';

const Auth = () => {
    const dispatch = useDispatch();
    const { sendRequest } = useHTTP();
    const countryCode = useSelector(state => state.auth.countryCode);

    useEffect(() => {
        getCurrentLocation();
        dispatch(StepperActions.setSteps(
            [
                <Register />,
                <EmailVerify />,
                <SelectResourcesType />,
                <SelectCountries />,
                <SelectCategories />,
                <SelectResources />
            ]
        ));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getGuestToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryCode]);

    const getCurrentLocation = () => {
        fetch('https://ipapi.co/json/', { mehtod: 'GET' })
            .then(res => res.json())
            .then(data => {
                dispatch(authActions.setLocation({ long: data.longitude, lat: data.latitude, countryCode: data.country_code }))
            });
    }
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
                    <Stepper />
                </div>
            </MainBox>
        </div>
    )
}

export default Auth;
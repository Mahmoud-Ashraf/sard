import { useEffect } from 'react';
import MainBox from '../../UI/MainBox/MainBox';
import Register from '../../Components/Register/Register';
import EmailVerify from '../../Components/EmailVerify/EmailVerify';
import Stepper from '../../UI/Stepper/Stepper';
import { useDispatch } from 'react-redux';
import { StepperActions } from '../../Store/Stepper/Stepper';
import { authActions } from '../../Store/Auth/Auth';
import SelectCountries from '../../Components/SelectCountries/SelectCountries';
import SelectCategories from '../../Components/SelectCategories/SelectCategories';
import SelectResourcesType from '../../Components/SelectResourcesType/SelectResourcesType';
import SelectResources from '../../Components/SelectResources/SelectResources';

const Auth = () => {
    const dispatch = useDispatch();
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
    }, [])
    const getCurrentLocation = () => {
        fetch('https://ipapi.co/json/', { mehtod: 'GET' })
            .then(res => res.json())
            .then(data => {
                dispatch(authActions.setLocation({ long: data.longitude, lat: data.latitude, countryCode: data.country_code }))
            });
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
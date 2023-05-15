import { useEffect, useState } from 'react';
import MainBox from '../../UI/MainBox/MainBox';
import Register from '../../Components/Register/Register';
import EmailVerify from '../../Components/EmailVerify/EmailVerify';
import Stepper from '../../UI/Stepper/Stepper';
import { useDispatch, useSelector } from 'react-redux';
import { StepperActions } from '../../Store/Stepper/Stepper';

const Auth = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(StepperActions.setSteps(
            [
                <Register />,
                <EmailVerify />
            ]
        ));
    }, [])
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
import { Fragment, useEffect, useState } from 'react';
import Translate from '../../helpers/Translate/Translate';
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { StepperActions } from '../../Store/Stepper/Stepper';
import useHTTP from '../../Hooks/use-http';
import { authActions } from '../../Store/Auth/Auth';
import { useNavigate } from 'react-router-dom';

const EmailVerify = (props) => {
    const dispatch = useDispatch();
    const { error, sendRequest } = useHTTP();
    const [OTP, setOTP] = useState("");
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
    // const onNext = () => {
    //     dispatch(StepperActions.nextStep());

    // }

    const verifyMail = (e) => {
        e.preventDefault()
        sendRequest(
            {
                url: 'client/verify_email_code',
                method: 'POST',
                body: { code: OTP }
            },
            data => {
                dispatch(authActions.setUser({ token: data.data.api_token, user: data.data }));
                localStorage.setItem('token', data.data.api_token);
                localStorage.setItem('user', JSON.stringify(data.data));
                navigate('/auth/resources-type');
                // onNext();
            },
            err => {

            }
        )
    }
    return (
        user.email_verified ?
            <div className='email-verify'>
                <header>
                    <h2 className="step-header"><Translate id="هذا الحساب تم تفعيله من قبل" /></h2>
                </header>
                <div className='row'>
                    <div className='col-md-3 mt-5'>
                        <button className='w-100 main-button' type='button' onClick={() => navigate('/auth/resources-type')}>التالي</button>
                    </div>
                </div>
            </div>
            :
            <div className="email-verify">
                <header>
                    <h2 className="step-header"><Translate id="titles.email-verify" /></h2>
                </header>
                <form className='email-verify-form' onSubmit={verifyMail}>
                    <div className='row flex-column'>
                        <Fragment>
                            <div className='col-md-6 d-flex justify-content-start'>
                                <OtpInput
                                    value={OTP}
                                    onChange={setOTP}
                                    numInputs={4}
                                    inputType="number"
                                    containerStyle="flex-row-reverse"
                                    inputStyle="sard-input"
                                    shouldAutoFocus={true}
                                    renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
                                    renderInput={(props) => <input {...props} />}
                                />
                            </div>
                            <div className='sard-input-error'>
                                {error}
                            </div>
                        </Fragment>
                        <div className='col-md-3 mt-5'>
                            <button className='w-100 main-button' type='submit'>التالي</button>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default EmailVerify;
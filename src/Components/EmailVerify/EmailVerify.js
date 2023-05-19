import { useEffect, useState } from 'react';
import Translate from '../../helpers/Translate/Translate';
import OtpInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { StepperActions } from '../../Store/Stepper/Stepper';
import useHTTP from '../../Hooks/use-http';
import { authActions } from '../../Store/Auth/Auth';

const EmailVerify = (props) => {
    const dispatch = useDispatch();
    const { error, sendRequest } = useHTTP();
    const [OTP, setOTP] = useState("");
    const onNext = () => {
        dispatch(StepperActions.nextStep());

    }

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
                onNext();
            },
            err => {
                
            }
        )
    }
    return (
        <div className="email-verify">
            <header>
                <h2 className="step-header"><Translate id="titles.email-verify" /></h2>
            </header>

            <form className='email-verify-form' onSubmit={verifyMail}>
                <div className='row flex-column'>
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
                    <div className='col-md-3 mt-5'>
                        <button className='w-100 main-button' type='submit'>التالي</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EmailVerify;
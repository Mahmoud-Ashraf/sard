import { useEffect, useState } from 'react';
import Translate from '../../helpers/Translate/Translate';
import OtpInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { StepperActions } from '../../Store/Stepper/Stepper';
import useHTTP from '../../Hooks/use-http';
import { authActions } from '../../Store/Auth/Auth';

const EmailVerify = (props) => {
    const dispatch = useDispatch();
    const { sendRequest } = useHTTP();
    const [OTP, setOTP] = useState("");
    const onNext = () => {
        dispatch(StepperActions.nextStep());

    }
    useEffect(() => {
        console.log(OTP);
    }, [OTP]);

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
                    <div className='col-md-6'>
                        <OtpInput
                            value={OTP}
                            onChange={setOTP}
                            numInputs={4}
                            renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
                            renderInput={(props) => { console.log(props); return <input className='sard-input' {...props} /> }}
                        />
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
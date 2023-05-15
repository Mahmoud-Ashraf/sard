import { useEffect, useState } from 'react';
import Translate from '../../helpers/Translate/Translate';
import OtpInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { StepperActions } from '../../Store/Stepper/Stepper';

const EmailVerify = (props) => {
    const dispatch = useDispatch();
    const [OTP, setOTP] = useState("");
    const onNext = (e) => {
        e.preventDefault();
        dispatch(StepperActions.nextStep());

    }
    useEffect(() => {
        console.log(OTP);
    }, [OTP])
    return (
        <div className="email-verify">
            <header>
                <h2 className="step-header"><Translate id="titles.email-verify" /></h2>
            </header>

            <form className='email-verify-form'>
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
                        <button className='w-100 main-button' type='submit' onClick={onNext}>التالي</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EmailVerify;
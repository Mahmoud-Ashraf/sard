import { useDispatch } from 'react-redux';
import Translate from '../../helpers/Translate/Translate';
import { StepperActions } from '../../Store/Stepper/Stepper';

const Register = (props) => {
    const dispatch = useDispatch();
    const onNext = (e) => {
        e.preventDefault();
        dispatch(StepperActions.nextStep());
    }
    return (
        <div className="register">
            <header>
                <h2 className="step-header"><Translate id="titles.register" /></h2>
            </header>

            <form className='register-form'>
                <div className='row flex-column gy-2'>

                    <div className='col-md-6'>
                        <input type='text' name='name' placeholder="الاسم" />
                    </div>
                    <div className='col-md-6'>
                        <input type='email' name='email' placeholder="البريد الالكتروني" />
                    </div>
                    <div className='col-md-6'>
                        <input type='tel' name='phone' placeholder="الجوال" />
                    </div>
                    <div className='col-md-6'>
                        <input type='date' name='birthdate' placeholder="تاريخ الميلاد" />
                    </div>
                    <div className='col-md-6'>
                        <input type='password' name='password' placeholder="كلمة المرور" />
                    </div>
                    <div className='col-md-6'>
                        <input type='password' name='confirm-password' placeholder="تأكيد كلمة المرور" />
                    </div>
                    <div className='col-md-6'>
                        <select name='sex'>
                            <option>ذكر</option>
                            <option>انثى</option>
                        </select>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <button className='w-100 main-button' type='submit' onClick={onNext}>التالي</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Register;
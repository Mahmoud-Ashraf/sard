import { useDispatch } from 'react-redux';
import Translate from '../../helpers/Translate/Translate';
import { StepperActions } from '../../Store/Stepper/Stepper';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useHTTP from '../../Hooks/use-http';
import { authActions } from '../../Store/Auth/Auth';

const Register = (props) => {
    const dispatch = useDispatch();
    const { sendRequest } = useHTTP();
    const onNext = (e) => {
        dispatch(StepperActions.nextStep());
    }
    const register = (data) => {
        sendRequest(
            {
                url: 'client/register',
                method: 'POST',
                body: data
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
        <div className="register">
            <header>
                <h2 className="step-header"><Translate id="titles.register" /></h2>
            </header>
            <Formik
                initialValues={{ name: '', mobile: '', email: '', password: '', confirm_password: '', birthdate: '', sex: '' }}
                validationSchema={Yup.object({
                    name: Yup.string().trim().lowercase()
                        .min(3, 'Must be 3 characters or more')
                        .max(40, 'Must be 40 characters or less')
                        .matches(/[a-zA-Zء-ي]/, 'name can only contain Latin or arabic letters.')
                        .required('Name is Required'),
                    mobile: Yup.string()
                        .min(10, 'Must be 10 or 11 numbers')
                        .max(11, 'Must be 10 or 11 numbers'),
                    email: Yup.string().email('Invalid email address').required('Email is Required'),
                    password: Yup.string()
                        .min(8, 'password Must be 8 characters or more')
                        .matches(/[a-zA-Z0-9&*%@$!+?.]/, 'Password can contain only english letters, numbers, &, *, %, @, $, !, +, ?, and .')
                        .required('Password is Required'),
                    confirm_password: Yup.string()
                        .oneOf([Yup.ref('password')], 'Passwords must match')
                        .required('Confirm password is Required'),
                    birth_date: Yup.date()
                        .max(new Date(), 'Birthdate can\'t be greater than today')
                        .min(new Date('1-1-1900'), 'Birthdate can\'t be less than 1-1-1900')
                        .required('Birthdate is Required'),
                    gender: Yup.string()
                        .min(4, 'gender Must be male or female')
                        .max(6, 'gender Must be male or female')
                        .required('Gender is Required')
                })}
                onSubmit={(values) => {
                    register(values);
                }}
            >
                <Form className='register-form'>
                    <div className='row flex-column gy-2'>

                        <div className='col-md-6'>
                            <Field className="sard-input" placeholder="الاسم" name="name" type="text" />
                            <div className='sard-input-error'>
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Field className="sard-input" placeholder="البريد الالكتروني" name="email" type="email" />
                            <div className='sard-input-error'>
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Field className="sard-input" placeholder="الجوال" name="mobile" type="tel" />
                            <div className='sard-input-error'>
                                <ErrorMessage name="mobile" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Field className="sard-input" placeholder="تاريخ الميلاد" name="birth_date" type="date" />
                            <div className='sard-input-error'>
                                <ErrorMessage name="birth_date" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Field className="sard-input" placeholder="كلمة المرور" name="password" type="password" />
                            <div className='sard-input-error'>
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Field className="sard-input" placeholder="تاكيد كلمة المرور" name="confirm_password" type="password" />
                            <div className='sard-input-error'>
                                <ErrorMessage name="confirm_password" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Field className="sard-input" name="gender" as="select">
                                <option value="">اختر النوع</option>
                                <option value="male">ذكر</option>
                                <option value="female">انثى</option>
                            </Field>
                            <div className='sard-input-error'>
                                <ErrorMessage name="gender" />
                            </div>
                        </div>
                        <div className='col-md-3 mt-5'>
                            <button className='w-100 main-button' type='submit'>التالي</button>
                        </div>

                    </div>
                </Form>
            </Formik>

        </div>
    )
}

export default Register;
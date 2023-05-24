import { useDispatch } from "react-redux";
import useHTTP from "../../Hooks/use-http";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../Store/Auth/Auth";
import Loader from "../Loader/Loader";
import Translate from "../../helpers/Translate/Translate";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

const Login = () => {
    const dispatch = useDispatch();
    const { isLoading, error, sendRequest } = useHTTP();
    const navigate = useNavigate();

    const login = (data) => {
        sendRequest(
            {
                url: 'client/login',
                method: 'POST',
                body: data
            },
            data => {
                dispatch(authActions.setUser({ token: data.data.api_token, user: data.data }));
                localStorage.setItem('token', data.data.api_token);
                localStorage.setItem('user', JSON.stringify(data.data));
                navigate('/home');
            },
            err => {

            }
        )
    }

    return (
        isLoading ?
            <Loader />
            :
            <div className="register">
                <header>
                    <h2 className="step-header"><Translate id="titles.login" /></h2>
                </header>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={Yup.object(
                        {
                            email: Yup.string().email('Invalid email address').required('Email is Required'),
                            password: Yup.string()
                                .matches(/[a-zA-Z0-9&*%@$!+?.]/, 'Invalid password')
                                .required('Password is Required')
                        }
                    )}
                    onSubmit={(values) => {
                        login(values);
                    }}
                >
                    <Form className="register-form">
                        <div className="row flex-column gy-2">


                            <div className="col-md-6">
                                <Field className="sard-input" placeholder="البريد الالكتروني" name="email" type="email" />
                                <div className="sard-input-error">
                                    <ErrorMessage name="email" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Field className="sard-input" placeholder="كلمة المرور" name="password" type="password" />
                                <div className="sard-input-error">
                                    <ErrorMessage name="password" />
                                </div>
                            </div>
                            <div className="sard-input-error">
                                {error}
                            </div>
                            <div className="col-md-3 mt-5">
                                <button className="w-100 main-button" type="submit"><Translate id="buttons.login" /></button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
    )
}

export default Login;
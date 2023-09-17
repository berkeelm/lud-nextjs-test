import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { storeActivityIndicator } from "../../redux/reducers/authSlice";
import { toast } from 'react-hot-toast'
import { SecurityManagementService } from "../../services/securitymanagement";
import { RegisterResponse } from "../../models/response/securitymanagement/register-response";
import { Helpers } from "../../helpers/Helpers";
import { useRouter } from 'next/router'
import bg from '../../assets/images/bg/2425106_13323.jpg';

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const router = useRouter()


    const onSubmit = (e: any) => {
        e.preventDefault();
        register();
    }

    const navigate = (_url: string) => {
        router.push(_url);
    }

    const register = async () => {
        try {
            if (password1 !== password2) {
                toast.error('Passwords do not match.')
                return;
            }
            dispatch(storeActivityIndicator(true))

            var response: RegisterResponse = await SecurityManagementService.Register(Helpers.removeHtmlFromString(username), Helpers.removeHtmlFromString(mail), Helpers.removeHtmlFromString(password1), Helpers.removeHtmlFromString(phone));


            if (response.body.isSuccess) {
                toast.success(response.body.message)
                navigate('/login')
            }
            else {
                toast.error(response.body.message)
            }
        } catch (error: any) {
            toast.error(error)
        }
        finally {
            dispatch(storeActivityIndicator(false))
        }
    }

    return (
        <div className="main-content- bg-img" style={{ backgroundImage: 'url(' + bg.src + ')' }}>

            <div className="container h-100">

                <div className="row h-100 align-items-center justify-content-center">

                    <div className="col-md-8 col-lg-5">

                        <div className="middle-box mt-60 login-bg">
                            <div className="col-12 col-md-12 col-lg-12 col-xl-12 px-lg-12 my-5">
                                <div className="login-signup-wrap px-4 px-lg-5 pt-20 my-5">

                                    <h1 className="text-center mb-1">
                                        Signup
                                    </h1>


                                    <p className="text-muted text-center mb-5">
                                        Free access to our dashboard.
                                    </p>


                                    <form onSubmit={onSubmit} className="login-signup-form">
                                        <div className="form-group">

                                            <label className="pb-1">
                                                Username
                                            </label>

                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <i className="ri-user-line color-primary"></i>
                                                </div>
                                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" placeholder="Enter your username" required />
                                            </div>
                                        </div>

                                        <div className="form-group">

                                            <label className="pb-1">
                                                Email Address
                                            </label>

                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <i className="ri-mail-line color-primary"></i>
                                                </div>
                                                <input value={mail} onChange={(e) => setMail(e.target.value)} type="email" className="form-control" placeholder="name@address.com" required />
                                            </div>
                                        </div>

                                        <div className="form-group">

                                            <label className="pb-1">
                                                Phone
                                            </label>

                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <i className="ri-phone-line color-primary"></i>
                                                </div>
                                                <input maxLength={12} value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="form-control" pattern="[0-9]{12}" placeholder="90xxxxxxxxxx" required />
                                            </div>
                                        </div>

                                        <div className="form-group">

                                            <label className="pb-1">
                                                Password
                                            </label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <i className="ri-lock-line color-primary"></i>
                                                </div>
                                                <input value={password1} onChange={(e) => setPassword1(e.target.value)} type="password" className="form-control" placeholder="Enter your password" required />
                                            </div>
                                        </div>

                                        <div className="form-group">

                                            <label className="pb-1">
                                                Password Again
                                            </label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <i className="ri-lock-line color-primary"></i>
                                                </div>
                                                <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" className="form-control" placeholder="Enter your password again" required />
                                            </div>
                                        </div>

                                        {/* <div className="form-check d-flex align-items-center text-center">
                                            <input type="checkbox" className="form-check-input mt-0 mr-3" id="exampleCheck1" />
                                            <label className="form-check-label small" htmlFor="exampleCheck1">I agree your
                                                <a href="register.html#">terms and conditions</a></label>
                                        </div> */}

                                        <button className="btn btn-lg btn-block solid-btn-login border-radius mt-4 mb-3">
                                            Sign Up
                                        </button>

                                        <div className="text-center pb-20">
                                            <small className="text-muted text-center">
                                                Already have an account?&nbsp;
                                                <a href="javascript:;" onClick={() => navigate('/login')}>Sign in</a>.
                                            </small>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen;
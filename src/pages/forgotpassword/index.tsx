import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from 'react-hot-toast'
import { storeActivityIndicator } from "../../redux/reducers/authSlice";
import { SecurityManagementService } from "../../services/securitymanagement";
import { ForgotPasswordRequest } from "../../models/request/securitymanagement/forgot-password-request";
import SweetAlert from "react-bootstrap-sweetalert";
import { ForgotPasswordResponse } from "../../models/response/securitymanagement/forgot-password-response";
import { Helpers } from "../../helpers/Helpers";
import { useRouter } from 'next/router'
import bg from '../../assets/images/bg/2425106_13323.jpg';

const ForgotPasswordScreen = () => {
    const dispatch = useDispatch();

    const router = useRouter()
    const navigate = (_url: string) => {
        router.push(_url);
    }

    const [username, setUsername] = useState('');
    const [mailSended, setMailSended] = React.useState<boolean>(false);

    const onSubmit = (e: any) => {
        e.preventDefault();
        forgotPassword();
    }

    const closeSweetAlert = async () => {
        setMailSended(false);
        navigate('/login');
    }

    const forgotPassword = async () => {
        try {
            dispatch(storeActivityIndicator(true));

            const forgotPasswordRequest: ForgotPasswordRequest = {
                userName: Helpers.removeHtmlFromString(username)
            }

            var response: ForgotPasswordResponse = await SecurityManagementService.ForgotPassword(forgotPasswordRequest);
            if (response.header.isSuccess) {
                setMailSended(true);
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
                                        Forgot Password
                                    </h1>
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
                                        <button className="btn btn-lg btn-block solid-btn-login border-radius mt-4">
                                            Reset Password
                                        </button>
                                        <p>&nbsp;</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                mailSended ?
                    (
                        <SweetAlert
                            success
                            title="Reset password link sended to your e-mail!"
                            onConfirm={closeSweetAlert}
                        />
                    ) :
                    (
                        <React.Fragment></React.Fragment>
                    )
            }
        </div>
    )
}

export default ForgotPasswordScreen;

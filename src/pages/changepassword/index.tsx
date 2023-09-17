import { useEffect, useState } from "react";
import bg from '../../assets/images/bg/2425106_13323.jpg';
import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
import { storeActivityIndicator } from "@/redux/reducers/authSlice";
import { ChangePasswordRequest } from "@/models/request/securitymanagement/change-password-request";
import { Helpers } from "@/helpers/Helpers";
import { SecurityManagementService } from "@/services/securitymanagement";
import { SignInResponse } from "@/models/response/securitymanagement/sign-in-response";
import { toast } from 'react-hot-toast'

const ChangePasswordScreen = () => {

    const dispatch = useDispatch();
    const router = useRouter()
    const { id }: any = router.query

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        changePassword();
    }

    const navigate = (_url: string) => {
        router.push(_url);
    }

    const changePassword = async () => {
        try {
            if (password1 != password2) {
                toast.error('Passwords do not match.')
                return;
            }
            dispatch(storeActivityIndicator(true));

            const changePasswordRequest: ChangePasswordRequest = {
                code: Helpers.removeHtmlFromString(id ? id : ""),
                newPassword: password1
            }

            var response: SignInResponse = await SecurityManagementService.ChangePassword(changePasswordRequest);

            if (response.body.isSuccess) {
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
                                        Forgot Password
                                    </h1>
                                    <form onSubmit={onSubmit} className="login-signup-form">
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
                                        <button className="btn btn-lg btn-block solid-btn-login border-radius mt-4 mb-3">
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
        </div>
    )
}

export default ChangePasswordScreen;

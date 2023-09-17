import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from 'react-hot-toast'
import { storeActivityIndicator, storeUser, UserModel } from "../../redux/reducers/authSlice";
import { SecurityManagementService } from "../../services/securitymanagement";
import { SignInResponse } from "../../models/response/securitymanagement/sign-in-response";
import { GetUserResponse } from "../../models/response/securitymanagement/get-user-response";
import { GetTokenResponse } from "../../models/response/securitymanagement/get-token-response";
import ExpireStorage from "../../helpers/ExpireStorage";
import { Helpers } from "../../helpers/Helpers";
import { useRouter } from 'next/router'
import bg from '../../assets/images/bg/2425106_13323.jpg';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const router = useRouter()


    const navigate = (_url: string) => {
        router.push(_url);
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        login();
    }

    const login = async () => {
        try {
            dispatch(storeActivityIndicator(true))

            var response: SignInResponse = await SecurityManagementService.SignIn(Helpers.removeHtmlFromString(username), Helpers.removeHtmlFromString(password));

            //console.log("response", JSON.stringify(response));

            if (response.body.isSuccess) {

                var token = await ExpireStorage.getItem(Helpers.getStorageKeys()[1]);
                if (!token) {
                    var getTokenResponse: GetTokenResponse = await SecurityManagementService.GetToken();

                    //console.log("getTokenResponse", JSON.stringify(getTokenResponse));

                    var access_token = getTokenResponse.access_token;
                    var expiryInMinutes = getTokenResponse.expires_in;

                    await ExpireStorage.setItem(Helpers.getStorageKeys()[1], access_token, expiryInMinutes);
                }

                var getUserResponse: GetUserResponse = await SecurityManagementService.GetUserByUserName(username);

                //console.log("getUserResponse", JSON.stringify(getUserResponse));

                var userObj: UserModel = {
                    id: getUserResponse.body.id,
                    email: getUserResponse.body.email,
                    phone: getUserResponse.body.phoneNumber,
                    username: getUserResponse.body.userName
                }

                await ExpireStorage.setItem(Helpers.getStorageKeys()[0], JSON.stringify(userObj), 3600);

                dispatch(storeUser({ isLoading: false, user: userObj }));

                navigate('/dashboard')
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
                                        Sign In
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


                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col">
                                                    <label className="pb-1">Password</label>
                                                </div>

                                            </div>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <i className="ri-lock-line color-primary"></i>
                                                </div>
                                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter your password" required />
                                            </div>
                                            <div className="row">
                                                <div className="col-auto">
                                                    <a href="javascript:;" onClick={() => navigate('/forgotpassword')} className="form-text small text-muted">
                                                        Forgot password?
                                                    </a>
                                                </div>
                                            </div>
                                        </div>


                                        <button className="btn btn-lg btn-block solid-btn-login border-radius mt-4 mb-3">
                                            Sign In
                                        </button>


                                        <div className="text-center pb-20">
                                            <small className="text-muted text-center">
                                                Don't have an account?&nbsp;
                                                <a href="javascript:;" onClick={() => navigate('/register')}>Sign Up</a>.
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

export default LoginScreen;
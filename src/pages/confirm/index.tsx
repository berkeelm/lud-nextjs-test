"use client";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import Layout from "../../layouts/Layout";
import { useDispatch } from "react-redux";
import { storeActivityIndicator } from "../../redux/reducers/authSlice";
import { SecurityManagementService } from "../../services/securitymanagement";
import { toast } from 'react-hot-toast';
import { ConfirmResponse } from "../../models/response/securitymanagement/confirm-response";
import { useRouter } from 'next/router'

const ConfirmPage = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const navigate = (_url: string) => {
        router.push(_url);
    }

    const { id } = router.query

    const [confirmed, setConfirmed] = React.useState<boolean | undefined>(undefined);

    useEffect(() => {
        if (id)
            Confirm(id);
    }, [])

    const Confirm = async (_id: any) => {
        try {
            dispatch(storeActivityIndicator(true));
            var confirmResponse: ConfirmResponse = await SecurityManagementService.ConfirmAccount(_id);

            if (confirmResponse != null && confirmResponse.header.isSuccess && confirmResponse.body.isSuccess) {
                setConfirmed(true);
            }
            else {
                setConfirmed(false);
            }
        } catch (error: any) {
            toast.error(error)
        }
        finally {
            dispatch(storeActivityIndicator(false))
        }
    }

    return (
        <Layout>
            <PageHeader
                title="Confirm Account"
                desc=""
            />
            <hr />
            <section className="article-area pt-100 pb-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="article-content">
                                {
                                    confirmed !== undefined && (
                                        <React.Fragment>
                                            {
                                                confirmed
                                                    ?
                                                    (
                                                        <React.Fragment>
                                                            <p>Your account has been activated. Please login.</p>
                                                            <br />
                                                            <a href="javascript:;" style={{ cursor: "pointer" }} onClick={() => navigate('/login')}><i className="las la-user"></i>Login</a>
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                        </React.Fragment>
                                                    )
                                                    :
                                                    (
                                                        <React.Fragment>
                                                            <p>Something wrong while activating your account! Please contact with us.</p>
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                        </React.Fragment>
                                                    )
                                            }
                                        </React.Fragment>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ConfirmPage;

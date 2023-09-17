import DashboardNavList from "@/components/DashboardNavList";
import LoggedInOnly from "@/components/LoggedInOnly";
import React from "react";
import { useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader";

import Layout from "../../layouts/Layout";
import { RootState } from "../../redux/store";


const DashboardPage = () => {
    const auth = useSelector((state: RootState) => state.auth)

    return (
        <LoggedInOnly>
            <Layout>
                <PageHeader
                    title="Dashboard"
                    desc=""
                />
                <hr />
                <div className="images pt-50 pb-50">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <DashboardNavList />
                            </div>
                            <div className="col-md-8">
                                <div className="changelog-item wow fadeInUp  delay-4s animated p-4">
                                    <h5 className="title mb-0">Account</h5>

                                    <hr className="mt-3 mb-3" />

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Username</label>
                                        <input type="text" className="form-control" value={auth.user.user?.username} disabled />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email Address</label>
                                        <input type="text" className="form-control" value={auth.user.user?.email} disabled />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Phone</label>
                                        <input type="text" className="form-control" value={auth.user.user?.phone} disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </LoggedInOnly>
    )
}

export default DashboardPage;
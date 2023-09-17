import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-hot-toast';
import SweetAlert from 'react-bootstrap-sweetalert';
import Select, { MultiValue } from 'react-select';
import PageHeader from "@/components/PageHeader";
import { RootState } from "@/redux/store";
import { GetClientByClientIdResponse } from "@/models/response/securitymanagement/get-client-by-client-id-response";
import { SecurityManagementService } from "@/services/securitymanagement";
import { CreateClientRequest } from "@/models/request/securitymanagement/create-client-request";
import { CreateClientResponse } from "@/models/response/securitymanagement/create-client-response";
import { DeleteClientRequest } from "@/models/request/securitymanagement/delete-client-request";
import { DeleteClientResponse } from "@/models/response/securitymanagement/delete-client-response";
import DashboardNavList from "@/components/DashboardNavList";
import Layout from "@/layouts/Layout";
import { storeActivityIndicator } from "@/redux/reducers/authSlice";
import LoggedInOnly from "@/components/LoggedInOnly";

const EndpointsPage = () => {
    const dispatch = useDispatch();


    const [clientSecret, setClientSecret] = React.useState('');

    const [apiScopes, setApiScopes] = useState<MultiValue<OptionType>>([]);
    const [hasData, setHasData] = React.useState<boolean | undefined>(undefined);
    const [alert, setAlert] = React.useState<boolean>(false);
    const [dataClientId, setDataClientId] = React.useState('');
    const [dataClientPassword, setDataClientPassword] = React.useState('');
    const [dataScopes, setDataScopes] = React.useState('');


    const auth = useSelector((state: RootState) => state.auth);
    const clientId = auth.user.user?.id;

    useEffect(() => {
        getClientByClientId();
    }, [])

    const getClientByClientId = async () => {
        try {
            dispatch(storeActivityIndicator(true));
            var getClientByClientIdResponse: GetClientByClientIdResponse = await SecurityManagementService.GetClientByClientId(clientId);

            if (getClientByClientIdResponse != null && getClientByClientIdResponse.header.isSuccess) {
                setHasData(true);
                setDataClientId(getClientByClientIdResponse.body.clientId);
                setDataClientPassword("[Created By You]");
                setDataScopes(getClientByClientIdResponse.body.scopes);
            }
            else {
                setHasData(false);
            }
        } catch (error: any) {
            toast.error(error)
        }
        finally {
            dispatch(storeActivityIndicator(false))
        }
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        createClient();
    }

    const closeSweetAlert = async () => {
        setAlert(false);
    }

    const createClient = async () => {
        try {
            dispatch(storeActivityIndicator(true));

            const createClientRequest: CreateClientRequest = {
                clientId: clientId,
                clientSecret: clientSecret,
                apiScopes: apiScopes.map(x => x.value)
            }

            var response: CreateClientResponse = await SecurityManagementService.CreateClient(createClientRequest)

            if (response.body.isSuccess) {
                getClientByClientId();
            }
            else {
                toast.error(response.body.message)
            }
        } catch (error: any) {
            toast.error(error)
        }
        finally {
            dispatch(storeActivityIndicator(false));
            closeSweetAlert();
        }
    }

    const deleteClient = async () => {
        try {
            dispatch(storeActivityIndicator(true));

            const deleteClientRequest: DeleteClientRequest = {
                clientId: clientId
            }

            var response: DeleteClientResponse = await SecurityManagementService.DeleteClient(deleteClientRequest)
            if (response.body.isSuccess) {
                getClientByClientId();
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

    type OptionType = {
        value: string;
        label: string;
    };

    const options: OptionType[] = [
        { value: 'AddressManagement', label: 'AddressManagement' },
        { value: 'FinanceManagement', label: 'FinanceManagement' }
    ]

    return (
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
                            {
                                hasData !== undefined && (
                                    <React.Fragment>
                                        {
                                            hasData
                                                ?
                                                (
                                                    <div className="changelog-item wow fadeInUp  delay-4s animated p-4">
                                                        <h5 className="left-content float-left title mb-0">Endpoints</h5>
                                                        <a href="javascript:;" onClick={() => setAlert(true)} className="right-content float-right btn btn-icon btn-primary btn-danger"><i className="ri-delete-bin-7-line"></i></a>
                                                        <br />
                                                        <hr className="mt-3 mb-3" />
                                                        <table className="table table-borderless">
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">client_id</th>
                                                                    <td>: {dataClientId}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">client_secret</th>
                                                                    <td>: {dataClientPassword}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">scope (only one)</th>
                                                                    <td>: {dataScopes}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <hr className="mt-3 mb-3" />
                                                        <h6 className="pt-20">Get Token Request:</h6>
                                                        <div className="code-toolbar">
                                                            <pre className=" language-curl">
                                                                <code className="language-curl" id="copy">
                                                                    {`  curl --location 'https://auth.lookupdatas.com/connect/token' \

--header 'Content-Type: application/x-www-form-urlencoded' \

--data-urlencode 'grant_type=client_credentials' \

--data-urlencode 'client_id=${dataClientId}'  \

--data-urlencode 'client_secret=${dataClientPassword}' \

--data-urlencode 'scope=${dataScopes.split(',')[0]}'`}
                                                                </code>
                                                            </pre>
                                                        </div>
                                                        <div className="alert alert-icon alert-warning" role="alert">
                                                            <i className="ri-information-fill mr-2" aria-hidden="true"></i> To more information please visit <a href="/docs#/docs" target="_blank" rel="noopener noreferrer"><b>documentation</b></a> pages.
                                                        </div>
                                                        {
                                                            alert ?
                                                                (
                                                                    <SweetAlert
                                                                        warning
                                                                        showCancel
                                                                        confirmBtnText="Yes, delete it!"
                                                                        confirmBtnBsStyle="danger"
                                                                        title="Are you sure?"
                                                                        onConfirm={deleteClient}
                                                                        onCancel={closeSweetAlert} />
                                                                ) :
                                                                (
                                                                    <React.Fragment></React.Fragment>
                                                                )
                                                        }
                                                    </div>

                                                )
                                                :
                                                (
                                                    <div className="changelog-item wow fadeInUp  delay-4s animated p-4">
                                                        <h5 className="title mb-0">Endpoints</h5>
                                                        <hr className="mt-3 mb-3" />
                                                        <div className="alert alert-icon alert-warning" role="alert">
                                                            <i className="ri-information-fill mr-2" aria-hidden="true"></i> Choose which enpoints to use and create Client Secret.
                                                        </div>
                                                        <form onSubmit={onSubmit} className="login-signup-form">
                                                            <div className="form-group">

                                                                <label className="pb-1">
                                                                    Client Secret <i className="ri-information-line" title="Please note that to use later!" style={{ color: '#a00c35' }}></i>
                                                                </label>

                                                                <div className="input-group input-group-merge">
                                                                    <div className="input-icon">
                                                                        <i className="ri-key-2-fill color-primary"></i>
                                                                    </div>
                                                                    <input value={clientSecret} onChange={(e) => setClientSecret(e.target.value)} type="password" className="form-control" placeholder="Please note that to use later!" required />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputEmail1">Endpoints</label>
                                                                <Select closeMenuOnSelect={false} required={true} isMulti name="apiScopes" options={options} onChange={(choice) => setApiScopes(choice)} />
                                                            </div>
                                                            <button className="btn btn-lg btn-block solid-btn-login border-radius mt-4 mb-3">
                                                                Create
                                                            </button>
                                                        </form>
                                                    </div>
                                                )
                                        }
                                    </React.Fragment>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default EndpointsPage;
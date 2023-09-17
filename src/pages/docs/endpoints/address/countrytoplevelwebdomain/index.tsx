"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";

const CountryTopLevelWebDomainPage = () => {
    return (
        <Layout>
            <PageHeader
                title="Documentation"
                desc="2. Endpoints > 2.1. Address"
            />
            <hr />
            <Docs>
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">2.1.6. Country Top Level Web Domain</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getbycountryid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/countrytoplevelwebdomain/getbyid?id=D81DD5B5-B300-4099-AE5E-5E63E845BDF4' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Request - getbywebdomainid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/countrytoplevelwebdomain/getbywebdomainid?webdomainid=EF976BCC-EE50-45E6-8C84-16394BBF6572' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbycountryid, getbywebdomainid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "00b0dbe1-e497-4cd4-ae29-70da80dc0e5e",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "D81DD5B5-B300-4099-AE5E-5E63E845BDF4",
            "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
            "webDomainId": "EF976BCC-EE50-45E6-8C84-16394BBF6572"
        }
    ]
}`}
                                    </code>
                                </pre>
                            </div>
                            <hr className="pb-15" />
                            <h6>Request - getbyid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/countrytoplevelwebdomain/getbyid?id=D81DD5B5-B300-4099-AE5E-5E63E845BDF4' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbyid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "1ca2cbf3-b895-4f19-aca9-642481bfddf5",
        "isSuccess": true,
        "message": null
    },
    "body": {
        "id": "D81DD5B5-B300-4099-AE5E-5E63E845BDF4",
        "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
        "webDomainId": "EF976BCC-EE50-45E6-8C84-16394BBF6572"
    }
}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </Docs>
        </Layout>
    );
};

export default CountryTopLevelWebDomainPage;
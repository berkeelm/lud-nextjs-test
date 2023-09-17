"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";

const StateProvincePage = () => {
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
                            <h3 className="card-title">2.1.11. State Province</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getbycountryid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/stateprovince/getbycountryid?countryid=406FCF8F-8925-4B6A-8B5A-071D7808C971' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbycountryid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "564e4363-1f8b-4477-81d2-21ade8a7bbdb",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "0171d779-d1f1-4fbd-83d3-fe14f8304de0",
            "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
            "name": "Aydın",
            "abbreviation": "09"
        },
        {
            "id": "01d4db0c-3079-4125-a95c-8f536391fbfd",
            "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
            "name": "Karabük",
            "abbreviation": "78"
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
  --location '[BASEURL]/addressmanagement/api/stateprovince/getbyid?id=0171d779-d1f1-4fbd-83d3-fe14f8304de0' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Request - getbyname:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/stateprovince/getbyname?name=İstanbul' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Request - getbyabbreviation:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/stateprovince/getbyabbreviation?abbreviation=34' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbyid, getbyname, getbyabbreviation:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "dfb60f65-2d3b-4d6e-bcc4-a7e879a922bc",
        "isSuccess": true,
        "message": null
    },
    "body": {
        "id": "bba6ed2d-8010-4e97-a41c-555b4197e28a",
        "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
        "name": "İstanbul",
        "abbreviation": "34"
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

export default StateProvincePage;
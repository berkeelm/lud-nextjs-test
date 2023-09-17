"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";

const WebDomainPage = () => {
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
                            <h3 className="card-title">2.1.12. Domain</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getall:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/webdomain/getall' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getall:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "b390dd44-c76f-4d70-ad50-c7829d8f28d8",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "0077521A-CF56-4E20-9144-A7F1B059C41C",
            "name": "nu",
            "isTopLevel": true
        },
        {
            "id": "00F78C66-1AAE-4F1B-8AEF-8C74BED21E67",
            "name": "id",
            "isTopLevel": true
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
  --location '[BASEURL]/addressmanagement/api/webdomain/getbyid?id=A66FAA42-A5CC-4FBC-9053-7D76C3864E56' \

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
  --location '[BASEURL]/addressmanagement/api/webdomain/getbyname?name=us' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbyid, getbyname:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "ca027286-558c-4b05-a6c8-6a9d245e6aaf",
        "isSuccess": true,
        "message": null
    },
    "body": {
        "id": "A66FAA42-A5CC-4FBC-9053-7D76C3864E56",
        "name": "us",
        "isTopLevel": true
    }
}`}
                                    </code>
                                </pre>
                            </div>
                            <hr className="pb-15" />
                            <h6>Request - getbyistoplevel:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/webdomain/getbyistoplevel?istoplevel=true' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbyistoplevel:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "b390dd44-c76f-4d70-ad50-c7829d8f28d8",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "0077521A-CF56-4E20-9144-A7F1B059C41C",
            "name": "nu",
            "isTopLevel": true
        },
        {
            "id": "00F78C66-1AAE-4F1B-8AEF-8C74BED21E67",
            "name": "id",
            "isTopLevel": true
        }
    ]
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

export default WebDomainPage;
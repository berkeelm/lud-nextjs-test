"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";

const CallingCodePage = () => {
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
                            <h3 className="card-title">2.1.1. Calling Code</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getall:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/callingcode/getall' \

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
        "globalId": "4db2948d-56a5-4955-a379-506f89f041f6",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "00800567-203C-48B9-A491-9BD14BA9F30A",
            "code": 299
        },
        {
            "id": "00EFCF96-C224-4EFA-82B1-571702E29A67",
            "code": 855
        },
        {
            "id": "01F4A748-1FAB-43EE-9B39-A2581029B73A",
            "code": 266
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
  --location '[BASEURL]/addressmanagement/api/callingcode/getbyid?id=00800567-203C-48B9-A491-9BD14BA9F30A' \

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
        "globalId": "fca00688-b1c1-4c9d-a1e6-1cd77667feb0",
        "isSuccess": true,
        "message": null
    },
    "body": {
        "id": "00800567-203C-48B9-A491-9BD14BA9F30A",
        "code": 299
    }
  }`}
                                    </code>
                                </pre>
                            </div>
                            <hr className="pb-15" />
                            <h6>Request - getbycode:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/callingcode/getbycode?code=299' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbycode:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "7a0d391e-7827-46eb-8ed6-e83fbf5b8b82",
        "isSuccess": true,
        "message": null
    },
    "body": {
        "id": "00800567-203C-48B9-A491-9BD14BA9F30A",
        "code": 299
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

export default CallingCodePage;
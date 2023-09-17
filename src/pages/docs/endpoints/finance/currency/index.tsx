"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";

const CurrencyPage = () => {
    return (
        <Layout>
            <PageHeader
                title="Documentation"
                desc="2. Endpoints > 2.2. Finance"
            />
            <hr />
            <Docs>
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">2.2.1. Currency</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getall:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/financemanagement/api/currency/getall' \

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
        "globalId": "7ab8c3fd-03c5-4fa3-b4aa-c3f9e5447b1f",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "016acf7f-c29d-4349-a0a9-42ed24901513",
            "name": "Croatian kuna",
            "code": "HRK"
        },
        {
            "id": "021cd271-efcd-4cc0-af48-37e6e41284b7",
            "name": "Nigerian Naira",
            "code": "NGN"
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
  --location '[BASEURL]/financemanagement/api/currency/getbyid?id=bbf5c3a4-4ba9-4a29-9533-f131c88ed01c' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Request - getbycode:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/financemanagement/api/currency/getbycode?code=usd' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbyid, getbycode:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "34a4ad1d-5dd6-4577-830b-647a4007a214",
        "isSuccess": true,
        "message": null
    },
    "body": {
        "id": "bbf5c3a4-4ba9-4a29-9533-f131c88ed01c",
        "name": "US Dollar",
        "code": "USD"
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

export default CurrencyPage;
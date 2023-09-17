"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";

const LanguagePage = () => {
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
                            <h3 className="card-title">2.1.8. Language</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getall:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/language/getall' \

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
        "globalId": "a72437a8-54b5-48c7-a48a-0abc1ed529de",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "001a3e9a-7cdb-4709-a3de-b0616f2fe015",
            "name": "English (Trinidad and Tobago)",
            "languageCulture": "en-TT",
            "uniqueSeoCode": null,
            "rtl": false
        },
        {
            "id": "018d723d-f92e-4dc3-86b1-1a4951f10c00",
            "name": "Aymara",
            "languageCulture": "NONE",
            "uniqueSeoCode": null,
            "rtl": false
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
  --location '[BASEURL]/addressmanagement/api/language/getbyid?id=32e5e1d0-6f2c-4c4d-9a69-6797a76244df' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
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

export default LanguagePage;
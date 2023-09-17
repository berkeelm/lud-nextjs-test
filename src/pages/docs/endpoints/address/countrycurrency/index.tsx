"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";


const CountryCurrencyPage = () => {
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
                            <h3 className="card-title">2.1.3. Country Currency</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getbycountryid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/countrycurrency/getbycountryid?countryid=406FCF8F-8925-4B6A-8B5A-071D7808C971' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Request - getbycurrencycode:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/countrycurrency/getbycurrencycode?currencycode=TRY' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbycountryid, getbycurrencycode:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "5f603421-3226-4c30-afbc-41a2232bae07",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "2c8a7f67-1311-456f-8c82-29e753d64b69",
            "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
            "currencyCode": "TRY"
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
  --location '[BASEURL]/addressmanagement/api/countrycurrency/getbyid?id=2c8a7f67-1311-456f-8c82-29e753d64b69' \

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
        "globalId": "46c4356a-0f3f-4b0b-8c97-00bb52d8efc3",
        "isSuccess": true,
        "message": null
    },
    "body": {
        "id": "2c8a7f67-1311-456f-8c82-29e753d64b69",
        "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
        "currencyCode": "TRY"
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

export default CountryCurrencyPage;
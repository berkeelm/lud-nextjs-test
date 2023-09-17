"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";


const CountryHolidayPage = () => {
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
                            <h3 className="card-title">2.1.3. Country Holiday</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getbycountryid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/countryholiday/getbycountryid?CountryId=406FCF8F-8925-4B6A-8B5A-071D7808C971&Year=2023' \

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
        "globalId": "f502fd43-28b6-43b6-bb44-5bfabdfb12f0",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "6857d7f7-c977-4b18-a833-2f9e7942b1e9",
            "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
            "summary": "Yılbaşı",
            "startDate": "2023-01-01 00:00:00 GMT+03:00",
            "endDate": "2023-01-02 00:00:00 GMT+03:00"
        },
        {
            "id": "2bc82871-9850-4336-963c-eaf6c60d039a",
            "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
            "summary": "Ramazan Bayramı",
            "startDate": "2023-04-21 00:00:00 GMT+03:00",
            "endDate": "2023-04-22 00:00:00 GMT+03:00"
        },
        {
            "id": "b9d82ce3-0ee8-4b73-9709-0edd3d33f21c",
            "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
            "summary": "Ramazan Bayramı",
            "startDate": "2023-04-22 00:00:00 GMT+03:00",
            "endDate": "2023-04-23 00:00:00 GMT+03:00"
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

export default CountryHolidayPage;
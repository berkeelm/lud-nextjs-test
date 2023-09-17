"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";


const CountryTimeZonePage = () => {
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
                            <h3 className="card-title">2.1.5. Country Time Zone</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getbycountryid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/countrytimezone/getbycountryid?countryid=406FCF8F-8925-4B6A-8B5A-071D7808C971' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Request - getbytimezoneid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/countrytimezone/getbytimezoneid?timezoneid=cde2b2ca-cc0b-4a40-b10d-8f73da86220e' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbycountryid, getbytimezoneid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "022fe596-b53f-48e9-83fd-9d0ccce426ee",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "cfdd3b09-16dc-46c2-9745-d0b1153c81aa",
            "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
            "timeZoneId": "cde2b2ca-cc0b-4a40-b10d-8f73da86220e"
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
  --location '[BASEURL]/addressmanagement/api/countrytimezone/getbyid?id=cfdd3b09-16dc-46c2-9745-d0b1153c81aa' \

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
        "globalId": "f445ffa8-ec4b-44c6-8b43-ee756cc04331",
        "isSuccess": true,
        "message": null
    },
    "body": {
        "id": "cfdd3b09-16dc-46c2-9745-d0b1153c81aa",
        "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
        "timeZoneId": "cde2b2ca-cc0b-4a40-b10d-8f73da86220e"
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

export default CountryTimeZonePage;
"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";

const NeighborhoodPage = () => {
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
                            <h3 className="card-title">2.1.9. Neighborhood</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getbydistrictid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/neighborhood/getbydistrictid?districtid=b41b2f5c-8cb5-4137-87da-faf93d6d2eaa' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbydistrictid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "f79e3fc1-f3ef-4d10-a028-6562d29d7645",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "256d9290-295f-48dd-81b3-18745570ecdf",
            "districtId": "b41b2f5c-8cb5-4137-87da-faf93d6d2eaa",
            "name": "Mimar Sinan Mah",
            "zipCode": "34779"
        },
        {
            "id": "297fa732-6875-41f1-a0f5-78b6b3341be8",
            "districtId": "b41b2f5c-8cb5-4137-87da-faf93d6d2eaa",
            "name": "Barbaros Mah",
            "zipCode": "34746"
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

export default NeighborhoodPage;
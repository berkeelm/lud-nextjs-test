"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";


const DistrictPage = () => {
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
                            <h3 className="card-title">2.1.7. District</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getbystateprovinceid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/district/getbystateprovinceid?stateprovinceid=bba6ed2d-8010-4e97-a41c-555b4197e28a' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbystateprovinceid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "742da714-489d-4c2e-9d6e-9ccbff6f17d8",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "09ab2f16-8801-4462-9b92-9a035d975ae7",
            "stateProvinceId": "bba6ed2d-8010-4e97-a41c-555b4197e28a",
            "name": "Bahçelievler"
        },
        {
            "id": "154ef7a7-672c-48ea-bacb-8bedf769a1ec",
            "stateProvinceId": "bba6ed2d-8010-4e97-a41c-555b4197e28a",
            "name": "Adalar"
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
  --location '[BASEURL]/addressmanagement/api/district/getbyid?id=09ab2f16-8801-4462-9b92-9a035d975ae7' \

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
  --location '[BASEURL]/addressmanagement/api/district/getbyname?name=Bahçelievler&countryId=406FCF8F-8925-4B6A-8B5A-071D7808C971' \

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
        "globalId": "f56f56ab-138a-4c57-9d58-4610532936c7",
        "isSuccess": true,
        "message": null
    },
    "body": {
        "id": "09ab2f16-8801-4462-9b92-9a035d975ae7",
        "stateProvinceId": "bba6ed2d-8010-4e97-a41c-555b4197e28a",
        "name": "Bahçelievler"
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

export default DistrictPage;
"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";


const CountryLanguagePage = () => {
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
                            <h3 className="card-title">2.1.4. Country Language</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getbycountryid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/countrylanguage/getbycountryid?countryid=406FCF8F-8925-4B6A-8B5A-071D7808C971' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Request - getbylanguageid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/countrylanguage/getbylanguageid?languageid=6fcfec2d-f370-4281-a027-68cc54270ff6' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbycountryid, getbylanguageid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "216973a6-a986-4311-9e81-d6577d644808",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "39eb4a56-3d75-4579-89dd-acf0a304e029",
            "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
            "languageId": "6fcfec2d-f370-4281-a027-68cc54270ff6"
        },
        {
            "id": "86ef738d-1fe2-450f-be3d-d51d96f5857d",
            "countryId": "03DCF0DE-307A-4A2F-857F-2F99517B7F34",
            "languageId": "6fcfec2d-f370-4281-a027-68cc54270ff6"
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
  --location '[BASEURL]/addressmanagement/api/countrylanguage/getbyid?id=39eb4a56-3d75-4579-89dd-acf0a304e029' \

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
        "globalId": "3d8755ee-548f-4e28-a181-10cc34f0da24",
        "isSuccess": true,
        "message": null
    },
    "body": {
        "id": "39eb4a56-3d75-4579-89dd-acf0a304e029",
        "countryId": "406FCF8F-8925-4B6A-8B5A-071D7808C971",
        "languageId": "6fcfec2d-f370-4281-a027-68cc54270ff6"
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

export default CountryLanguagePage;
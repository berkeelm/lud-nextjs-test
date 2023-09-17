"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import BaseUrl from "@/pages/docs/BaseUrl";
import Docs from "@/pages/docs/Docs";
import React from "react";

const CountryPage = () => {
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
                            <h3 className="card-title">2.1.2. Country</h3>
                        </div>
                        <div className="card-body">
                            <BaseUrl />
                            <hr className="pb-15" />
                            <h6>Request - getall:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/country/getall' \

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
        "globalId": "1b2af508-d32e-49eb-8f86-fe851dfbdc23",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "004A87B2-A6F2-4EAF-8970-8EEF96564186",
            "name": "Tokelau",
            "nativeName": "-",
            "alpha2Code": "TK",
            "alpha3Code": "TKL",
            "countryPopulation": 1357,
            "area": 12.00,
            "capitalCity": "Fakaofo",
            "callingCodeId": "81B39B68-841C-4433-8A6A-1BD5FFD2A393",
            "numericIsoCode": 772,
            "regionId": "8001d62b-392d-4996-a6c7-bcfd6e3c8b3d",
            "displayOrder": 0
        },
        {
            "id": "007A34E0-900E-4065-AEEF-2B6F1765DB7E",
            "name": "Malaysia",
            "nativeName": "Maláixiyà , Malaysia, ",
            "alpha2Code": "MY",
            "alpha3Code": "MYS",
            "countryPopulation": 34308525,
            "area": 330803.00,
            "capitalCity": "Kuala Lumpur",
            "callingCodeId": "8CC147C9-666C-4E11-931E-B06159D94B6F",
            "numericIsoCode": 458,
            "regionId": "c526b2ab-a8c0-49d2-b62a-680b1636ace5",
            "displayOrder": 0
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
  --location '[BASEURL]/addressmanagement/api/country/getbyid?id=004A87B2-A6F2-4EAF-8970-8EEF96564186' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Request - getbyalpha2code:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/country/getbyalpha2code?alpha2code=TK' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Request - getbyalpha3code:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/country/getbyalpha3code?alpha3code=TKL' \

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
  --location '[BASEURL]/addressmanagement/api/country/getbyname?name=Tokelau' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbyid, getbyalpha2code, getbyalpha3code, getbyname:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "c63ca705-5fa8-44fa-be3d-9b2315fd7b54",
        "isSuccess": true,
        "message": null
    },
    "body": {
        "id": "004A87B2-A6F2-4EAF-8970-8EEF96564186",
        "name": "Tokelau",
        "nativeName": "-",
        "alpha2Code": "TK",
        "alpha3Code": "TKL",
        "countryPopulation": 1357,
        "flag": "iVBORw0KGgoAAAAN...",
        "area": 12.00,
        "capitalCity": "Fakaofo",
        "callingCodeId": "81B39B68-841C-4433-8A6A-1BD5FFD2A393",
        "numericIsoCode": 772,
        "regionId": "8001d62b-392d-4996-a6c7-bcfd6e3c8b3d",
        "displayOrder": 1
    }
}`}
                                    </code>
                                </pre>
                            </div>
                            <hr className="pb-15" />
                            <h6>Request - getbyregionid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl 
  --location '[BASEURL]/addressmanagement/api/country/getbyregionid?regionid=8001d62b-392d-4996-a6c7-bcfd6e3c8b3d' \

  --header 'Authorization: Bearer [TOKEN]'
                    `}
                                    </code>
                                </pre>
                            </div>
                            <h6>Response - getbyregionid:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "header": {
        "globalId": "c4dac752-a566-44a5-8abf-6dc667c63645",
        "isSuccess": true,
        "message": null
    },
    "body": [
        {
            "id": "004A87B2-A6F2-4EAF-8970-8EEF96564186",
            "name": "Tokelau",
            "nativeName": "-",
            "alpha2Code": "TK",
            "alpha3Code": "TKL",
            "countryPopulation": 1357,
            "flag": "iVBORw0KG...",
            "area": 12.00,
            "capitalCity": "Fakaofo",
            "callingCodeId": "81B39B68-841C-4433-8A6A-1BD5FFD2A393",
            "numericIsoCode": 772,
            "regionId": "8001d62b-392d-4996-a6c7-bcfd6e3c8b3d",
            "displayOrder": 1
        },
        {
            "id": "080F56BA-0697-4E5C-A123-566B1B6720CB",
            "name": "Marshall Islands",
            "nativeName": "Marshall Islands, Aorokin M¸ajel",
            "alpha2Code": "MH",
            "alpha3Code": "MHL",
            "countryPopulation": 41996,
            "flag": "iVBORw0KG...",
            "area": 181.00,
            "capitalCity": "Majuro",
            "callingCodeId": "A4DC9684-673D-4322-9666-200347D11843",
            "numericIsoCode": 584,
            "regionId": "8001d62b-392d-4996-a6c7-bcfd6e3c8b3d",
            "displayOrder": 1
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

export default CountryPage;
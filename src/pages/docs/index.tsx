"use client";
import PageHeader from "@/components/PageHeader";
import Layout from "@/layouts/Layout";
import React from "react";
import Docs from "./Docs";

const TokenPage = () => {
    return (
        <Layout>
            <PageHeader
                title="Documentation"
                desc="1. Getting Started"
            />
            <hr />
            <Docs>
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">1.1. Token</h3>
                        </div>
                        <div className="card-body">
                            <p>Access_token is required for use of all endpoints. You must
                                be a member to get access_token. After you become a member, you can
                                generate access_token via the following endpoint.</p>
                            <h6>Base URL:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-markup" id="copy">
                                        {`  https://auth.lookupdatas.com`}
                                    </code>
                                </pre>
                            </div>
                            <h6>Request:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-curl">
                                    <code className="language-curl" id="copy">
                                        {`  curl --location 'https://auth.lookupdatas.com/connect/token' \

  --header 'Content-Type: application/x-www-form-urlencoded' \

  --data-urlencode 'grant_type=client_credentials' \

  --data-urlencode 'client_id=[client_id]' \

  --data-urlencode 'client_secret=[client_secret]' \

  --data-urlencode 'scope=[scope]'`}
                                    </code>
                                </pre>
                            </div>
                            <p>
                                <b>[client_id]:</b> Get from user dashboard.
                            </p>
                            <p>
                                <b>[client_secret]:</b> Get from user dashboard.
                            </p>
                            <p>
                                <b>[scope]:</b> Get from user dashboard.
                            </p>
                            <h6>Response:</h6>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
      "access_token": "eyJhb...",
      "expires_in": 3600,
      "token_type": "Bearer",
      "scope": "[scope]"
  }`}
                                    </code>
                                </pre>
                            </div>
                            <p>
                                <b>When a request is made to the endpoints without tokens, an unauthorized error is received as follows.</b>
                            </p>
                            <div className="code-toolbar">
                                <pre className=" language-json">
                                    <code className="language-json" id="copy">
                                        {`  {
    "type": "https://tools.ietf.org/html/rfc7235#section-3.1",
    "title": "Unauthorized",
    "status": 401,
    "traceId": "00-5776d76beae682af1857e7edb0970702-2545be158d43cc8a-00"
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

export default TokenPage;

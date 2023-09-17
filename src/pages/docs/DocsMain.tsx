import React from "react";

const DocsMain = () => {
    return (
        // <div className="flex flex-col ml-8 gap-4">
        //   <h1 className="text-xl font-bold">Token</h1>
        //   <hr />
        //   <div>
        //     <b>[TR]</b> Tüm uç noktalarının kullanımı için access_token
        //     gerekmektedir. access_token üretebilmek için üye olmanız gerekmektedir.
        //     Üye olduktan sonra aşağıdaki uç nokta vasıtası ile access_token
        //     üretebilirsiniz.
        //   </div>
        //   <div>
        //     <b>[EN]</b> Access_token is required for use of all endpoints. You must
        //     be a member to generate access_token. After you become a member, you can
        //     generate access_token via the following endpoint.
        //   </div>
        //   <br />
        //   <h1 className="text-xl font-bold">Base URL:</h1>
        //   <hr />
        //   <pre className="bg-slate-950 p-[15px] rounded-md text-white overflow-hidden">
        //     <div className="overflow-auto">
        //       <span className="text-[#ffce54] font-mono">https</span>
        //       :/lud-auth.fatihyilmaz.com.tr/connect/token
        //     </div>
        //   </pre>
        //   <p>
        //     <strong className="text-lg font-bold">Get Token:</strong>
        //     <br />
        //     See an example of how to authenticate the countrylayer API with the
        //     access_key parameter:
        //   </p>
        //   <p>
        //     <b>[client_id]:</b> Get from dashboard.
        //   </p>
        //   <p>
        //     <b>[client_secret]:</b> Get from dashboard.
        //   </p>
        //   <p>
        //     <b>[scope]:</b> Get from dashboard.
        //   </p>
        //   <h1 className="text-lg font-semibold">Request:</h1>
        //   <pre className="bg-slate-950 p-[15px] rounded-md text-white overflow-hidden">
        //     <div className="overflow-auto">
        //       curl <br />
        //       --location '
        //       <span className="text-[#ffce54] font-mono">
        //         https://lud-auth.fatihyilmaz.com.tr/connect/token
        //       </span>
        //       ' \<br />
        //       --header 'Content-Type:{" "}
        //       <span className="text-[#ffce54] font-mono">
        //         application/x-www-form-urlencoded
        //       </span>
        //       ' \<br />
        //       --data-urlencode 'grant_type=
        //       <span className="text-[#ffce54] font-mono">client_credentials</span>'
        //       \
        //       <br />
        //       --data-urlencode 'client_id=
        //       <span className="text-[#ffce54] font-mono">[client_id]</span>' \<br />
        //       --data-urlencode 'client_secret=
        //       <span className="text-[#ffce54] font-mono">[client_secret]</span>' \
        //       <br />
        //       --data-urlencode 'scope=
        //       <span className="text-[#ffce54] font-mono">[scope]</span>'
        //     </div>
        //   </pre>

        //   <h1 className="text-lg font-semibold">Response:</h1>
        //   <pre className="bg-slate-950 p-[15px] rounded-md text-white overflow-hidden">
        //     <div className="overflow-auto">
        //       <p>{"{"}</p>
        //       {
        //         '   "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzQzEzN0NDNTE0QkRFRTIyNiwiaX...",'
        //       }
        //       <br />
        //       {'   "expires_in": 3600,'}
        //       <br />
        //       {'   "token_type": "Bearer",'}
        //       <br />
        //       {'   "scope": "[scope]"'}
        //       <br />
        //       <p>{"}"}</p>
        //     </div>
        //   </pre>
        // </div>
        <div className="col-lg-8">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Images</h3>
                </div>
                <div className="card-body">
                    <p>lorem ipsum dolor sit amet</p>
                    <div className="code-toolbar">
                        <pre className=" language-markup">
                            <code className="language-markup" id="copy">
                                &lt;div className="image-box mb-20"&gt;
                                &lt;img className="img-fluid" src="img/docs/r-img-1.jpg" alt="Responsive image"&gt;
                                &lt;/div&gt;
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocsMain;
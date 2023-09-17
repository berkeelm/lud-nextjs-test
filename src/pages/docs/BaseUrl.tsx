import React from "react";
import { useRouter } from 'next/router'
const BaseUrl = () => {
    const router = useRouter()

    const navigate = (_url: string) => {
        router.push(_url);
    }

    return (
        <>
            <h6>Base URL:</h6>
            <div className="code-toolbar">
                <pre className=" language-json">
                    <code className="language-markup" id="copy">
                        {`  https://api.lookupdatas.com`}
                    </code>
                </pre>
            </div>
            <p>To Get <b>[TOKEN]</b> go to <a href="javascript:;" style={{ color: "#a00c35" }} onClick={() => navigate("/docs")}> <b><u>1.1. Token</u></b></a></p>
        </>
    );
};

export default BaseUrl;
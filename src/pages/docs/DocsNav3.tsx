import React from "react";
import { useRouter } from 'next/router'
export default function DocsNav3() {
    const [open, setOpen] = React.useState(0);

    const router = useRouter()

    const navigate = (_url: string) => {
        router.push(_url);
    }

    // const handleOpen = (value: number) => {
    //     setOpen(open === value ? 0 : value);
    // };

    return (
        <div className="col-lg-4">
            <div className="sidebar-wrapper">
                <div className="sidebar-widget">
                    <h4 className="sidebar-title">Doc Nav</h4>
                </div>
                <div className="sidebar-widget">
                    <div className="doc-nav">
                        <ul id="faq">
                            <li> <a data-toggle="collapse" data-parent="#faq" href="#drop-down-menu-getting-started">
                                <b>1. Getting Started</b> <i className="la la-angle-down"></i></a>
                                <ul id="drop-down-menu-getting-started" className="panel-collapse collapse show">
                                    <li><a href="javascript:;" onClick={() => navigate("/docs")}>1.1. Token </a></li>
                                </ul>
                            </li>
                            <li> <a data-toggle="collapse" data-parent="#faq" href="#drop-down-menu-endpoints">
                                <b>2. Endpoints</b> <i className="la la-angle-down"></i></a>
                                <ul id="drop-down-menu-endpoints" className="panel-collapse collapse show">
                                    <li><a data-toggle="collapse" data-parent="#drop-down-menu-endpoints" href="#drop-down-menu-address">
                                        2.1. Address <i className="la la-angle-down"></i></a>
                                        <ul id="drop-down-menu-address" className="panel-collapse collapse show">
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/callingcode")}>2.1.1. Calling Code </a></li>
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/country")}>2.1.2. Country </a></li>
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/countrycurrency")}>2.1.3. Country Currency </a></li>
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/countryholiday")}>2.1.4. Country Holiday </a></li>
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/countrylanguage")}>2.1.5. Country Language </a></li>
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/countrytimezone")}>2.1.6. Country Time Zone </a></li>
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/countrytoplevelwebdomain")}>2.1.7. Country Domain </a></li>
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/district")}>2.1.8. District </a></li>
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/language")}>2.1.9. Language </a></li>
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/neighborhood")}>2.1.10. Neighborhood </a></li>
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/region")}>2.1.11. Region </a></li>
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/stateprovince")}>2.1.12. State Province </a></li>
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/address/webdomain")}>2.1.13. Domain </a></li>
                                        </ul>
                                    </li>
                                    <li><a data-toggle="collapse" data-parent="#drop-down-menu-endpoints" href="#drop-down-menu-finance">
                                        2.2. Finance <i className="la la-angle-down"></i></a>
                                        <ul id="drop-down-menu-finance" className="panel-collapse collapse show">
                                            <li><a href="javascript:;" onClick={() => navigate("/docs/endpoints/finance/currency")}>2.2.1. Currency </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
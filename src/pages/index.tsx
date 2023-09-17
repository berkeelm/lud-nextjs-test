import codeData from "@/constants/codes";
import Layout from "@/layouts/Layout";
import { Highlight, Prism } from "prism-react-renderer";
import { useState } from "react";
(typeof global !== "undefined" ? global : window).Prism = Prism
require('prismjs/components/prism-markup-templating')
require("prismjs/components/prism-csharp")
require("prismjs/components/prism-python")
require("prismjs/components/prism-php")
require("prismjs/components/prism-ruby")
require("prismjs/components/prism-go")
import hero2 from '../assets/images/hero/hero-2.jpg';
import { useRouter } from 'next/router'

const HomePage = () => {
    const router = useRouter()
    const [currentCode, setCurrentCode] = useState(codeData.find(x => x.language === 'tsx'))

    const navigate = (_url: string) => {
        router.push(_url);
    }

    return (
        <Layout>
            <section className="changelog pt-150 pb-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading text-center wow fadeInUp animated delay-4s">
                                    <h1 className="title">Code Samples</h1>
                                    <div className="section-divider mx-auto mb-50"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 codeButton-container">
                            <div className="row">
                                <div className="col-custom codeButton-item">
                                    <button onClick={() => setCurrentCode(codeData.find(x => x.language === 'tsx'))} className={"nav-link " + (currentCode?.language === 'tsx' && 'codeButton-item-active')} style={{/*backgroundColor: "#a00c35", color:"#fff",*/ marginBottom: 8 }} id="v-pills-js-tab" data-toggle="pill" data-target="#v-pills-js" type="button" role="tab" aria-controls="v-pills-js" aria-selected="false">Java Script</button>
                                </div>
                                <div className="col-custom codeButton-item">
                                    <button onClick={() => setCurrentCode(codeData.find(x => x.language === 'python'))} className={"nav-link " + (currentCode?.language === 'python' && 'codeButton-item-active')} style={{/*backgroundColor: "#a00c35", color:"#fff",*/ marginBottom: 8 }} id="v-pills-python-tab" data-toggle="pill" data-target="#v-pills-python" type="button" role="tab" aria-controls="v-pills-python" aria-selected="true">Python</button>
                                </div>
                                <div className="col-custom codeButton-item">
                                    <button onClick={() => setCurrentCode(codeData.find(x => x.language === 'csharp'))} className={"nav-link " + (currentCode?.language === 'csharp' && 'codeButton-item-active')} style={{/*backgroundColor: "#a00c35", color:"#fff",*/ marginBottom: 8 }} id="v-pills-csharp-tab" data-toggle="pill" data-target="#v-pills-csharp" type="button" role="tab" aria-controls="v-pills-csharp" aria-selected="false">C#</button>
                                </div>
                                <div className="col-custom codeButton-item">
                                    <button onClick={() => setCurrentCode(codeData.find(x => x.language === 'curl'))} className={"nav-link " + (currentCode?.language === 'curl' && 'codeButton-item-active')} style={{/*backgroundColor: "#a00c35", color:"#fff",*/ marginBottom: 8 }} id="v-pills-curl-tab" data-toggle="pill" data-target="#v-pills-curl" type="button" role="tab" aria-controls="v-pills-curl" aria-selected="false">cURL</button>
                                </div>
                                <div className="col-custom codeButton-item">
                                    <button onClick={() => setCurrentCode(codeData.find(x => x.language === 'php'))} className={"nav-link " + (currentCode?.language === 'php' && 'codeButton-item-active')} style={{/*backgroundColor: "#a00c35", color:"#fff",*/ marginBottom: 8 }} id="v-pills-php-tab" data-toggle="pill" data-target="#v-pills-php" type="button" role="tab" aria-controls="v-pills-php" aria-selected="false">PHP</button>
                                </div>
                                <div className="col-custom codeButton-item">
                                    <button onClick={() => setCurrentCode(codeData.find(x => x.language === 'ruby'))} className={"nav-link " + (currentCode?.language === 'ruby' && 'codeButton-item-active')} style={{/*backgroundColor: "#a00c35", color:"#fff",*/ marginBottom: 8 }} id="v-pills-ruby-tab" data-toggle="pill" data-target="#v-pills-ruby" type="button" role="tab" aria-controls="v-pills-ruby" aria-selected="false">Ruby</button>
                                </div>
                                <div className="col-custom codeButton-item">
                                    <button onClick={() => setCurrentCode(codeData.find(x => x.language === 'go'))} className={"nav-link " + (currentCode?.language === 'go' && 'codeButton-item-active')} style={{/*backgroundColor: "#a00c35", color:"#fff",*/ marginBottom: 8 }} id="v-pills-golang-tab" data-toggle="pill" data-target="#v-pills-golang" type="button" role="tab" aria-controls="v-pills-golang" aria-selected="false">Go</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div style={{ border: "solid 0px", }}>
                                {
                                    currentCode && (
                                        <Highlight
                                            code={currentCode?.codeBlock}
                                            language={currentCode?.language}
                                        >
                                            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                                <pre style={{ ...style, borderRadius: 10, height: '400px', maxHeight: '400px', overflowY: 'auto' }}>
                                                    {tokens.map((line, i) => (
                                                        <div key={i} {...getLineProps({ line })}>
                                                            {line.map((token, key) => (
                                                                <span key={key} {...getTokenProps({ token })} />
                                                            ))}
                                                        </div>
                                                    ))}
                                                </pre>
                                            )}
                                        </Highlight>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="changelog pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center wow fadeInUp animated delay-4s">
                                <h5 className="section-meta">About</h5>
                                <h2 className="section-title">About "Look Up Datas"</h2>
                                <div className="section-divider mx-auto mb-50"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="changelog-item wow fadeInUp animated delay-4s" style={{ height: 350, maxHeight: 350 }}>
                                <h5 className="title">About "Look Up Datas"</h5>
                                <p>It is a SaaS platform that can be used in software and research projects where you will need fixed data.</p>
                                <p>It provides you instant and up-to-date data. In this way, it aims to reduce your time and labor costs.</p>
                                <p>Please <b>Sign Up</b> to use this service, which is offered free of charge for now.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="changelog-item wow fadeInUp animated delay-4s" style={{ height: 350, maxHeight: 350 }}>
                                <div className="hero-image text-center">
                                    <img src={hero2.src} className="img-fluid" data-aos="fade-up" alt="Hero" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-area pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center wow fadeInUp animated delay-4s">
                                <h5 className="section-meta">Missions</h5>
                                <h2 className="section-title">We Provide ...</h2>
                                <div className="section-divider mx-auto mb-50"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 wow fadeInUp animated delay-4s">
                            <div className="single-feature-area text-center">
                                <div className="feature-icon">
                                    <i className="ri-database-2-line"></i>
                                </div>
                                <div className="feature-content-text">
                                    <h4>Data</h4>
                                    <p>
                                        We always provide you with accessible and up-to-date data for your needs in different fields.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp animated delay-6s">
                            <div className="single-feature-area text-center">
                                <div className="feature-icon">
                                    <i className="ri-money-dollar-box-line"></i>
                                </div>
                                <div className="feature-content-text">
                                    <h4>Cost</h4>
                                    <p>
                                        You can minimize your money and time costs by using our SaaS Services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp animated delay-8s">
                            <div className="single-feature-area text-center">
                                <div className="feature-icon">
                                    <i className="ri-book-3-line"></i>
                                </div>
                                <div className="feature-content-text">
                                    <h4>Documentation</h4>
                                    <p>
                                        Read our documentation to get start and browse the available UI kit.
                                    </p>
                                    <a onClick={() => navigate('/docs')} href="javascript:;">Read more <i className="ri-arrow-right-s-line"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" faq-area pb-100 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center mt-50">
                                <h5 className="section-meta">Endpoints</h5>
                                <h3 className="section-title">Our Endpoints</h3>
                                <div className="section-divider mx-auto mb-50"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-12 mt-4 pt-2">
                            <div className="media">
                                <i data-feather="help-circle" className="fea ri-question-line baseColor mr-2 mb-1"></i>
                                <div className="media-body">
                                    <h5 className="mt-0"> <span className="baseColor"> Address </span> Management</h5>
                                    <p className="gray-500 mb-0">Address management service includes Calling Code, Country, Country Currency, Country Language, Country Time Zone, Country Domain, District, Language, Neighborhood, Region, State Province and Domain services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-12 mt-4 pt-2">
                            <div className="media">
                                <i data-feather="help-circle" className="fea ri-question-line baseColor mr-2 mb-1"></i>
                                <div className="media-body">
                                    <h5 className="mt-0"><span className="baseColor"> Finance </span> Management</h5>
                                    <p className="gray-500 mb-0">Currently, there is only Currency service within the address management service. Work continues to add different services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-12 mt-4 pt-2">
                            <div className="media">
                                <i data-feather="help-circle" className="fea ri-question-line baseColor mr-2 mb-1"></i>
                                <div className="media-body">
                                    <h5 className="mt-0"><span className="baseColor"> Other </span> Management</h5>
                                    <p className="gray-500 mb-0">Other services continue to be developed. In addition to integrations such as Cargo, Social Media and Market Place, Fake Data service is planned to be prepared. If you submit your requests in line with your needs, we can expand the scope of work.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row mt-5 pt-4 justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h4 className="title mb-3 pt-50">Need any help!</h4>
                        <p className="para-desc mx-auto mb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                            tempus eleifend tortor, vel molestie orci feugiat sit amet.</p>
                        <a href="faqs.html#" className="theme-btn"><i className="las la-phone mr-2"></i> Contact
                            us</a>
                    </div>
                </div>
            </div> */}
                </div>
            </section>
        </Layout >
    );
};

export default HomePage;
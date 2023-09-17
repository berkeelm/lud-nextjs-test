"use client";
import PageHeader from "@/components/PageHeader";
import { useEffect } from "react";
import Layout from "../../layouts/Layout";

const DonatePage = () => {
    return (
        <Layout>
            <PageHeader
                title="Donate"
                desc=""
            />
            <hr />
            <section className="article-area pt-100 pb-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="article-content">
                                <p>All our services are free for now. In the long run, a fee may be required to provide better quality service.</p>
                                <p>If you support us at this stage, you can continue to use it for free for life.</p>
                                <p>You can use any of the following methods to support.</p>
                                <p>If you want to support with another method, please contact us.</p>
                                <p><b>Please let us know if you support.</b></p>
                                <p>Thank you in advance for your support.</p>
                                <div className="single-list-article mt-20">
                                    <h5>Coin Accounts</h5>
                                    <ul>
                                        <li>BEP20 - 0xe8e24bfa019c7ef6ef5af391e3b2c27721b55b04</li>
                                        <li>TRC20 - TVE6jqcj9zH2YaGp2qHGSi31ERGB3Fj64W</li>
                                        <li>BTC - 173CYfyjcQR3JaQuigXfXoWi24YwbpocJf</li>
                                    </ul>
                                    <h5>Patreon</h5>
                                    <ul>
                                        <li><a href="https://www.patreon.com/lookupdatas" target="_blank" rel="noopener noreferrer">https://www.patreon.com/lookupdatas</a></li>
                                    </ul>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <p>Contact: lookupdatas@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default DonatePage;
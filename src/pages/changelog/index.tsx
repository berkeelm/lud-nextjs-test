"use client";
import PageHeader from "../../components/PageHeader";
import Layout from "../../layouts/Layout";


const ChangelogPage = () => {
    return (
        <Layout>
            <PageHeader
                title="Changelog"
                desc=""
            />
            <hr />
            <section className="changelog pt-100 pb-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                        <div className="changelog-item wow fadeInUp animated delay-4s">
                                <span className="update-button update"><img src="/img/icon/shuttle.png" alt="" />Update</span>
                                <h5 className="title">Country Holidays Added</h5>
                                <span className="date">Sept 17, 2023</span>
                                <p>Country Holiday option has also been added to our services. Currently, data entry is provided only for Türkiye. Data from other countries will be added at the first opportunity.</p>
                            </div>
                            <div className="changelog-item wow fadeInUp animated delay-4s">
                                <span className="update-button update"><img src="/img/icon/shuttle.png" alt="" />Update</span>
                                <h5 className="title">State Provinces and Districts Data Updated</h5>
                                <span className="date">Sept 10, 2023</span>
                                <p>State Provinces and Districts data has been overhauled for most countries. Data collection studies continue for the Neighborhood. If you have any problems with any data, please contact us.</p>
                            </div>
                            <div className="changelog-item wow fadeInUp animated delay-4s">
                                <span className="update-button feature"> <img src="/img/icon/puzzle-pieces.png" alt="" />Feature</span>
                                <h5 className="title">Initial Release</h5>
                                <span className="date">Aug 8, 2023</span>
                                <p>Look Up Datas is now live. It is free to use for now. Address and Finance Management modules are offered. Other modules will be added gradually. Find out how it's used by visiting the Docs page. Don't forget to donate :)</p>
                            </div>
                            {/* <div className="changelog-item wow fadeInUp animated delay-4s">
                                <span className="update-button bug"> <img src="/img/icon/ladybug.png" alt="" />Bug Fix</span>
                                <h5 className="title">Login Auth Issue Fixed on Deskoto</h5>
                                <span className="date">Updated over a week ago</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie eu leo at consequat. Maecenas
                                    finibus pellentesque nibh, nec pretium nisl ultrices at. Ut est enim, egestas at purus non, viverra mollis
                                    arcu. Quisque leo felis, fringilla eu elementum vestibulum, consequat et mi.</p>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ChangelogPage;

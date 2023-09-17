"use client";
import PageHeader from "../../components/PageHeader";
import Layout from "../../layouts/Layout";
import { useRouter } from 'next/router'

const BlogPage = () => {
    const router = useRouter()

    const navigate = (_url: string) => {
        router.push(_url);
    }
    return (
        <Layout>
            <PageHeader
                title="Blog"
                desc=""
            />
            <hr />
            <section className="blog pt-100 pb-50">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="blog-content">
                                <div className="single-blog-content wow fadeInUp animated delay-4s">
                                    <div className="inner-box">
                                        <div className="lower-content">
                                            <div className="upper-box">
                                                <div className="post-date"><i className="las la-calendar"></i>Sep 17, 2023</div>
                                                <h3><a href="javascript:;" onClick={() => navigate('/blog/blogdetail/harnessing-power-of-apis-unveiling-the-key-advantages')}>Harnessing the Power of APIs: Unveiling the Key Advantages</a></h3>
                                                <div className="gray-500">In today's interconnected digital world, Application Programming Interfaces (APIs) play a pivotal role in enabling seamless communication and collaboration between different software systems. While the term might sound technical, the advantages of APIs extend far beyond the realm of programmers and developers. In this blog, we will explore the advantages of APIs in plain language and how they can benefit businesses and users alike.<a href="javascript:;" onClick={() => navigate('/blog/blogdetail/harnessing-power-of-apis-unveiling-the-key-advantages')} className="btn btn-link">Read More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="blog-content">
                                <div className="single-blog-content wow fadeInUp animated delay-4s">
                                    <div className="inner-box">
                                        <div className="lower-content">
                                            <div className="upper-box">
                                                <div className="post-date"><i className="las la-calendar"></i>Sep 10, 2023</div>
                                                <h3><a href="javascript:;" onClick={() => navigate('/blog/blogdetail/boosting-developer-productivity')}>Boosting Developer Productivity: A Guide to Harnessing the Power of Public APIs</a></h3>
                                                <div className="gray-500">In today's fast-paced digital landscape, developers are constantly under pressure to deliver high-quality software quickly. The key to staying competitive in this environment lies in improving developer productivity. One effective way to achieve this is by leveraging public APIs (Application Programming Interfaces). Public APIs provide developers with access to pre-built functionalities and data, saving time and effort that would otherwise be spent reinventing the wheel. In this blog post, we'll explore how developers can harness the power of public APIs to supercharge their productivity.<a href="javascript:;" onClick={() => navigate('/blog/blogdetail/boosting-developer-productivity')} className="btn btn-link">Read More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </Layout>
    );
};

export default BlogPage;

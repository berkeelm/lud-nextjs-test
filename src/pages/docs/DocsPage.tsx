"use client";
import React from "react";
import PageHeader from "../../components/PageHeader";
import Layout from "../../layouts/Layout";
import Docs from "./Docs";
import DocsMain from "./DocsMain";

const DocsPage = () => {
    return (
        <Layout>
            <PageHeader
                title="Documentation"
                desc="Getting Started"
            />
            <hr />
            <Docs>
                <DocsMain />
            </Docs>
        </Layout>
    );
};

export default DocsPage;

import React from "react";
import Layout from "../components/Layout";

export default function ProjectDescription({ data }) {
    const project = data.markdownRemark;
    return (
        <Layout fullMenu>
            <section id="wrapper">
                <header>
                    <div className="inner">
                        <h2>{project.frontmatter.title}</h2>
                    </div>
                </header>
                <div className="wrapper">
                    <div className="inner" dangerouslySetInnerHTML={{ __html: project.html }}>
                    </div></div>
            </section>
        </Layout>
    )

}

export const query = graphql`
query($slug : String!){
    markdownRemark(fields : {slug : {eq : $slug}}){
        frontmatter {
            title
            shortDesc
        }
        html
    }
}
`

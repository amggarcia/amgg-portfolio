import React from "react"
import Layout from "../components/Layout"


export default function ProjectDescription({ data }) {
    const project = data.markdownRemark;
    return (
        <Layout>
            <h1>{project.frontmatter.title}</h1>
            <p>{project.frontmatter.shortDesc}</p>
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
    }
}
`

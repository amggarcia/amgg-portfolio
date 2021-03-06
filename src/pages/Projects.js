
import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby"

import Img from "gatsby-image"

export default function ProjectDescription({ data }) {
  return (
    <Layout fullMenu>
      <section id="wrapper">
        <header>
          <div className="inner" style={{ textAlign: 'center' }}>
            <h2>Projects</h2>
          </div>
        </header>
        <section id="four" className="wrapper">
          <div className="inner">
            <p>
              These are some of the projects in which i had the oportunity to work on, some professionaly others being personal side-projects that you might find on my github.
          </p>
            <p>You can find more detailed information for each project, such as technologies used and noteworthy aspects in the project detail sectio.</p>
            <section className="features">
              {/*Missing image handling */}
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <article key={node.id}>
                  <Link to={node.fields.slug} className="image">
                    <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                  </Link>
                  <h3 className="major">{node.frontmatter.title}</h3>
                  <p>{node.frontmatter.shortDesc}</p>
                  <Link to={"/" + node.fields.slug} className="special">Detail</Link>
                </article>
              ))}
            </section>
          </div>
        </section>
      </section>
    </Layout >
  )

}

export const query = graphql`
  query {
    allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          date
          shortDesc
           image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
  }`


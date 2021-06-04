import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import toolsPic from '../assets/images/tools.jpg';

import config from '../../config';
import Img from 'gatsby-image';

export default function IndexPage({ data }) {
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <div className="logo">
            <span className="icon fa-desktop"></span>
          </div>
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
        </div>
      </section>

      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <div className="content">
            <h2 className="major">About me</h2>
            <p>
              Hello my name is André Garcia, i am a software developer from
              Portugal with industry experience building web applications,
              back-end services and API's using .Net Core, Javascript, Angular,
              Vue.js and React.
            </p>
            <p>
              Always looking forward to find and learn the best tool for the job
              at hand, and the oportunity to take on new and interesting
              challenges.
            </p>
            {/*
        <a href="/#" className="special">
            Learn more
            </a>
        */}
          </div>
        </div>
      </section>

      <section id="wrapper">
        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a href="/#" className="image">
              <img src={toolsPic} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Skills</h2>
              <ul className="alt">
                <li>
                  <span className="list-title">Technologies </span>
                  <span className="list-info"> C#, Typescript, Javascript</span>
                </li>
                <li>
                  <span className="list-title">Frameworks </span>{' '}
                  <span className="list-info">
                    Vue.js, React, Angular, .Net Core MVC
                  </span>
                </li>
                <li>
                  <span className="list-title">Databases </span>{' '}
                  <span className="list-info">
                    Microsoft SQL Server, Oracle, DB2
                  </span>
                </li>
                <li>
                  <span className="list-title">Languages </span>{' '}
                  <span className="list-info"> Portuguese, English</span>
                </li>
              </ul>
              {/*
        <a href="/#" className="special">
            Learn more
            </a>
        */}
            </div>
          </div>
        </section>

        <section id="four" className="wrapper style2">
          <div className="inner">
            <h2 className="major">Projects</h2>
            <p>
              These are some of the projects in which i had the oportunity to
              work on, some professionaly others being personal side-projects
              that you might find on my github
            </p>
            <p>
              You can find more detailed information for each project, such as
              technologies used and noteworthy aspects in the project details
              section.
            </p>
            <section className="features">
              {/*Missing image handling */}
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <article key={node.id}>
                  <Link to={node.fields.slug} className="image">
                    <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                  </Link>
                  <h3 className="major">{node.frontmatter.title}</h3>
                  <p>{node.frontmatter.shortDesc}</p>
                  <Link to={node.fields.slug} className="special">
                    Detail
                  </Link>
                </article>
              ))}
            </section>
            <ul className="actions">
              <li>
                <Link to="/Projects" className="special">
                  Browse All
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </Layout>
  );
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

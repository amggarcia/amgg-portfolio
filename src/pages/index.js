import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
export default function IndexPage({ data }) {
  return (

    <Layout>
      <section id="banner">
        <div className="inner">
          <div className="logo">
            <span className="icon fa-diamond"></span>
          </div>
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
        </div>
      </section>

      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Who am I ?</h2>
            <p>
              Back-end developer with industry experience building web applications, back-end services and API's using .Net Core, Typescript and Angular.
            </p>
            <p>
              Always looking forward to find and learn the best tool for the job at hand, and the oportunity to take on new and interesting challenges.
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
              <img src={pic3} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Skills</h2>
              <ul className="alt">
                <li><span className="list-title">Technologies </span>
                  <span className="list-info"> C#, Typescript, Javascript</span></li>
                <li><span className="list-title">Framework </span> <span className="list-info"> Angular, .Net Core MVC</span></li>
                <li><span className="list-title">Databases </span> <span className="list-info"> Microsoft SQL Server, Oracle, DB2</span></li>
                <li><span className="list-title">Languages </span> <span className="list-info"> Portuguese,  English</span></li>
              </ul>
              {/*
        <a href="/#" className="special">
            Learn more
            </a>
        */}
            </div></div>
        </section>

        <section id="four" className="wrapper style2">
          <div className="inner">
            <h2 className="major">Projects</h2>
            <p>
              These are some of the projects in which i had the oportunity to work on, some professionaly others being personal side-projects that you might find on my github
          </p>
            <p>You can find more detailed information for each project, such as technologies used and noteworthy aspects in the project detail sectio.</p>
            <section className="features">
              {/*Missing image handling */}
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <article key={node.id}>
                  <Link to={node.fields.slug} className="image">
                    <img src={pic4} alt="" />
                  </Link>
                  <h3 className="major">{node.frontmatter.title}</h3>
                  <p>{node.frontmatter.shortDesc}</p>
                  <Link to={node.fields.slug} className="special">Detail</Link>
                </article>
              ))}
            </section>
            <ul className="actions">
              <li>
                <Link to="/Projects" className="special">Browse All</Link>
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
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
  }`

import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
const IndexPage = () => (
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
            <ul class="alt">
              <li><span class="list-title">Technologies </span>
                <span class="list-info"> C#, Typescript, Javascript</span></li>
              <li><span class="list-title">Framework </span> <span class="list-info"> Angular, .Net Core MVC</span></li>
              <li><span class="list-title">Databases </span> <span class="list-info"> Microsoft SQL Server, Oracle, DB2</span></li>
              <li><span class="list-title">Languages </span> <span class="list-info"> Portuguese,  English</span></li>
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
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Financial investment web application</h3>
              <p>
                Fullstack development of a financial investment advisory web platform for a bank, with the main goal of simplifying the process of creating and finalizing investment proposals for both the client and account manager.
              </p>
              <a href="/#" className="special">
                Detail
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Dynamic configurable form collection platform</h3>
              <p>
                Development of a dynamic/configurable information collection and submission platform in the financial sector.
              </p>
              <a href="/#" className="special">
                Detail
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">SMS notification service for Field Force Management platform</h3>
              <p>
                Development of a Windows Service based software to monitor real time changes in the workflows of a Field Force Management platform and notify the client through SMS of said changes.
              </p>
              <a href="/#" className="special">
                Detail
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Personal portfolio website</h3>
              <p>
                Development of the website you are on currently.
              </p>
              <a href="/#" className="special">
                Detail
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;

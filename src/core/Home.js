import React, { Fragment } from "react";
import FeaturedPosts from "../posts/FeaturedPost";
import Posts from "../posts/posts";
import { Footer } from "./Footer";
const Home = () => (
  <Fragment>
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 dataAos="fade-up">
              We provide a free platform for taleneted technical writers like
              you
            </h1>
            <h2 dataAos="fade-up" dataAosDelay="400">
              Tackle interesting topics every day
            </h2>
            <div dataAos="fade-up" dataAosDelay="600">
              <div className="text-center  text-lg-start">
                <a
                  href="/signin"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Get Started</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img"
            dataAos="zoom-out"
            dataAos-delay="200"
          >
            <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>

    {/* how we work */}

    <section id="values" className="values">
      <div className="container" dataAos="fade-up">
        <header className="section-header">
          <h2>How it works</h2>
          {/* <!-- <p>Odit est perspiciatis laborum et dicta</p */}
        </header>

        <div className="row">
          <div className="col-lg-4" dataAos="fade-up" dataAosDelay="200">
            <div className="box">
              <img src="assets/img/values-1.png" className="img-fluid" alt="" />
              <h3> Create an account</h3>
              <p>
                {" "}
                To Publish your article you need to create an account with us.{" "}
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 mt-4 mt-lg-0"
            dataAos="fade-up"
            dataAosDelay="400"
          >
            <div className="box">
              <img src="assets/img/values-3.png" className="img-fluid" alt="" />
              <h3> Write an article</h3>
              <p> Choose a topic and write an article. </p>
            </div>
          </div>

          <div
            className="col-lg-4 mt-4 mt-lg-0"
            dataAos="fade-up"
            dataAosDelay="600"
          >
            <div className="box">
              <img src="assets/img/values-2.png" className="img-fluid" alt="" />

              <h3>Publish your article</h3>
              <p> Publish your article and get it published on the website. </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="recent-blog-posts" className="recent-blog-posts">
      <div className="container" dataAos="fade-up">
        <header className="section-header">
          <h2>Blog</h2>
          <p>Recent posts form our Blog</p>
        </header>

        <div className="row " >
          <FeaturedPosts />
        </div>
      </div>
    </section>
    <Footer />
  </Fragment>
);
export default Home;

{
  /* <Posts/> */
}

import React, { Fragment } from "react";
import Posts from "../posts/posts";
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
            <h2 dataAos="fade-up" dataAos-delay="400">
              Tackle interesting topics every day
            </h2>
            <div dataAos="fade-up" dataAos-delay="600">
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

    <section id="blog" className="blog">
      <header class="section-header">
        <h2>Blog</h2>
        <p>Recent posts form our Blog</p>
      </header>
      <div className="container" dataAos="fade-up">
        <Posts />
      </div>
    </section>
  </Fragment>
);
export default Home;

{
  /* <Posts/> */
}

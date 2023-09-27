import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow your image is{" "}
                    <strong className="brand-name">India Stock Images See Royality Free Images</strong>
                  </h1>
                  <h2 className="my-3">
                    this is beatutiful images in capture in more places
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/images" className="btn-get-started">
                      Get Started Images
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-1 header-img">
                  <img src="https://images.unsplash.com/photo-1695504236952-37306fc71896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    className="img-show"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

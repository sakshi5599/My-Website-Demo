import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="bg-image">
        <img
          src="https://media.istockphoto.com/id/1176054530/photo/smart-city-and-communication-network-concept-5g-lpwa-wireless-communication.jpg?s=1024x1024&w=is&k=20&c=kf6BwyDyc3FQvKG8irgqRoLKxXU5MSnNbkdpJpV4jDM="
          alt="image"
        />
      </div>

      <div className="bg-text">
        <h1>I am Good Capture Photographer :Peter </h1>
        <p>And I'm a Photographer</p>
      </div>

      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-4 mx-auto">
              <div className="row">
                <h1 className="name-header">--This is Contact Page--</h1>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <div className="card">
                      <img
                        src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt="..."
                        className="img-thumbnail"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Photographer 1</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer. contact me:78787878787
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        className="img-thumbnail"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Photographer 2</h5>
                        <p className="card-text">
                          This card has supporting text below as a natural
                          lead-in to additional content contact me :909090909
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col">
                    <div className="card h-100">
                      <img
                        src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        className="img-thumbnail"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Photographer 3</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This card has
                          even longer content than the first to show that equal
                          height action. contact me:989898989
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </div>
                    </div>
                  </div>*/}
                </div> 
              </div>
            </div>
          </div>
        </div>
        {/* create form */}
      </section>

      
    </>
  );
}

export default Contact;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import coverright from "../images/coverright.jpg";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      // console.log(data);
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);
  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p className="pt-5">WELCOME</p>
          <h1>{userName}</h1>
          <h2>
            {" "}
            {show
              ? "Happy, to see you back"
              : "Expressway is here for all your courier needs"}
          </h2>
        </div>
        <div className="mt-3">
          <NavLink to="/contact" className="form-submit ">
            Order a Pickup
          </NavLink>
        </div>
      </div>
      {/*
      <div>
        <section id="header" className="d-flex align-item-center">
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                      Send your parcel with
                      <strong className="brand-name">
                        {" "}
                        Expressway Courier
                      </strong>
                    </h1>
                    <h2>We handel your things asif it's ours</h2>
                    <div className="mt-3">
                      <NavLink to="/booking" className="btn-get-started">
                        Book a pickup
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={coverright}
                      className="img-fluid animated"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>*/}
      <div className="contact_info ">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-12 ">
              <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image">
                    <img
                      src="https://img.icons8.com/office/24/000000/iphone.png"
                      alt=""
                    />
                  </div>
                  <div className="contact_info_content">
                    <div className="home_info_title">ASAP</div>
                    <div className="home_info_text">
                      We can deliver ASAP or at a specified time documents,
                      products, flowers, any product
                    </div>
                  </div>
                </div>
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image">
                    <img
                      src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png"
                      alt=""
                    />
                  </div>
                  <div className="contact_info_content">
                    <div className="home_info_title">₹ 50</div>
                    <div className="home_info_text">
                      Start from ₹ 50 for hyperlocal tariff in Mumbai and ₹ 8
                      per km in zone 1
                    </div>
                  </div>
                </div>
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image">
                    <img
                      src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png"
                      alt=""
                    />
                  </div>
                  <div className="contact_info_content">
                    <div className="home_info_title">Safety</div>
                    <div className="home_info_text">
                      Your products are safe and that's a guarantee
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-page">
        <div className="container">
          <section id="header" className="d-flex align-item-center">
            <div className="container-fluid nav_bg">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h1>
                        Send your parcel with
                        <strong className="brand-name">
                          {" "}
                          Expressway Courier
                        </strong>
                      </h1>
                      <h2>We handel your things asif it's ours</h2>
                      <div className="mt-3">
                        <NavLink to="/booking" className="form-submit">
                          Book a pickup
                        </NavLink>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img
                        src={coverright}
                        className="img-fluid animated"
                        alt="home img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

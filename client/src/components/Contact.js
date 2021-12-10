import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    saddress: "",
    smessage: "",
    rname: "",
    rphone: "",
    raddress: "",
    rmessage: "",
  });

  const weightoption = [
    {
      label: "Upto 1/2 Kg",
      value: 1,
    },
    {
      label: "Upto 5 Kg",
      value: 2,
    },
    {
      label: "Upto 10 Kg",
      value: 3,
    },
    {
      label: "Upto 20 Kg",
      value: 3,
    },
  ];

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
        saddress: data.saddress,
        smessage: data.smessage,
        rname: data.rname,
        rphone: data.rphone,
        raddress: data.raddress,
        rmessage: data.rmessage,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  // we are storing data in states

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  //  send the data to backend

  const contactForm = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      smessage,
      saddress,
      rname,
      rphone,
      raddress,
      rmessage,
    } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        saddress,
        smessage,
        rname,
        rphone,
        raddress,
        rmessage,
      }),
    });

    const data = await res.json();

    if (!data) {
      console.log("message not send ");
    } else {
      alert("Message Send");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                  <div className="contact_info_image">
                    <img
                      src="https://img.icons8.com/office/24/000000/iphone.png"
                      alt=""
                    />
                  </div>
                  <div className="contact_info_content">
                    <div className="contact_info_title">Phone</div>
                    <div className="contact_info_text">+91 7506881668</div>
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
                    <div className="contact_info_title">Email</div>
                    <div className="contact_info_text">
                      contact@expressway.com
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
                    <div className="contact_info_title">Address</div>
                    <div className="contact_info_text">
                      Sion, Mumbai, MH, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Weight  */}
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-md-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Weight</div>
                <input
                  type="number"
                  id="contact_form_phone"
                  className="contact_form_phone input_field"
                  name="phone"
                  value={userData.rphone}
                  onChange={handleInputs}
                  placeholder="What is the weight of your parcel"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* from address form  */}

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">From </div>
                <form method="POST" id="contact_form">
                  <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      name="name"
                      value={userData.name}
                      onChange={handleInputs}
                      placeholder="Your name"
                      required
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      name="email"
                      value={userData.email}
                      onChange={handleInputs}
                      placeholder="Your Email"
                      required
                    />

                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputs}
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                  <div className="contact_form_text mt-5">
                    <textarea
                      className="text_field contact_form_message"
                      name="saddress"
                      value={userData.saddress}
                      onChange={handleInputs}
                      placeholder="Street name & Locality name"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="contact_form_text mt-5">
                    <textarea
                      className="text_field contact_form_message"
                      name="smessage"
                      value={userData.smessage}
                      onChange={handleInputs}
                      placeholder="flat number, floor, building name, street name, landmarks, etc."
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*to adress form */}

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">To </div>
                <form method="POST" id="contact_form">
                  <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      name="name"
                      value={userData.rname}
                      onChange={handleInputs}
                      placeholder="Recievers Name"
                      required
                    />

                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      name="phone"
                      value={userData.rphone}
                      onChange={handleInputs}
                      placeholder="Recievers Phone Number"
                      required
                    />
                  </div>
                  <div className="contact_form_text mt-5">
                    <textarea
                      className="text_field contact_form_message"
                      name="Raddress"
                      value={userData.raddress}
                      onChange={handleInputs}
                      placeholder="Recievers Street name & Locality name"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="contact_form_text mt-5">
                    <textarea
                      className="text_field contact_form_message"
                      name="Rmessage"
                      value={userData.rmessage}
                      onChange={handleInputs}
                      placeholder="Recievers flat number, floor, building name, street name, landmarks, etc."
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                      onClick={contactForm}
                    >
                      Confirm Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-md-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title"> </div>
                <input
                  type="number"
                  id="contact_form_phone"
                  className="contact_form_phone input_field"
                  name="phone"
                  value={userData.rphone}
                  onChange={handleInputs}
                  placeholder="What are you sending in the parcel"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

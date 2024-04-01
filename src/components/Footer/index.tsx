// import React from "react";
// import Map from "../Ui/Map";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2>Contacts</h2>

        <div className="footer_wrapper">
          <div className="footer_content">
            <div className="contact_item">
              <i className="bx bxs-location-plus"></i>
              <div className="footer_text">
                <h4>Address</h4>
                <p>
                  Uzbekistan, Tashkent, National Park of Uzbekistan named after
                  Alisher Navoi
                </p>
              </div>
            </div>

            <div className="contact_item">
              <i className="bx bxs-phone-call"></i>

              <div className="footer_text">
                <h4>Phone</h4>
                <p>+998 71 288 88 88</p>
              </div>
            </div>

            <div className="contact_item">
              <i className="bx bxs-alarm"></i>

              <div className="footer_text">
                <h4>Working hours</h4>
                <p>09:00 - 18:00 Mon-Sat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="map">{/* <Map /> */}</div>
      </div>
    </footer>
  );
};

export default Footer;

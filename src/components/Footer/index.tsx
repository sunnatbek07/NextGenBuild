// import React from "react";
// import Map from "../Ui/Map";
import { Link } from "react-router-dom";
import DarkLogoImg from "../../assets/images/NextGenBuildingDark.png";
import "./style.scss";

const Footer = () => {
  return (
    <footer id="contacts">
      <div className="container">
        <h2>Contacts</h2>
        <div className="items_container">
          <div className="footer_wrapper">
            <div className="footer_content">
              <div className="contact_item">
                <i className="bx bxs-location-plus"></i>
                <div className="footer_text">
                  <h4>Address</h4>
                  <p>
                    Uzbekistan, Tashkent, National Park of Uzbekistan named
                    after Alisher Navoi
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
          <div className="form">
            <form action="">
              <div className="input">
                <label>Phone number</label>
                <input type="tel" placeholder="+998" />
              </div>
              <div className="input">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <button>Send</button>
            </form>
          </div>

          <div className="social">
            <Link
              to={
                "https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push"
              }
              target="_blank"
            >
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link
              to={"https://instagram.com/discover_invest?igshid=ZDdkNTZiNTM="}
              target="_blank"
            >
              <i className="bx bxl-instagram"></i>
            </Link>
            <Link to={"https://t.me/discovery_invest"} target="_blank">
              <i className="bx bxl-telegram"></i>
            </Link>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="footer_logo">
            <img src={DarkLogoImg} className="logo_light" alt="Company logo" />
            <p>NextGen Build</p>
          </div>
          <p className="copy">&copy; NextGen Build. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import Map from "../Ui/Map";
import { Link } from "react-router-dom";
import DarkLogoImg from "../../assets/images/NextGenBuildingDark.png";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { sendData } from "../../api/form";

const Footer = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (phoneNumber.length == 0) {
      toast.error(`${t("contactsPage.msgName")}`);
    } else if (name.length == 0) {
      toast.error(`${t("msgNumber")}`);
    } else {
      try {
        const message = `Name: ${name}, Phone Number ${phoneNumber}`;
        toast.success(`${t("contactsPage.msgSuccess")}`);
        sendData(message);
        setName("");
        setPhoneNumber("");
      } catch (error) {
        console.error(`${t("msgError")}`, error);
      }
    }
  };
  return (
    <footer id="contacts">
      <div className="container">
        <h2>{t("header.contacts")}</h2>
        <div className="items_container">
          <div className="footer_wrapper">
            <div className="footer_content">
              <div className="contact_item">
                <i className="bx bxs-location-plus"></i>
                <div className="footer_text">
                  <h4>{t("footer.address")}</h4>
                  <p>{t("footer.realAddress")}</p>
                </div>
              </div>

              <div className="contact_item">
                <i className="bx bxs-phone-call"></i>

                <div className="footer_text">
                  <h4>{t("footer.phone")}</h4>
                  <p>+998 71 288 88 88</p>
                </div>
              </div>

              <div className="contact_item">
                <i className="bx bxs-alarm"></i>

                <div className="footer_text">
                  <h4>{t("footer.workingHoursTxt")}</h4>
                  <p>{t("footer.workingHours")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <form action="" onSubmit={handleSubmit}>
              <div className="input">
                <label>{t("footer.phoneNumber")}</label>
                <input
                  type="tel"
                  placeholder="+998"
                  value={name}
                  required
                  onChange={handleName}
                />
              </div>
              <div className="input">
                <label>{t("footer.name")}</label>
                <input
                  required
                  type="text"
                  placeholder={t("footer.placeholder")}
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                />
              </div>
              <button>{t("footer.feedback")}</button>
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
          <p className="copy">&copy; {t("footer.copy")}</p>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;

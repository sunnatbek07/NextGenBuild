import { useTranslation } from "react-i18next";
import "./style.scss";
import { useEffect } from "react";

const Contacts = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="contacts2">
      <div className="mask"></div>
      <div className="container">
        <div className="main_content">
          <h1>{t("header.contacts")}</h1>
          <p>{t("contactsPage.cpText")}</p>
        </div>
        <a href="#contacts">
          <button>
            <i className="bx bx-down-arrow-alt"></i>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contacts;

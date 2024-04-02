import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/NextGen_Build-logo.png";
import DarkLogoImg from "../../assets/images/NextGenBuildingDark.png";
import "./style.scss";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n/i18next";

type Anchor = "right";

const Header = () => {
  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18next.language
  );

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage);
    setSelectedLanguage(selectedLanguage);
  };

  const [open, setOpen] = useState({ right: false });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen({ [anchor]: open });
    };

  const DrawerList = (anchor: Anchor) => (
    <Box
      sx={{ width: 320 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="w-full text-end px-2">
        <i
          className="bx bx-x text-right text-4xl cursor-pointer"
          onClick={toggleDrawer(anchor, false)}
        ></i>
      </div>
      <ul className="nav__list">
        <li className="nav__list--item" onClick={toggleDrawer(anchor, false)}>
          <NavLink to={"/about"} className={"nav__list--item-link"}>
            {t("header.about")}
          </NavLink>
        </li>
        <li className="nav__list--item" onClick={toggleDrawer(anchor, false)}>
          <NavLink to={"/projects"} className={"nav__list--item-link"}>
            {t("header.projects")}
          </NavLink>
        </li>
        <li className="nav__list--item" onClick={toggleDrawer(anchor, false)}>
          <NavLink to={"/news"} className={"nav__list--item-link"}>
            {t("header.news")}
          </NavLink>
        </li>
        <li className="nav__list--item" onClick={toggleDrawer(anchor, false)}>
          <NavLink to={"/contacts"} className={"nav__list--item-link"}>
            {t("header.contacts")}
          </NavLink>
        </li>
      </ul>

      <div className="social_links">
        <Link
          to={
            "https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push"
          }
          target="_blank"
          onClick={toggleDrawer(anchor, false)}
        >
          <i className="bx bxl-facebook"></i>
        </Link>
        <Link
          onClick={toggleDrawer(anchor, false)}
          to={"https://instagram.com/discover_invest?igshid=ZDdkNTZiNTM="}
          target="_blank"
        >
          <i className="bx bxl-instagram"></i>
        </Link>
        <Link
          onClick={toggleDrawer(anchor, false)}
          to={"https://t.me/discovery_invest"}
          target="_blank"
        >
          <i className="bx bxl-telegram"></i>
        </Link>
      </div>

      <div className="drawer_select">
        <select
          name="language"
          id="#lang"
          onChange={changeLanguage}
          value={selectedLanguage}
        >
          <option value="uz">Uz</option>
          <option value="rus">Ру</option>
          <option value="eng">Eng</option>
        </select>
      </div>
    </Box>
  );

  const [darkLago, setDarkLogo] = useState(false);

  window.addEventListener("scroll", () => {
    const element = document.getElementsByTagName("header");
    const elementStyle = element[0] as HTMLElement;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      if (elementStyle) {
        elementStyle.style.backgroundColor = "white";
        elementStyle.style.color = "black";
        setDarkLogo(true);
      }
    } else {
      if (elementStyle) {
        elementStyle.style.backgroundColor = "transparent";
        elementStyle.style.color = "white";
        setDarkLogo(false);
      }
    }
  });

  return (
    <header>
      <div className="container">
        <div className="header_wrapper">
          <div className="header_left">
            <Link to="/" className="header_logo">
              <img
                src={darkLago ? DarkLogoImg : Logo}
                className="logo_light"
                alt="Company logo"
              />
              <p>NextGen Build</p>
            </Link>

            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__list--item">
                  <NavLink to={"/about"} className={"nav__list--item-link"}>
                    {t("header.about")}
                  </NavLink>
                </li>
                <li className="nav__list--item">
                  <NavLink to={"/projects"} className={"nav__list--item-link"}>
                    {t("header.about")}
                  </NavLink>
                </li>
                <li className="nav__list--item">
                  <NavLink to={"/news"} className={"nav__list--item-link"}>
                    {t("header.news")}
                  </NavLink>
                </li>
                <li className="nav__list--item">
                  <NavLink to={"/contacts"} className={"nav__list--item-link"}>
                    {t("header.contacts")}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header_right">
            <div className="social_links">
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
            <select
              name="language"
              id="#lang"
              onChange={changeLanguage}
              value={selectedLanguage}
            >
              <option value="uz">Uz</option>
              <option value="rus">Ру</option>
              <option value="eng">Eng</option>
            </select>
            <Link to={"tel:+ 998 (71) 288 88 88"} className="tel">
              <p>+ 998 (71) 288 88 88</p>
              <i className="bx bxs-phone"></i>
            </Link>
            {(["right"] as const).map((anchor) => (
              <button className="menu_btn" onClick={toggleDrawer(anchor, true)}>
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55828 0H9.34968C9.76296 0 10.1593 0.164175 10.4515 0.45641C10.7438 0.748644 10.908 1.145 10.908 1.55828C10.908 1.97156 10.7438 2.36792 10.4515 2.66015C10.1593 2.95238 9.76296 3.11656 9.34968 3.11656H1.55828C1.145 3.11656 0.748644 2.95238 0.45641 2.66015C0.164175 2.36792 0 1.97156 0 1.55828C0 1.145 0.164175 0.748644 0.45641 0.45641C0.748644 0.164175 1.145 0 1.55828 0V0ZM12.4662 12.4662H20.2576C20.6709 12.4662 21.0673 12.6304 21.3595 12.9227C21.6517 13.2149 21.8159 13.6112 21.8159 14.0245C21.8159 14.4378 21.6517 14.8342 21.3595 15.1264C21.0673 15.4186 20.6709 15.5828 20.2576 15.5828H12.4662C12.053 15.5828 11.6566 15.4186 11.3644 15.1264C11.0721 14.8342 10.908 14.4378 10.908 14.0245C10.908 13.6112 11.0721 13.2149 11.3644 12.9227C11.6566 12.6304 12.053 12.4662 12.4662 12.4662ZM1.55828 6.23312H20.2576C20.6709 6.23312 21.0673 6.3973 21.3595 6.68953C21.6517 6.98176 21.8159 7.37812 21.8159 7.7914C21.8159 8.20468 21.6517 8.60104 21.3595 8.89327C21.0673 9.1855 20.6709 9.34968 20.2576 9.34968H1.55828C1.145 9.34968 0.748644 9.1855 0.45641 8.89327C0.164175 8.60104 0 8.20468 0 7.7914C0 7.37812 0.164175 6.98176 0.45641 6.68953C0.748644 6.3973 1.145 6.23312 1.55828 6.23312Z"
                    fill={darkLago ? "black" : "white"}
                  ></path>
                </svg>
              </button>
            ))}
          </div>
        </div>
        {(["right"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={open[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {DrawerList(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </header>
  );
};

export default Header;

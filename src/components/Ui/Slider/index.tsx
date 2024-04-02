import { Swiper, SwiperSlide } from "swiper/react";
import OfficeImage from "../../../assets/images/Office.jpg";
import NewYearImage from "../../../assets/images/NewYear.webp";
import ConstitutionImage from "../../../assets/images/UzbekistanConstitution.webp";
import Houses from "../../../assets/images/GoldenHouse.jpg";

import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const { t } = useTranslation();
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      height={440}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      rewind={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },

        1240: {
          slidesPerView: 3,
        },
      }}
      modules={[Autoplay, Pagination, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={OfficeImage} className="slide_image" alt="Card image" />
        <div className="mask"></div>
        <div className="content">
          <h4>{t("home.newsTitle1")}</h4>
          <p>{t("home.newsText1")}</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={NewYearImage} className="slide_image" alt="Card image" />
        <div className="mask"></div>
        <div className="content">
          <h4>{t("home.newsTitle2")}</h4>
          <p>{t("home.newsText2")}</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={ConstitutionImage} className="slide_image" alt="Card image" />
        <div className="mask"></div>
        <div className="content">
          <h4>{t("home.newsTitle3")}</h4>
          <p>{t("home.newsText3")}</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Houses} className="slide_image" alt="Card image" />
        <div className="mask"></div>
        <div className="content">
          <h4>{t("home.newsTitle4")}</h4>
          <p>{t("home.newsText4")}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

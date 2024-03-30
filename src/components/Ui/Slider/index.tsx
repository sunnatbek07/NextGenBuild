import { Swiper, SwiperSlide } from "swiper/react";
import OfficeImage from "../../../assets/images/Office.jpg";
import NewYearImage from "../../../assets/images/NewYear.webp";
import ConstitutionImage from "../../../assets/images/UzbekistanConstitution.webp";
import Houses from "../../../assets/images/GoldenHouse.jpg";

import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
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
            slidesPerView: 3
        }
      }}
      modules={[Autoplay, Pagination, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={OfficeImage} className="slide_image" alt="Card image" />
        <div className="mask"></div>
        <div className="content">
          <h4>Who is the project manager of construction?</h4>
          <p>
            Discover Invest has several construction project managers. This is
            the specialist responsible for the successful sale of real estate
            building. Directs the entire process, from the stage of planning and
            approval of project documentation to the commissioning of the
            building and performs post-project support as well.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={NewYearImage} className="slide_image" alt="Card image" />
        <div className="mask"></div>
        <div className="content">
          <h4>
            NexGenBuild congratulates everyone on a coming Happy New Year 2023!
          </h4>
          <p>
            NextGen Build congratulates everyone on a coming Happy New Year
            2023! We wish that every day of the next year opens up new prospects
            and that there are always reliable partners nearby. Good health,
            happiness and good luck in all your endeavors!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={ConstitutionImage} className="slide_image" alt="Card image" />
        <div className="mask"></div>
        <div className="content">
          <h4>
            THE DAY WHEN THE CONSTITUTION OF THE REPUBLIC OF UZBEKISTAN WAS
            ADOPTED
          </h4>
          <p>
            NextGen Build construction company expresses its deep respect and
            congratulates you on the Constitution Day of the Republic of
            Uzbekistan! We sincerely congratulate you on the holiday and wish
            each of you well-being, success, a happy and peaceful future!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Houses} className="slide_image" alt="Card image" />
        <div className="mask"></div>
        <div className="content">
          <h4>
            We continue to introduce you to Discover Invest's wide range of
            construction properties.
          </h4>
          <p>
            We continue to introduce you to NextGen Build's wide range of
            construction properties. Among them is the Yangi Choshtepa
            residential complex which is being built in the Yangihayot town of
            Tashkent. The total area of the settlement is 12 hectares. To date,
            29 houses have been built and handed over by the company.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

import { Link } from "react-router-dom";
import "./style.scss";

const Home = () => {
  return (
    <>
      <section id="intro" className="bg-[rgba(0,0,0,.05)]">
        <div className="mask"></div>
        <div className="container">
          <div className="intro_wrapper">
            <h1 className="">NextGen Build</h1>

            <p>Orzularni haqiqatga aylantirish</p>

            <div className="intro_buttons">
              <Link to={"/projects"}>
                <div>
                  <button className="projects_btn">Loyihalar</button>
                </div>
              </Link>
              <Link to={"/contact"}>
                <div>
                  <button className="contact_btn">Aloqa</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <h2 className="about_title">
            <span>About</span>
            <span>NextGen Build</span>
          </h2>
          <div className="about_end">
            <p className="about_end-text">
              Kompaniyamiz nafaqat loyihalarni takomillashtirish, balki yangi
              imkoniyatlar uchun ham o'z eshiklarini ochadi. Davlat miqyosidagi
              imoratlarni barpo qilish bilan birga, istiqbol uchun ham asos
              solishda davom etamiz Biz atrof-muhit haqida qayg'uramiz:
              kompaniya binolar va infratuzilma poydevorlarini barpo etishdan
              tashqari, ulardan foydalanish bilan bog'liq ekologik jihatlar
              uchun hamma ma’suliyatni o'z zimmasiga oladi.
            </p>

            <div className="grid_container">
              <div></div>
              <div>
                <h5>4000+</h5>
                <p>The number of employees</p>
              </div>
              <div>
                <h5>150+</h5>
                <p>projects</p>
              </div>
              <div>
                <h5>150+</h5>
                <p>projects</p>
              </div>
              <div>
                <h5>150+</h5>
                <p>projects</p>
              </div>
              <div>
                <h5>150+</h5>
                <p>projects</p>
              </div>
              <div>
                <h5>About</h5>
              </div>
              <div>
                <h5>150+</h5>
                <p>projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="advantages">
        <div className="container">
          <h2 className="adv_title">
            <span>Our</span>
            <span>Advantages</span>
          </h2>

          <div className="adv_card-wrapper">
            <div className="adv_card">
              <svg
                width="114.000000"
                height="114.000000"
                viewBox="0 0 114 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <clipPath id="clip1_323">
                    <rect
                      id="SVG"
                      width="114.000000"
                      height="114.000000"
                      transform="translate(-0.766174 -0.603516)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#clip1_323)">
                  <path
                    id="Vector"
                    d="M97.99 58.22C94.24 61.97 88.16 61.97 84.4 58.22C80.65 54.47 80.65 48.38 84.4 44.63C88.16 40.88 94.24 40.88 97.99 44.63C101.75 48.38 101.75 54.47 97.99 58.22Z"
                    stroke="#262524"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector"
                    d="M66.69 48.4C60.91 54.18 51.54 54.18 45.77 48.4C39.99 42.62 39.99 33.25 45.77 27.48C51.54 21.7 60.91 21.7 66.69 27.48C72.47 33.25 72.47 42.62 66.69 48.4Z"
                    stroke="#262524"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector"
                    d="M28.05 58.22C24.3 61.97 18.22 61.97 14.46 58.22C10.71 54.47 10.71 48.38 14.46 44.63C18.22 40.88 24.3 40.88 28.05 44.63C31.81 48.38 31.81 54.47 28.05 58.22Z"
                    stroke="#262524"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector"
                    d="M108.48 89.64L108.48 84.44C108.48 77.88 103.16 72.56 96.6 72.56L92.8 "
                    stroke="#262524"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <path
                    id="Vector"
                    d="M3.98 89.64L3.98 84.44C3.98 77.88 9.29 72.56 15.85 72.56L19.66 "
                    stroke="#262524"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <path
                    id="Vector"
                    d="M81.59 89.64L81.59 82.04C81.59 72.86 74.15 65.41 64.96 65.41L47.49 65.41C38.31 65.41 30.86 72.86 30.86 82.04L30.86 "
                    stroke="#262524"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
              <h4>Our team</h4>
              <p>
                The company recruits experienced employees on a competitive
                basis
              </p>
            </div>

            <div className="adv_card">
              <svg
                width="114.000000"
                height="114.000000"
                viewBox="0 0 114 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <clipPath id="clip1_333">
                    <rect
                      id="SVG"
                      width="114.000000"
                      height="114.000000"
                      transform="translate(-0.766113 -0.603516)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <g clip-path="url(#clip1_333)">
                  <path
                    id="Vector"
                    d="M70.48 26.7C72.06 26.7 73.51 27.6 74.21 29.02L76.32 33.31C76.93 34.54 78.1 35.39 79.45 35.58L84.18 36.27C85.75 36.5 87.05 37.59 87.54 39.1C88.02 40.6 87.62 42.25 86.48 43.36L83.06 46.7C82.08 47.65 81.64 49.03 81.87 50.38L82.67 55.09C82.94 56.65 82.3 58.22 81.02 59.15C79.74 60.08 78.04 60.2 76.64 59.47L72.41 57.24C71.2 56.61 69.76 56.61 68.55 57.24L64.31 59.47C62.91 60.2 61.22 60.08 59.94 59.15C58.66 58.22 58.02 56.65 58.28 55.09L59.09 50.38C59.32 49.03 58.88 47.65 57.9 46.7L54.47 43.36C53.34 42.25 52.93 40.6 53.42 39.1C53.91 37.59 55.21 36.5 56.78 36.27L61.51 35.58C62.86 35.39 64.03 34.54 64.64 33.31L66.75 29.02C67.45 27.6 68.9 26.7 70.48 26.7Z"
                    stroke="#262524"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector"
                    d="M51.48 75.39C43.61 75.39 37.23 69.01 37.23 61.14L37.23 27.89C37.23 20.02 43.61 13.64 51.48 13.64L89.48 13.64C97.35 13.64 103.73 20.02 103.73 27.89L103.73 61.14C103.73 69.01 97.35 75.39 89.48 75.39L89.48 82.51C89.48 83.43 88.95 84.26 88.12 84.66C87.3 85.05 86.31 84.93 85.6 84.35L74.6 75.39L51.48 75.39Z"
                    stroke="#262524"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector"
                    d="M37.23 46.89L22.98 46.89C15.11 46.89 8.73 53.27 8.73 61.14L8.73 80.14C8.73 88.01 15.11 94.39 22.98 94.39L22.98 101.51C22.98 102.43 23.51 103.26 24.33 103.66C25.16 104.05 26.14 103.93 26.85 103.35L37.86 94.39L51.48 94.39C59.35 94.39 65.73 88.01 65.73 80.14L65.73 "
                    stroke="#262524"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </g>
              </svg>

              <h4>Our team</h4>
              <p>
                The company recruits experienced employees on a competitive
                basis
              </p>
            </div>

            <div className="adv_card">
              <svg
                width="114.000000"
                height="114.000000"
                viewBox="0 0 114 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <clipPath id="clip1_340">
                    <rect
                      id="SVG"
                      width="114.000000"
                      height="114.000000"
                      transform="translate(-0.766113 -0.603516)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <g clip-path="url(#clip1_340)">
                  <path
                    id="Vector"
                    d="M71.99 48.52L52.29 68.22L40.47 "
                    stroke="#262524"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <path
                    id="Vector"
                    d="M59.25 14.75C57.54 13.28 54.92 13.28 53.2 14.75C44.81 21.94 34.18 26.59 22.5 27.52C20.07 27.71 18.23 29.79 18.23 32.22L18.23 52.79C18.23 73.53 33.22 92.99 53.75 98.79C55.36 99.25 57.1 99.25 58.71 98.79C79.24 92.98 94.23 73.54 94.23 52.8L94.23 32.23C94.23 29.79 92.39 27.71 89.95 27.52C78.27 26.59 67.64 21.94 59.25 14.75Z"
                    stroke="#262524"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>

              <h4>Our team</h4>
              <p>
                The company recruits experienced employees on a competitive
                basis
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="container">
          <h2 className="projects_title">
            <span>Our</span>
            <span>projects</span>
          </h2>
          <div className="projects_wrapper">
            <div className="projects_card">
              <h4>Magic City</h4>
              <p>
                Magic city is a large socially significant project. The cultural
                and entertainment cluster in Tashkent is one of the new
                attractions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

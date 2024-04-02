import MagicCityImage from "../../assets/images/magic_city.jpg";
import BoulevardImage from "../../assets/images/boulevard.webp";
import GoldenHouseImage from "../../assets/images/GoldenHouse.jpg";
import FononImage from "../../assets/images/Fonon.webp";
import InventoImage from "../../assets/images/Invento.webp";
import ShcoolImage from "../../assets/images/PresidentSchool.webp";
import "./style.scss";

const Projects = () => {
  return (
    <>
      <section id="projects2">
        <div className="mask"></div>
        <div className="container">
          <div className="main_content">
            <h1>Projects</h1>
            <p>
              We don't just create projects, we create new opportunities. By
              building state-scale facilities, we are building the future. We
              care about the environment:
            </p>
          </div>
          <a href="#projects2_content">
            <button>
              <i className="bx bx-down-arrow-alt"></i>
            </button>
          </a>
        </div>
      </section>
      <section id="projects2_content">
        <div className="container">
          <div className="projects_wrapper">
            <div className="projects_card">
              <img src={MagicCityImage} alt="Card image" />
              <div className="content">
                <h4>Magic City</h4>
                <p>
                  Magic city is a large socially significant project. The
                  cultural and entertainment cluster in Tashkent is one of the
                  new attractions.
                </p>
              </div>
            </div>

            <div className="projects_card">
              <img src={BoulevardImage} alt="Card image" />
              <div className="content">
                <h4>Boulevard</h4>
                <p>
                  Magic city is a large socially significant project. The
                  cultural and entertainment cluster in Tashkent is one of the
                  new attractions.
                </p>
              </div>
            </div>

            <div className="projects_card">
              <img src={GoldenHouseImage} alt="Card image" />
              <div className="content">
                <h4>Golden House</h4>
                <p>
                  Magic city is a large socially significant project. The
                  cultural and entertainment cluster in Tashkent is one of the
                  new attractions.
                </p>
              </div>
            </div>

            <div className="projects_card">
              <img src={FononImage} alt="Card image" />
              <div className="content">
                <h4>Fonon</h4>
                <p>
                  Magic city is a large socially significant project. The
                  cultural and entertainment cluster in Tashkent is one of the
                  new attractions.
                </p>
              </div>
            </div>

            <div className="projects_card">
              <img src={InventoImage} alt="Card image" />
              <div className="content">
                <h4>Invento</h4>
                <p>
                  Magic city is a large socially significant project. The
                  cultural and entertainment cluster in Tashkent is one of the
                  new attractions.
                </p>
              </div>
            </div>

            <div className="projects_card">
              <img src={ShcoolImage} alt="Card image" />
              <div className="content">
                <h4>President Schools</h4>
                <p>
                  Magic city is a large socially significant project. The
                  cultural and entertainment cluster in Tashkent is one of the
                  new attractions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

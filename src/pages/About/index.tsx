import { useEffect } from "react";
import { Link } from "react-router-dom";
import CompanyImage from "../../assets/images/bg-company.jpg";
import "./style.scss";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id="about2">
        <div className="mask"></div>
        <div className="container">
          <div className="main_content">
            <h1>About company</h1>
            <p>
              We don't just create projects, we create new opportunities. By
              building state-scale facilities, we are building the future. We
              care about the environment:
            </p>
            <div className="btn_bg">
              <button>Download presentation</button>
            </div>
          </div>
        </div>
      </section>
      <section id="about_info">
        <div className="container">
          <div className="about_us">
            <h2>About company</h2>

            <div className="about2_card">
              <div className="img_bg">
                <img src={CompanyImage} alt="About page image" />
              </div>
              <p>
                We don't just create projects, we create new opportunities. By
                building state-scale facilities, we are building the future. We
                care about the environment: the company takes full
                responsibility for the environmental aspects related to the
                construction and operation of buildings and infrastructure.
              </p>

              <Link to={"/projects"}>
                <div className="btn_bg">
                  <button>Projects</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid_container">
            <div>
              <h5>9</h5>
              <p>Years on the market</p>
            </div>
            <div>
              <h5>3000+</h5>
              <p>The number of employees</p>
            </div>
            <div>
              <h5>50+</h5>
              <p>projects</p>
            </div>
            <div>
              <h5>6</h5>
              <p>Rezidential complexes</p>
            </div>
            <div>
              <h5>250+</h5>
              <p>Special techniques recuperated</p>
            </div>
            <div>
              <h5>2+</h5>
              <p>Hospitals</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

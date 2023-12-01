import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faAt,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SectionHeader from "./components/section-header";
import WhatIDo from "./components/what-i-do-list";
import ProgressCard from "./components/progress-card";
import Skills from "./components/skills";
import MyPortfolio from "./components/my-portfolio";
import CvDownloadButton from "./components/cv-download-button";
import profile from "./db";

function App() {
  return (
    <div className="app dark">
      <div className="container portfolio">
        <section className="row bio-data">
          <div className="col-sm-12 col-lg-4 image-container">
            <img
              src={process.env.PUBLIC_URL + "me1.jpg"}
              alt="profile"
              className="img-fluid d-block"
            />
          </div>
          <div className="col-sm-12 col-lg-8 personal-container">
            <h5 className="greeting-header text-sm-center">
              Hello and welcome 👋🏼,
            </h5>
            <div className="col-sm-12 spacer mini"></div>
            <h1 className="text-sm-center">
              I am <span className="my-name">David Olurebi</span>.
            </h1>
            <hr />
            <div className="personal-data row">
              <div className="col-sm-12 spacer mini"></div>

              <ul className="col-sm-12 personal-data_list row">
                <li className="personal-data-item-1 col-sm-6 col-lg-4 row mt-3">
                  <div className="col-sm-1">
                    <FontAwesomeIcon icon={faPhone} color="turquoise" />{" "}
                  </div>
                  <div className="col-sm-10">+37069236033</div>
                </li>
                <li className="personal-data-item-2 col-sm-6 col-lg-4 row mt-3">
                  <div className="col-sm-1">
                    <FontAwesomeIcon icon={faAt} color="turquoise" />
                  </div>
                  <div className="col-sm-10">olurebidavid@gmail.com</div>
                </li>
                <li className="personal-data-item-3 col-sm-6 col-lg-4 row mt-3">
                  <div className="col-sm-1">
                    <FontAwesomeIcon icon={faLinkedin} color="turquoise" />
                  </div>
                  <div className="col-sm-10">
                    <a
                      href="https://www.linkedin.com/in/david-olurebi-50894b121/"
                      target="_blank"
                      rel={"noreferrer"}
                    >
                      David Olurebi
                    </a>
                  </div>
                </li>
                <li className="personal-data-item-4 col-sm-6 col-lg-4 row mt-3">
                  <div className="col-sm-1">
                    <FontAwesomeIcon icon={faLocationDot} color="turquoise" />
                  </div>
                  <div className="col-sm-10">Vilnius, Lithuania</div>
                </li>
                {/*<li className="personal-data-item-4 col-sm-6 col-lg-4 row mt-3">
                  <div className="col-sm-1">
                    <FontAwesomeIcon icon={faMedium} color="turquoise" />
                  </div>
                  <div className="col-sm-10">
                    <a
                      href="https://medium.com/@olurebidavid"
                      target="_blank"
                      rel={"noreferrer"}
                    >
                      David Olurebi
                    </a>
                  </div>
                </li>*/}
              </ul>

              <div className="col-sm-12 download-btn-wrp">
                <CvDownloadButton />
              </div>
            </div>
          </div>
        </section>

        <div className="col-sm-12 spacer"></div>
        <section className="about-me text-center">{profile.about_me}</section>

        <div className="col-sm-12 spacer"></div>

        <section className="what-i-do text-sm-center text-md-start">
          <SectionHeader
            title={"What I Do"}
            classNames={["what-i-do__header"]}
          />
          <WhatIDo list={profile.what_i_do} />
        </section>

        <div className="col-sm-12 spacer"></div>

        <section className="work-xp col-sm-12">
          <SectionHeader
            title={"Work Experience"}
            classNames={["work-xp__header", "text-sm-center", "text-md-start"]}
          />
          <ProgressCard progressList={profile.work_experience} />
        </section>

        <div className="col-sm-12 spacer"></div>
        <section className="my-education col-sm-12">
          <SectionHeader
            title={"Education"}
            classNames={[
              "education__header",
              "text-sm-center",
              "text-md-start",
            ]}
          />
          <ProgressCard progressList={profile.education} />
        </section>

        <div className="col-sm-12 spacer"></div>
        <section className="my-skills col-sm-12 text-sm-center text-md-start">
          <SectionHeader
            title={"Skills"}
            classNames={["portfolio__header", "text-md-start"]}
          />
          <Skills skills={profile.skills} />
        </section>

        <div className="col-sm-12 spacer"></div>
        <section className="my-portfolio">
          <SectionHeader
            title={"Portfolio"}
            classNames={[
              "portfolio__header",
              "text-sm-center",
              "text-md-start",
            ]}
          />
          <MyPortfolio portfolio={profile.portfolio} />
        </section>

        <div className="col-sm-12 spacer"></div>
        <div className="col-sm-12 spacer"></div>
      </div>
    </div>
    // <div>
    //   <img
    //       alt="Barcode Generator TEC-IT"
    //       src="https://barcode.tec-it.com/barcode.ashx?data=https://lilac-client.netlify.app/&code=QRCode&translate-esc=on&eclevel=L&clientId=650703aa6d7d64104e441fcf&idNumber=10"
    //   />
    // </div>
  );
}

export default App;

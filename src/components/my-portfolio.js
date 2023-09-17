import React, { useState } from "react";
import "../styles/my-portfolio.css";
import ProjectModal from "./modal";

const MyPortfolio = ({ portfolio }) => {
  const [show, setShow] = useState(false);
  const [activeProject, setActiveProject] = useState({});

  const modalClickHandler = (project) => {
    setShow(true);
    setActiveProject(project);
  };

  return (
    <>
      <div className="row justify-content-center">
        {portfolio.map((project, index) => (
          <div
            className="card col-md-6 col-lg-4"
            key={index}
            onClick={() => modalClickHandler(project)}
          >
            <img src={project.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
            </div>
          </div>
        ))}
      </div>
      {show && <ProjectModal setShow={setShow} project={activeProject} />}
    </>
  );
};
export default MyPortfolio;

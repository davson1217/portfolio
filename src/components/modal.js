import React from "react";
import "../styles/project-modal.css";

const ProjectModal = ({ setShow, project }) => {
  const ProjectLink = ({ title, link }) => (
    <a
      href={link}
      target="_blank"
      className="col-sm-6 project-link"
      rel="noreferrer"
    >
      {title}
    </a>
  );

  return (
    <div id="myModal" className="modal" onClick={() => setShow(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="row">
          <h5 className="col-sm-10">{project.title}</h5>
          <span className="close col-sm-2" onClick={() => setShow(false)}>
            &times;
          </span>
        </div>
        <div className="mt-3">
          {project.description}
          <ul className="techs-used m-2">
            <b>
              <u>In this project</u>
            </b>
            {project.in_this_project.map((tech, index) => (
              <li className="" key={index}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="row justify-content-center text-center">
          {project.see_code && (
            <ProjectLink link={project.code_link} title={"See Code"} />
          )}
          {project.see_project && (
            <ProjectLink link={project.project_link} title={"See Project"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

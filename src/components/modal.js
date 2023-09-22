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
        {project.barcode_embedded && (
          <div className="row text-center mt-5">
            <h6 className="col-sm-12">Scan to see client site</h6>
            <div className="col-sm-12 col-md-6">
              <img
                alt="Barcode Generator TEC-IT"
                src="https://barcode.tec-it.com/barcode.ashx?data=https%3A%2F%2Flilac-client.netlify.app%2F%3FclientId%3D6417924cf50e1f02c3e3bd7a%26idNum%3D2&code=QRCode&multiplebarcodes=true&eclevel=L"
              />
              <h6 className="p-2">Client with data</h6>
            </div>
            <div className="col-sm-12 col-md-6">
              <img
                alt="Barcode Generator TEC-IT"
                src="https://barcode.tec-it.com/barcode.ashx?data=https%3A%2F%2Flilac-client.netlify.app%2F%3FclientId%3D+650703aa6d7d64104e441fcf%26idNum%3D100&code=QRCode&multiplebarcodes=true&eclevel=L"
              />
              <h6 className="p-2">Client with no data</h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;

/*
          <div className="">
            {project.barcode_embed.map((barcode, index) => (
              <div key={index}>
                <img
                  alt="Barcode Generator TEC-IT"
                  src={barcode}
                  // src="https://barcode.tec-it.com/barcode.ashx?data=Restaurant+e-commerce+Demo.&code=QRCode"
                />
              </div>
            ))}
          </div>
* */

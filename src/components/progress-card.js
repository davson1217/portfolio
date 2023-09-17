import React from "react";
import "../styles/progress-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProgressCard = ({ progressList }) => {
  return (
    <div className="progress-list row g-2 justify-content-sm-center justify-content-md-start">
      {progressList.map((progress, index) => (
        <div className="progress col-sm-12 col-md-6 col-lg-4 row" key={index}>
          <header className="progress-header row">
            <div className="col-sm-12 progress-header-item row">
              <div className="progress-header__icon col-sm-1">
                <FontAwesomeIcon
                  icon={progress.role_icon}
                  color="turquoise"
                  size={"lg"}
                />
              </div>
              <div className="progress-header__text col-sm-9">
                {progress.role_title}
              </div>
            </div>
            <div className="col-sm-12 progress-header-item row">
              <div className="progress-header__icon col-sm-1">
                <FontAwesomeIcon
                  icon={progress.organisation_icon}
                  color="turquoise"
                  size={"lg"}
                />
              </div>
              <div className="progress-header__text col-sm-9">
                {progress.organisation_name}
              </div>
            </div>
            <div className="col-sm-12 progress-header-item row">
              <div className="progress-header__icon col-sm-1">
                <FontAwesomeIcon
                  icon={progress.experience_duration_icon}
                  color="turquoise"
                  size={"lg"}
                />
              </div>
              <div className="progress-header__text col-sm-9">
                {progress.experience_duration}
              </div>
            </div>
          </header>
          {progress.has_description && (
            <>
              <hr />
              <div className="progress-description">
                <p>{progress.experience_description}</p>
                <ul>
                  {progress.duties.map((duty, index) => (
                    <li key={index}>
                      <div className="text-success">{duty.title}</div>
                      <ul>
                        {duty.experiences.length &&
                          duty.experiences.map((experience, index) => (
                            <li key={index}>{experience.xp}</li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressCard;

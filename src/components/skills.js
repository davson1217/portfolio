import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategorizedSkills = ({ categories }) => {
  return categories.map((category, index) => (
    <ul key={index}>
      <div className="dev text-warning p-2">{category.title}</div>
      {category.skills.map((item, index) => (
        <li className="skill col-sm-12 row" key={index}>
          <div className="col-sm-1 skill-icon">
            <FontAwesomeIcon icon={item.skill_icon} color={item.icon_color} />
          </div>
          <div className="col-sm-10 skill-title">{item.skill_title}</div>
        </li>
      ))}
    </ul>
  ));
};

const RegularSkills = ({ skills }) => {
  return skills.map((item, index) => (
    <li className="skill col-sm-12 row" key={index}>
      <div className="col-sm-1 skill-icon">
        <FontAwesomeIcon icon={item.skill_icon} color={item.icon_color} />
      </div>
      <div className="col-sm-10 skill-title">{item.skill_title}</div>
    </li>
  ));
};

const Skills = ({ skills }) => {
  return (
    <div className="row">
      {skills.map((skill, index) => (
        <ul className="col-sm-12 col-md-6 col-lg-4 row" key={index}>
          <div className="skill-list-header col-sm-12 mb-3">{skill.title}</div>
          {skill.is_categorized ? (
            <CategorizedSkills categories={skill.categories} />
          ) : (
            <RegularSkills skills={skill.skills} />
          )}
        </ul>
      ))}
    </div>
  );
};

export default Skills;

import React from "react";
import "../styles/what-i-do.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhatIDo = ({ list }) => {
  return (
    <ul className="what-i-do__list row">
      {list.map((item, index) => (
        <li
          className="what-item-1 col-sm-12 col-md-6 col-lg-4 mb-3 row"
          key={index}
        >
          <div className="what-i-do-icon col-sm-2">
            <FontAwesomeIcon icon={item.icon} color="turquoise" size={"2x"} />
          </div>
          <div className="what-i-do-title col-sm-9">{item.title}</div>
        </li>
      ))}
    </ul>
  );
};

export default WhatIDo;

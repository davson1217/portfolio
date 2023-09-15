import React from "react";
import '../styles/what-i-do.css'
import {
    faDatabase, faGamepad,
    faGear,
    faPen, faPersonWalking,
    faServer,
    faSquarePersonConfined,
    faWindowMaximize
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WhatIDo = () => {
    return (
        <ul className="what-i-do__list row">
            <li className="what-item-1 col-sm-12 col-md-6 col-lg-4 mb-3 row">
                <div className="what-i-do-icon col-sm-2"><FontAwesomeIcon icon={faDatabase} color='turquoise' size={"2x"}/></div>
                <div className="what-i-do-title col-sm-9">Database Design</div>
            </li>

            <li className="what-item-1 col-sm-12 col-md-6 col-lg-4 mb-4 row">
                <div className="what-i-do-icon col-sm-2"><FontAwesomeIcon icon={faSquarePersonConfined} color='turquoise' size={"2x"}/></div>
                <div className="what-i-do-title col-sm-8">UX Desgin</div>
            </li>

            <li className="what-item-1 col-sm-12 col-md-6 col-lg-4 mb-4 row">
                <div className="what-i-do-icon col-sm-2"><FontAwesomeIcon icon={faWindowMaximize} color='turquoise' size={"2x"}/></div>
                <div className="what-i-do-title col-sm-8">Frontend Web Development</div>
            </li>

            <li className="what-item-1 col-sm-12 col-md-6 col-lg-4 mb-4 row">
                <div className="what-i-do-icon col-sm-2"><FontAwesomeIcon icon={faServer} color='turquoise' size={"2x"}/></div>
                <div className="what-i-do-title col-sm-8">Server Development</div>
            </li>

            <li className="what-item-1 col-sm-12 col-md-6 col-lg-4 mb-4 row">
                <div className="what-i-do-icon col-sm-2"><FontAwesomeIcon icon={faGear} color='turquoise' size={"2x"}/></div>
                <div className="what-i-do-title col-sm-8">Machine Learning</div>
            </li>

            <li className="what-item-1 col-sm-12 col-md-6 col-lg-4 mb-4 row">
                <div className="what-i-do-icon col-sm-2"><FontAwesomeIcon icon={faPen} color='turquoise' size={"2x"}/></div>
                <div className="what-i-do-title col-sm-8">Writing</div>
            </li>

            <li className="what-item-1 col-sm-12 col-md-6 col-lg-4 mb-4 row">
                <div className="what-i-do-icon col-sm-2"><FontAwesomeIcon icon={faPersonWalking} color='turquoise' size={"2x"}/></div>
                <div className="what-i-do-title col-sm-8">Sports</div>
            </li>

            <li className="what-item-1 col-sm-12 col-md-6 col-lg-4 mb-4 row">
                <div className="what-i-do-icon col-sm-2"><FontAwesomeIcon icon={faGamepad} color='turquoise' size={"2x"}/></div>
                <div className="what-i-do-title col-sm-8">Video Games</div>
            </li>
        </ul>
    )
}

export default WhatIDo;
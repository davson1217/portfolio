import React from "react";
import "../styles/progress-card.css"
import {faBook, faBuilding, faCalendar, faCode, faSchool} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = () => {
    return (
        <div className="progress-list row g-2">
            <div className="progress col-sm-12 col-md-6 col-lg-4 row">
                <header className="progress-header row">
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faBook} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">Informatics (M.sc)</div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faSchool} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">Vilnius University, Lithuania</div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faCalendar} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">September 2021 - June 2023</div>
                    </div>
                </header>
                <div className="progress-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                </div>
            </div>

            <div className="progress col-sm-12 col-md-6 col-lg-4 row">
                <header className="progress-header row">
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faBook} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">Informatics (B.sc)</div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faSchool} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">University of Georgia, Georgia</div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faCalendar} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">September 2016 - July 2020</div>
                    </div>
                </header>
                <div className="progress-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                </div>
            </div>

            <div className="progress col-sm-12 col-md-6 col-lg-4 row">
                <header className="progress-header row">
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faBook} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">Computer Science (College)</div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faSchool} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">Federal Polytechnic Ilaro, Nigeria</div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faCalendar} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">September 2013 - July 2015</div>
                    </div>
                </header>
                <div className="progress-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                </div>
            </div>

        </div>
    )
}

export default Education
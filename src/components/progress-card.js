import React from "react";
import "../styles/progress-card.css"
import {faBuilding, faCalendar, faCode} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProgressCard = () => {
    return (
        <div className="progress-list row g-2 justify-content-sm-center justify-content-md-start">
            <div className="progress col-sm-12 col-md-6 col-lg-4 row">
                <header className="progress-header row">
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faCode} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">Fullstack Developer</div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faBuilding} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">Kickertech UAB</div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faCalendar} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">July 2022 - Present</div>
                    </div>
                </header>
                <div className="progress-description">
                    <p>My duties at Kickertech, a spinoff of TGLAB and subsidiary company of Betsson Group, includes:</p>
                    <ul>
                        <li>
                            <div className="text-success">Frontend Development</div>
                            <ul>
                                <li>Same duties as described in my TGLab experience.</li>
                            </ul>
                        </li>
                        <li>
                            <div className="text-success">Backend Development</div>
                            <ul>
                                <li>ExpressJs (NodeJs)</li>
                                <li>MVC architecture</li>
                                <li>MySql, MongoDB, Prisma ORM</li>
                            </ul>
                        </li>
                        <li>
                            <div className="text-success">Microservice</div>
                            <ul>
                                <li>REST API</li>
                                <li>RabbitMQ</li>
                                <li>Docker</li>
                            </ul>
                        </li>
                        <li>
                            <div className="text-success">Team/Customer Consultation</div>
                            <ul>
                                <li>Sync-up meetings</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="progress col-sm-12 col-md-6 col-lg-4 row">
                <header className="progress-header row">
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faCode} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">Frontend Developer</div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faBuilding} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">TGLab UAB</div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faCalendar} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">November 2021 - July 2022</div>
                    </div>
                </header>
                <div className="progress-description">
                    <p> Worked in a multidisciplinary agile team building a B2B iGaming product:</p>
                    <ul>
                        <li>
                            <div className="text-success">Frontend Development</div>
                            <ul>
                                <li>Building and maintenance of responsive modularised components</li>
                                <li>ReactJs</li>
                                <li>Redux</li>
                                <li>React Router</li>
                                <li>Websocket Client</li>
                                <li>Redux dev tools</li>
                            </ul>
                        </li>
                        <li>
                            <div className="text-success">Customer Consultation</div>
                            <ul>
                                <li> end-to-end communication and documentation of a feature in pipeline</li>
                                <li>Planning</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="progress col-sm-12 col-md-6 col-lg-4 row">
                <header className="progress-header row">
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faCode} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">Fullstack Developer</div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faBuilding} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">Glospace Logistics</div>
                    </div>
                    <div className="col-sm-12 row">
                        <div className="progress-header__icon col-sm-1">
                            <FontAwesomeIcon icon={faCalendar} color='turquoise' size={"lg"}/>
                        </div>
                        <div className="progress-header__text col-sm-9">September 2019 - August 2021</div>
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

export default ProgressCard
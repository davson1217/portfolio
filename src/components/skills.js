import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCss3, faDocker,
    faGithub,
    faHtml5,
    faJs,
    faLaravel,
    faNodeJs,
    faPython,
    faReact
} from "@fortawesome/free-brands-svg-icons";
import {
    faComputer,
    faDatabase,
    faFlask,
    faGear,
    faLanguage,
    faLeaf,
    faLock,
    faMicroscope
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
        <div className="row">
            <ul className="col-sm-12 col-md-6 col-lg-4 row">
                <div className="skill-list-header col-sm-12 mb-3">Languages</div>
                <ul>
                    <div className="dev text-warning p-2">Dev</div>
                    <li className="skill col-sm-12 row">
                        <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faJs} color='turquoise'/></div>
                        <div className="col-sm-10 skill-title">JavaScript</div>
                    </li>
                    <li className="skill col-sm-12 row">
                        <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faPython} color='turquoise'/></div>
                        <div className="col-sm-10 skill-title">Python</div>
                    </li>
                    <li className="skill col-sm-12 row">
                        <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faHtml5} color='turquoise'/></div>
                        <div className="col-sm-10 skill-title">HTML5</div>
                    </li>
                    <li className="skill col-sm-12 row">
                        <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faCss3} color='turquoise'/></div>
                        <div className="col-sm-10 skill-title">CSS3</div>
                    </li>
                </ul>
                <ul>
                    <div className="spoken text-warning p-2">Spoken</div>
                    <li className="skill col-sm-12 row">
                        <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faLanguage} color='turquoise'/></div>
                        <div className="col-sm-10 skill-title">English</div>
                    </li>
                    <li className="skill col-sm-12 row">
                        <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faLanguage} color='turquoise'/></div>
                        <div className="col-sm-10 skill-title">Yoruba</div>
                    </li>
                    <li className="skill col-sm-12 row">
                        <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faLanguage} color='turquoise'/></div>
                        <div className="col-sm-10 skill-title">Georgian</div>
                    </li>
                    <li className="skill col-sm-12 row">
                        <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faLanguage} color='turquoise'/></div>
                        <div className="col-sm-10 skill-title">Dutch</div>
                    </li>
                </ul>
            </ul>

            <ul className="col-sm-12 col-md-6 col-lg-4 row">
                <div className="skill-list-header col-sm-12 mb-3">Framework/Libraries</div>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faReact} color='turquoise'/></div>
                    <div className="col-sm-10 skill-title">React</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faReact} color='purple'/></div>
                    <div className="col-sm-10 skill-title">Redux</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faNodeJs} color='lightblue'/></div>
                    <div className="col-sm-10 skill-title">ExpressJs</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faNodeJs} color='red'/></div>
                    <div className="col-sm-10 skill-title">NestJs</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faNodeJs} color='blue'/></div>
                    <div className="col-sm-10 skill-title">TypeScript</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faLaravel} color='tomato'/></div>
                    <div className="col-sm-10 skill-title">Laravel</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faFlask} color='turquoise'/></div>
                    <div className="col-sm-10 skill-title">Flask</div>
                </li>
            </ul>

            <ul className="col-sm-12 col-md-6 col-lg-4 row">
                <div className="skill-list-header col-sm-12 mb-3">Other</div>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faGear} color='turquoise'/></div>
                    <div className="col-sm-10 skill-title">Webpack</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faComputer} color='turquoise'/></div>
                    <div className="col-sm-10 skill-title">Object-oriented Programming</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faGithub} color='turquoise'/></div>
                    <div className="col-sm-10 skill-title">Git</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faDocker} color='lightblue'/></div>
                    <div className="col-sm-10 skill-title">Docker</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faDatabase} color='lightblue'/></div>
                    <div className="col-sm-10 skill-title">SQL/NoSQL/Embedded DBs</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faLock} color='red'/></div>
                    <div className="col-sm-10 skill-title">OAuth</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faLeaf} color='green'/></div>
                    <div className="col-sm-10 skill-title">Latex</div>
                </li>
                <li className="skill col-sm-12 row">
                    <div className="col-sm-1 skill-icon"><FontAwesomeIcon icon={faGear} color='white'/></div>
                    <div className="col-sm-10 skill-title">SkLearn</div>
                </li>
            </ul>
        </div>
    )
}

export default Skills;
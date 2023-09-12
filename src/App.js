import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone,
    faAt,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faMedium,
} from '@fortawesome/free-brands-svg-icons'
import SectionHeader from "./components/section-header";
import WhatIDo from "./components/what-i-do-list";
import ProgressCard from "./components/progress-card";
import Education from "./components/education";
import Skills from "./components/skills";
import MyPortfolio from "./components/my-portfolio";

function App() {

  return (
    <div className="app dark">
       <div className="container portfolio">

           <section className="row bio-data">
               <div className="col-sm-12 col-lg-4 image-container">
                   <img src={process.env.PUBLIC_URL + 'me1.jpg'} alt="profile photo" className="img-fluid d-block"/>
               </div>
               <div className="col-sm-12 col-lg-8 personal-container">
                   <h5 className="greeting-header text-sm-center">Hello and welcome 👋🏼</h5>
                   <div className="col-sm-12 spacer mini"></div>
                   <h1 className="text-sm-center">I am <span className="my-name">David Olurebi</span></h1>
                   <hr/>
                   <div className="personal-data row">
                       <div className="col-sm-12 spacer mini"></div>
                       <ul className="col-sm-12 personal-data_list row">
                           <li className="personal-data-item-1 col-sm-6 col-lg-4 row mt-3">
                               <div className="col-sm-1"><FontAwesomeIcon icon={faPhone} color='turquoise'/> </div>
                               <div className="col-sm-10">+37069236033</div>
                           </li>
                           <li className="personal-data-item-2 col-sm-6 col-lg-4 row mt-3">
                               <div className="col-sm-1"><FontAwesomeIcon icon={faAt} color='turquoise'/></div>
                               <div className="col-sm-10">olurebidavid@gmail.com</div>
                           </li>
                           <li className="personal-data-item-3 col-sm-6 col-lg-4 row mt-3">
                               <div className="col-sm-1"><FontAwesomeIcon icon={faLinkedin} color='turquoise'/></div>
                               <div className="col-sm-10"><a href="https://www.linkedin.com/in/david-olurebi-50894b121/" target="_blank">David Olurebi</a></div>
                           </li>
                           <li className="personal-data-item-4 col-sm-6 col-lg-4 row mt-3">
                               <div className="col-sm-1"><FontAwesomeIcon icon={faLocationDot} color='turquoise'/></div>
                               <div className="col-sm-10">Vilnius, Lithuania</div>
                           </li>
                           <li className="personal-data-item-4 col-sm-6 col-lg-4 row mt-3">
                               <div className="col-sm-1"><FontAwesomeIcon icon={faMedium} color='turquoise'/></div>
                               <div className="col-sm-10"><a href="https://medium.com/@olurebidavid" target="_blank">David Olurebi</a></div>
                           </li>
                       </ul>
                       <div className="col-sm-12 text-center p-5">
                           <div className="bg-success cv-download-btn p-1" style={{width: "200px", cursor: "pointer"}}>Download My CV</div>
                       </div>
                   </div>
               </div>
           </section>

           <div className="col-sm-12 spacer"></div>

           <section className="about-me text-center">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
               ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
               anim id est laborum.
           </section>

           <div className="col-sm-12 spacer"></div>

           <section className="what-i-do text-sm-center text-md-start">
               <SectionHeader title={"What I Do"} classNames={['what-i-do__header']}/>
               <WhatIDo/>
           </section>

           <div className="col-sm-12 spacer"></div>

           <section className="work-xp col-sm-12">
               <SectionHeader title={"Work Experience"} classNames={['work-xp__header', 'text-sm-center', 'text-md-start']}/>
               <ProgressCard/>
           </section>

           <div className="col-sm-12 spacer"></div>
           <section className="my-education col-sm-12">
               <SectionHeader title={"Education"} classNames={['education__header', 'text-sm-center', 'text-md-start']}/>
               <Education/>
           </section>

           <div className="col-sm-12 spacer"></div>
           <section className="my-skills col-sm-12 text-sm-center text-md-start">
               <SectionHeader title={"Skills"} classNames={['portfolio__header', 'text-md-start']}/>
               <Skills/>
           </section>

           <div className="col-sm-12 spacer"></div>
           <section className="my-portfolio">
               <SectionHeader title={"Portfolio"} classNames={['portfolio__header', 'text-sm-center', 'text-md-start']}/>
               <MyPortfolio/>
           </section>

           <div className="col-sm-12 spacer"></div>
           <div className="col-sm-12 spacer"></div>
       </div>
    </div>
  );
}

export default App;

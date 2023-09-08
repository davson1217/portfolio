import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <div className="app dark">
       <div className="container portfolio">

           <section className="row bio-data">
               <div className="col-sm-12 col-lg-4 image-container">
                   <img src={process.env.PUBLIC_URL + 'me.jpg'} alt="profile photo" className="img-fluid d-block"/>
               </div>
               <div className="col-sm-12 col-lg-8 personal-container">
                   <h5 className="greeting-header">Hello and welcome to my portfolio 👋</h5>
                   <div className="col-sm-12 spacer mini"></div>
                   <h1>I'm David Olurebi</h1>
                   <hr/>
                   <div className="personal-data row">
                       {/*<div className="col-sm-12 spacer"></div>*/}
                       <ul className="col-sm-12 personal-data_list row">
                           <li className="personal-data-item-1 col-sm-6 col-lg-4 row">
                               <div className="col-sm-2"><FontAwesomeIcon icon={faCoffee} /></div>
                               <div className="col-sm-6">Coffee</div>
                           </li>
                           <li className="personal-data-item-2 col-sm-6 col-lg-4 row">
                               <div className="col-sm-2"><FontAwesomeIcon icon={faCoffee} /></div>
                               <div className="col-sm-6">Coffee</div>
                           </li>
                           <li className="personal-data-item-3 col-sm-6 col-lg-4 row">
                               <div className="col-sm-2"><FontAwesomeIcon icon={faCoffee} /></div>
                               <div className="col-sm-6">Coffee</div>
                           </li>
                           <li className="personal-data-item-4 col-sm-6 col-lg-4 row">
                               <div className="col-sm-2"><FontAwesomeIcon icon={faCoffee} /></div>
                               <div className="col-sm-6">Coffee</div>
                           </li>
                       </ul>
                   </div>
               </div>
           </section>
           <div className="col-sm-12 spacer"></div>

           <section className="about-me">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
               ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
               anim id est laborum.
           </section>
           <div className="col-sm-12 spacer"></div>
           <section className="what-i-do">
               <header className="what-i-do__header">What I Do</header>
               <ul className="what-i-do__list row">
                   <li className="what-item-1 col-sm-6 col-lg-4">Item 1</li>
                   <li className="what-item-1 col-sm-6 col-lg-4">Item 2</li>
                   <li className="what-item-1 col-sm-6 col-lg-4">Item 3</li>
                   <li className="what-item-1 col-sm-6 col-lg-4">Item 4</li>
                   <li className="what-item-1 col-sm-6 col-lg-4">Item 5</li>
                   <li className="what-item-1 col-sm-6 col-lg-4">Item 6</li>
                   <li className="what-item-1 col-sm-6 col-lg-4">Item 7</li>
                   <li className="what-item-1 col-sm-6 col-lg-4">Item 8</li>
                   <li className="what-item-1 col-sm-6 col-lg-4">Item 9</li>
               </ul>
           </section>
           <div className="col-sm-12 spacer"></div>
           <section className="my-resume">
               <header className="my-resume__header">My Resume</header>
               <ul className="my-resume__list row">
                   <li className="my-resume-1 col-sm-6 col-lg-4">Item 1</li>
                   <li className="my-resume-2 col-sm-6 col-lg-4">Item 2</li>
                   <li className="my-resume-3 col-sm-6 col-lg-4">Item 3</li>
               </ul>
           </section>
           <div className="col-sm-12 spacer"></div>
           <section className="my-education">
               <header className="my-education__header">My Education</header>
               <ul className="my-education__list row">
                   <li className="my-resume-1 col-sm-6 col-lg-4">Item 1</li>
                   <li className="my-resume-2 col-sm-6 col-lg-4">Item 2</li>
                   <li className="my-resume-3 col-sm-6 col-lg-4">Item 3</li>
               </ul>
           </section>
       </div>
    </div>
  );
}

export default App;

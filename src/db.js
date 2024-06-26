import {
  faBook,
  faBuilding,
  faCalendar,
  faCode,
  faComputer,
  faDatabase,
  faFlask,
  faGamepad,
  faGear,
  faLanguage,
  faLeaf,
  faPen,
  faPersonWalking,
  faSchool,
  faServer,
  faSquarePersonConfined,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDocker,
  faGithub,
  faJs,
  faLaravel,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

const profile = {
  about_me:
    "At my core, I am defined by resilience, unwavering persistence, and an unyielding sense of dependability —\n" +
    "              traits of which are the driving force behind my commitment to getting the job done, ensuring that I never shy away from my responsibilities.\n" +
    "               Speaking of duties, I strongly align with the agile software development school of thought that champions consistent delivery of working software\n" +
    "               as the primary measure of progress, a result-oriented ideology that carries an undertone of user satisfaction.",
  what_i_do: [
    {
      icon: faDatabase,
      title: "Database Design",
    },
    {
      icon: faSquarePersonConfined,
      title: "UX Design",
    },
    {
      icon: faWindowMaximize,
      title: "Frontend Web Development",
    },
    {
      icon: faServer,
      title: "Server Development",
    },
    {
      icon: faGear,
      title: "Machine Learning",
    },
    {
      icon: faPen,
      title: "Writing",
    },
    {
      icon: faPersonWalking,
      title: "Sports",
    },
    {
      icon: faGamepad,
      title: "Video Games",
    },
  ],
  work_experience: [
    {
      role_icon: faCode,
      role_title: "Fullstack Developer",
      organisation_icon: faBuilding,
      organisation_name: "Kickertech UAB",
      experience_duration_icon: faCalendar,
      experience_duration: "July 2022 - Present",
      has_description: true,
      experience_description:
        "My duties at Kickertech, a spinoff of TGLAB and subsidiary company of Betsson Group, includes:",
      duties: [
        {
          title: "Frontend Development",
          experiences: [
            {
              xp: "Similar duties as described in my TGLab experience.",
            },
          ],
        },
        {
          title: "Backend Development",
          experiences: [
            {
              xp: "Development of API services featuring thousands of events across numerous countries, offering over 1 million odds.",
            },
            {
              xp: "Secured bet placement API services.",
            },
            {
              xp: "Refactoring of backend services from plain Javascript to Typescript",
            },
          ],
        },
        {
          title: "Microservice Communication Mechanisms",
          experiences: [
            {
              xp: "REST API",
            },
            {
              xp: "RabbitMQ",
            },
            {
              xp: "Apache Kafka",
            },
          ],
        },
        {
          title: "Team/Customer Consultation",
          experiences: [
            {
              xp: "Sync-up meetings",
            },
          ],
        },
      ],
    },
    {
      role_icon: faCode,
      role_title: "Frontend Developer",
      organisation_icon: faBuilding,
      organisation_name: "TGLab UAB",
      experience_duration_icon: faCalendar,
      experience_duration: "November 2021 - July 2022",
      has_description: true,
      experience_description:
        " Worked in a multidisciplinary agile team building a B2B iGaming product.",
      duties: [
        {
          title: "Frontend Development",
          experiences: [
            {
              xp: "Efficiently manage and display thousands of real-time updates for odds and event parameter in the sportsbook",
            },
            {
              xp: "Built 7 mission-critical UI widgets tailored to a client's needs.",
            },
            {
              xp: (
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      "Completely refactored <a href='https://betbonanza.com/sport/todays_soccer' target='_blank' rel='noreferrer' >Betbonanza</a>'s tournament UI to meet its market demands.",
                  }}
                />
              ),
            },
          ],
        },
        {
          title: "Customer Consultation",
          experiences: [
            {
              xp: "End-to-end communication and documentation of a feature in pipeline",
            },
          ],
        },
      ],
    },

    {
      role_icon: faCode,
      role_title: "Fullstack Developer",
      organisation_icon: faBuilding,
      organisation_name: "Glospace Logistics",
      experience_duration_icon: faCalendar,
      experience_duration: "September 2019 - August 2021",
      has_description: true,
      experience_description:
        "Contracted to build a logistics and shipment tracking system from the grounds up.",
      duties: [
        {
          title: "Database Design",
          experiences: [
            {
              xp: "Relational DB design for 8 tables.",
            },
            {
              xp: "Digital invoice development",
            },
            {
              xp: "DB seeding scripts to insert up to 900 records.",
            },
            { xp: "Migrations implementation." },
            { xp: "Content management systems development" },
          ],
        },
        {
          title: "Frontend Development",
          experiences: [
            {
              xp: "React Ecosystem",
            },
          ],
        },
        {
          title: "Backend Development",
          experiences: [
            {
              xp: "PHP/Laravel",
            },
            {
              xp: "Blade template engine for email",
            },
            {
              xp: "Implementation of an email system",
            },
          ],
        },
        {
          title: "Maintenance",
          experiences: [
            {
              xp: "Maintenance of the project's total stack",
            },
          ],
        },
      ],
    },
  ],
  education: [
    {
      role_icon: faBook,
      role_title: "Informatics (M.sc)",
      organisation_icon: faSchool,
      organisation_name: "Vilnius University, Lithuania",
      experience_duration_icon: faCalendar,
      experience_duration: "September 2021 - June 2023",
      has_description: false,
    },

    {
      role_icon: faBook,
      role_title: "Informatics (B.sc)",
      organisation_icon: faSchool,
      organisation_name: "University of Georgia, Georgia",
      experience_duration_icon: faCalendar,
      experience_duration: "September 2016 - July 2020",
      has_description: false,
    },

    {
      role_icon: faBook,
      role_title: "Computer Science (College)",
      organisation_icon: faSchool,
      organisation_name: "Federal Polytechnic Ilaro, Nigeria",
      experience_duration_icon: faCalendar,
      experience_duration: "September 2013 - July 2015",
      has_description: false,
    },
  ],
  skills: [
    {
      title: "Languages",
      is_categorized: true,
      categories: [
        {
          title: "dev",
          skills: [
            {
              skill_icon: faJs,
              icon_color: "turquoise",
              skill_title: "JavaScript",
            },
            {
              skill_icon: faPhp,
              icon_color: "turquoise",
              skill_title: "PHP",
            },
            {
              skill_icon: faPython,
              icon_color: "turquoise",
              skill_title: "Python",
            },
          ],
        },
        {
          title: "spoken",
          skills: [
            {
              skill_icon: faLanguage,
              icon_color: "turquoise",
              skill_title: "English",
            },
            {
              skill_icon: faLanguage,
              icon_color: "turquoise",
              skill_title: "Yoruba",
            },
            {
              skill_icon: faLanguage,
              icon_color: "turquoise",
              skill_title: "Georgian",
            },
            {
              skill_icon: faLanguage,
              icon_color: "turquoise",
              skill_title: "Lithuanian",
            },
          ],
        },
      ],
    },
    {
      title: "Framework/Libraries",
      is_categorized: false,
      skills: [
        {
          skill_icon: faLaravel,
          icon_color: "tomato",
          skill_title: "Laravel",
        },
        {
          skill_icon: faReact,
          icon_color: "turquoise",
          skill_title: "React",
        },
        {
          skill_icon: faVuejs,
          icon_color: "purple",
          skill_title: "Vue",
        },
        {
          skill_icon: faNodeJs,
          icon_color: "lightblue",
          skill_title: "ExpressJs",
        },
        {
          skill_icon: faNodeJs,
          icon_color: "red",
          skill_title: "NestJs",
        },
        {
          skill_icon: faFlask,
          icon_color: "turquoise",
          skill_title: "Flask",
        },
      ],
    },
    {
      title: "Other",
      is_categorized: false,
      skills: [
        {
          skill_icon: faComputer,
          icon_color: "turquoise",
          skill_title: "Object-oriented Programming",
        },
        {
          skill_icon: faGithub,
          icon_color: "turquoise",
          skill_title: "Git",
        },
        {
          skill_icon: faDatabase,
          icon_color: "lightblue",
          skill_title: "SQL/NoSQL/Embedded DBs",
        },
        {
          skill_icon: faGear,
          icon_color: "turquoise",
          skill_title: "Webpack",
        },
        {
          skill_icon: faDocker,
          icon_color: "lightblue",
          skill_title: "Docker",
        },
        {
          skill_icon: faLeaf,
          icon_color: "green",
          skill_title: "Latex",
        },
        {
          skill_icon: faGear,
          icon_color: "white",
          skill_title: "SkLearn",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Pet Social Media",
      img: "cat_dog.webp",
      description:
        "This side project spanned a development time of up to 1 year. In the project, I tackled challenges" +
        "including but not limited to cross-table relationships, complex SQL queries, websockets for instant messaging" +
        "Mail implementation etc.",
      in_this_project: ["PHP/Laravel", "Socket.io", "React", "MySQL"],
      see_code: true,
      see_project: false,
      barcode_embedded: false,
      barcode_embed: [],
      code_link: "https://bitbucket.org/david121/petbook-project/src/master/",
      project_link: "Petbook",
    },
    /*{
      title: "Digital CV",
      img: "cv.jpeg",
      description:
        "The website which you currently browse is a data-driven React project and although no" +
        " API calls were made to retrieve data, I exemplified my database design skill in the form of an " +
        "embedded JSON database style as well as the integration of data in a React UI in such a way that demonstrates" +
        " the Don't Repeat Yourself (DRY) principle.",
      in_this_project: ["React", "Bootstrap", "CSS"],
      see_code: true,
      see_project: false,
      barcode_embedded: false,
      barcode_embed: [],
      code_link: "https://github.com/davson1217/portfolio",
      project_link: "CV description",
    },
    {
      title: "Restaurant CMS",
      img: "glass2.jpeg",
      description:
        "This content management system project is part of a series project titled 'Bar' built on a microservice architecture." +
        " In the CMS, a user is able to make CRUD operations on their product including file (image) upload, create different languages a " +
        "product can be represented in, as well as currencies. " +
        "<ul>" +
        "<li>Demo User 1 (This user has existing data)" +
        "<ul>" +
        "   <li>username: demo1@demo.com</li>" +
        "   <li>password: demoPassword1</li>" +
        "</ul>" +
        "</li>" +
        "<li>Demo User 2 (This user has no data)" +
        "<ul>" +
        "   <li>username: demo2@demo.com</li>" +
        "   <li>password: demoPassword2</li>" +
        "</ul>" +
        "</li>" +
        "</ul>",
      in_this_project: [
        "ReactJs",
        "Redux",
        "Typescript",
        "Styled Components",
        "OAuth",
      ],
      see_code: true,
      see_project: true,
      barcode_embedded: false,
      barcode_embed: [],
      code_link: "https://bitbucket.org/david121/bar-cms/src/master/",
      project_link: "https://lilac-cms.netlify.app/",
    },
    {
      title: "Restaurant client",
      img: "glass2.jpeg",
      description:
        "This project is the client side of the 'Bar' system where customers are able to browse available products in " +
        "a restaurant and add desired items into a cart. Below are barcodes belonging to each of the users given earlier in the CMS project",
      in_this_project: ["ReactJs", "Redux", "Typescript"],
      see_code: true,
      see_project: false,
      barcode_embedded: true,
      barcode_embed: [
        // "https://barcode.tec-it.com/barcode.ashx?data=https%3A%2F%2Flilac-client.netlify.app%2F%3FclientId%3D6417924cf50e1f02c3e3bd7a%26idNum%3D2&code=QRCode&multiplebarcodes=true&eclevel=L",
        // "https://barcode.tec-it.com/barcode.ashx?data=https%3A%2F%2Flilac-client.netlify.app%2F%3FclientId%3D650703aa6d7d64104e441fcf%26idNum%3D100&code=QRCode&multiplebarcodes=true&eclevel=L",
      ],
      code_link: "https://bitbucket.org/david121/bar-client/src/main/",
      project_link: "https://lilac-client.netlify.app/",
    },*/
    {
      title: "Yoruba-Lithuanian Transliteration",
      img: "mt.png",
      description:
        "In this work, different Natural Language Processing techniques applicable to other languages were  " +
        "utilized including but not limited to data pre-processing and alignment, syllabification, Decision Tree model training and " +
        "tree visualization.",
      in_this_project: [
        "Javascript",
        "Python/Flask",
        "SKLearn / CART Machine Learning",
        "Syllabification Algorithm",
      ],
      see_code: true,
      see_project: true,
      barcode_embedded: false,
      barcode_embed: [],
      code_link: "https://github.com/davson1217/CART",
      project_link:
        "https://yoruba-lithuanian-adaptation.000webhostapp.com/vu/",
    },
  ],
};

export default profile;

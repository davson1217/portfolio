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
  faLock,
  faPen,
  faPersonWalking,
  faSchool,
  faServer,
  faSquarePersonConfined,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faDocker,
  faGithub,
  faHtml5,
  faJs,
  faLaravel,
  faNodeJs,
  faPython,
  faReact,
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
              xp: "Same duties as described in my TGLab experience.",
            },
          ],
        },
        {
          title: "Backend Development",
          experiences: [
            {
              xp: "ExpressJs (NodeJs)",
            },
            {
              xp: "MVC architecture",
            },
            {
              xp: "MySql, MongoDB, Prisma ORM",
            },
          ],
        },
        {
          title: "Microservice",
          experiences: [
            {
              xp: "REST API",
            },
            {
              xp: "RabbitMQ",
            },
            {
              xp: "Docker",
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
        " Worked in a multidisciplinary agile team building a B2B iGaming product:",
      duties: [
        {
          title: "Frontend Development",
          experiences: [
            {
              xp: "Building and maintenance of responsive modularised components",
            },
            { xp: "ReactJs" },
            { xp: "Redux" },
            { xp: "React Router" },
            { xp: "Websocket Client" },
            { xp: "Redux dev tools" },
          ],
        },
        {
          title: "Customer Consultation",
          experiences: [
            {
              xp: "End-to-end communication and documentation of a feature in pipeline",
            },
            {
              xp: "Planning",
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
      experience_description: "Glospace working experience",
      duties: [
        {
          title: "Frontend Development",
          experiences: [
            {
              xp: "Building and maintenance of responsive modularised components",
            },
            { xp: "ReactJs" },
            { xp: "Redux" },
            { xp: "React Router" },
            { xp: "Websocket Client" },
            { xp: "Redux dev tools" },
          ],
        },
        {
          title: "Customer Consultation",
          experiences: [
            {
              xp: "End-to-end communication and documentation of a feature in pipeline",
            },
            {
              xp: "Planning",
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
              skill_icon: faPython,
              icon_color: "turquoise",
              skill_title: "Python",
            },
            {
              skill_icon: faHtml5,
              icon_color: "red",
              skill_title: "HTML5",
            },
            {
              skill_icon: faCss3,
              icon_color: "turquoise",
              skill_title: "CSS3",
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
          ],
        },
      ],
    },
    {
      title: "Framework/Libraries",
      is_categorized: false,
      skills: [
        {
          skill_icon: faReact,
          icon_color: "turquoise",
          skill_title: "React",
        },
        {
          skill_icon: faReact,
          icon_color: "purple",
          skill_title: "Redux",
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
          skill_icon: faNodeJs,
          icon_color: "blue",
          skill_title: "TypeScript",
        },
        {
          skill_icon: faLaravel,
          icon_color: "tomato",
          skill_title: "Laravel",
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
          skill_icon: faGear,
          icon_color: "turquoise",
          skill_title: "Webpack",
        },
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
          skill_icon: faDocker,
          icon_color: "lightblue",
          skill_title: "Docker",
        },
        {
          skill_icon: faDatabase,
          icon_color: "lightblue",
          skill_title: "SQL/NoSQL/Embedded DBs",
        },
        {
          skill_icon: faLock,
          icon_color: "red",
          skill_title: "OAuth",
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
  portfolio: [
    {
      title: "Digital CV",
      img: "glass2.jpeg",
      description:
        "The website which you currently browse is a data-driven React project and although no" +
        " API calls were made to retrieve data, I exemplified my database design skill in the form of an " +
        "embedded JSON database style as well as the integration of data in a React UI in such a way that demonstrates" +
        " the Don't Repeat Yourself (DRY) principle.",
      in_this_project: ["React", "Bootstrap", "CSS"],
      see_code: true,
      see_project: false,
      code_link: "https://github.com/davson1217/portfolio",
      project_link: "CV description",
    },
    {
      title: "Restaurant CMS",
      img: "glass2.jpeg",
      description: "CMS description",
      in_this_project: ["ReactJs", "Bootstrap", "CSS"],
      link: "",
    },
    {
      title: "Restaurant e-commerce",
      img: "glass2.jpeg",
      description: "E-commerce description",
      in_this_project: ["React", "Bootstrap", "CSS"],
      link: "",
    },
    {
      title: "Yoruba-Lithuanian Transliteration",
      img: "glass2.jpeg",
      description: "Transliteration project description",
      in_this_project: ["React", "Bootstrap", "CSS"],
      link: "",
    },
  ],
};

export default profile;
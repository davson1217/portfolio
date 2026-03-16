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
  faPen,
  faPersonWalking,
  faSchool,
  faServer,
  faWindowMaximize,
  faCircleNodes,
  faShip,
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
    "I am a product-minded software engineer with strong end-to-end ownership across architecture, delivery, and execution.\n" +
    "              I work comfortably across frontend and backend systems, with a focus on building reliable software, solving real business problems, and taking responsibility for outcomes.\n" +
    "               I do my best work in fast-moving environments where initiative, pragmatism, and sound technical judgment matter.",
  what_i_do: [
    {
      icon: faServer,
      title: "Backend Systems",
    },
    {
      icon: faWindowMaximize,
      title: "Frontend Product Development",
    },
    {
      icon: faCircleNodes,
      title: "System Design",
    },
    {
      icon: faCircleNodes,
      title: "Microservice Integrations",
    },
    {
      icon: faWindowMaximize,
      title: "Real-Time Applications",
    },
    {
      icon: faPen,
      title: "Technical Product Ownership",
    },
  ],
  work_experience: [
    {
      role_icon: faCode,
      role_title: "Software Engineer (BE Focused)",
      organisation_icon: faBuilding,
      organisation_name: "Olybet Group",
      experience_duration_icon: faCalendar,
      experience_duration: "July 2024 - Present",
      has_description: true,
      experience_description:
        "In this role, I own the end-to-end delivery of critical platform features, from solution design through implementation and release, while also supporting and mentoring junior engineers.",
      duties: [
        {
          title: "Backend Development (Laravel)",
          experiences: [
            {
              xp: "Own microservice-based integrations connecting third-party casino providers to the core gaming platform, enabling onboarding of 5,000+ casino games across multiple jurisdictions.",
            },
            {
              xp: "Design scalable integration patterns for high-volume partner traffic while maintaining platform stability and regulatory compliance.",
            },
            {
              xp: "Define maintainable service boundaries and enforce engineering standards through SOLID design, unit tests, and feature tests.",
            },
          ],
        },
        {
          title: "Frontend Development",
          experiences: [
            {
              xp: "Build internal tooling features and components with Vue and Pinia to support operational workflows and team efficiency.",
            },
          ],
        },
      ],
    },
    {
      role_icon: faCode,
      role_title: "Software Engineer (FE Focused)",
      organisation_icon: faBuilding,
      organisation_name: "TGLAB/Kickertech",
      experience_duration_icon: faCalendar,
      experience_duration: "March 2021 - July 2024",
      has_description: true,
      experience_description:
        "Contributed to a high-scale B2B sportsbook platform, delivering real-time, client-specific features across frontend and supporting backend services.",
      duties: [
        {
          title: "Frontend Development (React/Redux)",
          experiences: [
            {
              xp: "Built and optimized frontend flows that handled thousands of real-time sportsbook updates, including odds and event data, with a strong focus on performance and accuracy.",
            },
            {
              xp: (
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      "Built modular, mission-critical UI components tailored to client-specific product requirements for brands including <a href='https://stake.com' target='_blank' rel='noreferrer' >Stake</a> and <a href='https://betsson.lt' target='_blank' rel='noreferrer' >Betsafe</a>.",
                  }}
                />
              ),
            },
          ],
        },
        {
          title: "Backend Development (Express)",
          experiences: [
            {
              xp: "Implemented Memcached-based event feed caching to improve performance and reduce downstream load.",
            },
            {
              xp: "Built Socket.IO-powered real-time update flows for sportsbook clients.",
            },
            {
              xp: "Used RethinkDB changefeeds to enable database-driven event propagation across services.",
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
        "Contracted to build a logistics and shipment tracking platform from the ground up, including a CMS and supporting operational workflows.",
      duties: [
        {
          title: "Database Design",
          experiences: [
            {
              xp: "Designed the relational database structure that supported shipment tracking, invoicing, and CMS workflows.",
            },
            {
              xp: "Built digital invoicing capabilities to support business operations.",
            },
            {
              xp: "Created data seeding scripts to initialize and support large record sets during development and rollout.",
            },
            {
              xp: "Implemented database migrations to support iterative product growth.",
            },
          ],
        },
        {
          title: "Frontend Development",
          experiences: [
            {
              xp: "Built the frontend application with React, Redux, and Bootstrap to support core logistics and CMS user flows.",
            },
          ],
        },
        {
          title: "Backend Development",
          experiences: [
            {
              xp: "Built backend services in Laravel to power tracking, content management, and internal business operations.",
            },
            {
              xp: "Used Blade templating to implement dynamic email workflows.",
            },
            {
              xp: "Implemented the project's email system for operational communication and notifications.",
            },
          ],
        },
        {
          title: "Maintenance",
          experiences: [
            {
              xp: "Maintained the full application stack, taking responsibility for ongoing stability and feature support.",
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
              skill_title: "JavaScript/Typescript",
            },
            {
              skill_icon: faPhp,
              icon_color: "turquoise",
              skill_title: "PHP",
            },
            {
              skill_icon: faPython,
              icon_color: "turquoise",
              skill_title: "C#",
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
              skill_title: "Lithuanian",
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
          skill_icon: faLaravel,
          icon_color: "tomato",
          skill_title: "Laravel",
        },
        {
          skill_icon: faReact,
          icon_color: "turquoise",
          skill_title: "React & Redux",
        },
        {
          skill_icon: faVuejs,
          icon_color: "purple",
          skill_title: "Vue & Pinia",
        },
        {
          skill_icon: faNodeJs,
          icon_color: "lightblue",
          skill_title: "Express",
        },
        {
          skill_icon: faNodeJs,
          icon_color: "red",
          skill_title: "Nest",
        },
        {
          skill_icon: faFlask,
          icon_color: "turquoise",
          skill_title: ".Net",
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
          skill_icon: faShip,
          icon_color: "turquoise",
          skill_title: "CI/CD Pipelines",
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
          skill_icon: faGear,
          icon_color: "white",
          skill_title: "SkLearn",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Economus UAB",
      img: "pg1.webp",
      description:
        "Led the modernization of a legacy static website into a data-driven, content-manageable platform, working directly with the client from requirements through delivery under my startup, <a href='https://kabiti.com'>Kabiti</a>.",
      in_this_project: ["React", "i18n", "Express"],
      see_code: false,
      see_project: true,
      barcode_embedded: false,
      barcode_embed: [],
      code_link: "https://economus.lt",
      project_link: "Economus",
    },
    {
      title: "Digital Restaurant Menu",
      img: "glass2.jpeg",
      description:
        "Built Menutender from scratch and later grew it into a small team effort, where I took technical product ownership as the scope expanded. " +
        "The platform is part of a three-service microservice architecture spanning the CMS, customer-facing experience, and backend APIs. " +
        "For demonstration purposes, you can access the CMS and explore how it interacts with the customer-facing product and Express services." +
        "<ul>" +
        "<li>Demo User" +
        "<ul>" +
        "   <li>username: demo@menutender.com</li>" +
        "   <li>password: password</li>" +
        "</ul>" +
        "</li>" +
        "</ul>",
      in_this_project: [
        "React/Redux",
        "Express",
        "MongoDB",
        "Docker",
        "Typescript",
        "Styled Components",
        "Material UI",
        "OAuth",
      ],
      see_code: true,
      see_project: true,
      barcode_embedded: false,
      barcode_embed: [],
      code_link: "https://bitbucket.org/david121/bar-cms/src/master/",
      project_link: "https://admin.menutender.com",
    },
    {
      title: "Pet Social Media",
      img: "cat_dog.webp",
      description:
        "Built a social platform for pet owners, solving challenges across relational data modeling, complex SQL querying, real-time messaging, and email-driven user workflows.",
      in_this_project: ["PHP/Laravel", "Socket.io", "React", "MySQL"],
      see_code: true,
      see_project: false,
      barcode_embedded: false,
      barcode_embed: [],
      code_link: "https://bitbucket.org/david121/petbook-project/src/master/",
      project_link: "Petbook",
    },
    // {
    //   title: "Digital CV",
    //   img: "cv.jpeg",
    //   description:
    //     "The website which you currently browse is a data-driven React project and although no" +
    //     " API calls were made to retrieve data, I exemplified my database design skill in the form of an " +
    //     "embedded JSON database style as well as the integration of data in a React UI in such a way that demonstrates" +
    //     " the Don't Repeat Yourself (DRY) principle.",
    //   in_this_project: ["React", "Bootstrap", "CSS"],
    //   see_code: true,
    //   see_project: false,
    //   barcode_embedded: false,
    //   barcode_embed: [],
    //   code_link: "https://github.com/davson1217/portfolio",
    //   project_link: "CV description",
    // },

    // {
    //   title: "Restaurant client",
    //   img: "glass2.jpeg",
    //   description:
    //     "This project is the client side of the 'Bar' system where customers are able to browse available products in " +
    //     "a restaurant and add desired items into a cart. Below are barcodes belonging to each of the users given earlier in the CMS project",
    //   in_this_project: ["ReactJs", "Redux", "Typescript"],
    //   see_code: true,
    //   see_project: false,
    //   barcode_embedded: true,
    //   barcode_embed: [
    //     // "https://barcode.tec-it.com/barcode.ashx?data=https%3A%2F%2Flilac-client.netlify.app%2F%3FclientId%3D6417924cf50e1f02c3e3bd7a%26idNum%3D2&code=QRCode&multiplebarcodes=true&eclevel=L",
    //     // "https://barcode.tec-it.com/barcode.ashx?data=https%3A%2F%2Flilac-client.netlify.app%2F%3FclientId%3D650703aa6d7d64104e441fcf%26idNum%3D100&code=QRCode&multiplebarcodes=true&eclevel=L",
    //   ],
    //   code_link: "https://bitbucket.org/david121/bar-client/src/main/",
    //   project_link: "https://lilac-client.netlify.app/",
    // },
    {
      title: "Yoruba-Lithuanian Transliteration",
      img: "mt.png",
      description:
        "Built a Yoruba-Lithuanian transliteration system using NLP techniques such as data preprocessing, alignment, syllabification, and decision tree training.",
      in_this_project: [
        "Javascript",
        "Python/Flask",
        "SKLearn / CART Machine Learning",
        "Syllabification Algorithm",
      ],
      see_code: true,
      see_project: false,
      barcode_embedded: false,
      barcode_embed: [],
      code_link: "https://github.com/davson1217/CART",
      project_link:
        "https://yoruba-lithuanian-adaptation.000webhostapp.com/vu/",
    },
  ],
};

export default profile;

import {
  faBuilding, faCalendar,
  faCode,
  faDatabase, faGamepad,
  faGear, faPen, faPersonWalking,
  faServer,
  faSquarePersonConfined,
  faWindowMaximize
} from "@fortawesome/free-solid-svg-icons";

export const profile = {
  about_me: "At my core, I am defined by resilience, unwavering persistence, and an unyielding sense of dependability —\n" +
      "              traits of which are the driving force behind my commitment to getting the job done, ensuring that I never shy away from my responsibilities.\n" +
      "               Speaking of duties, I strongly align with the agile software development school of thought that champions consistent delivery of working software\n" +
      "               as the primary measure of progress, a result-oriented ideology that carries an undertone of user satisfaction.",
  what_i_do: [
    {
      icon: faDatabase,
      title: "Database Design"
    },
    {
      icon: faSquarePersonConfined,
      title: "UX Design"
    },
    {
      icon: faWindowMaximize,
      title: "Frontend Web Development"
    },
    {
      icon: faServer,
      title: "Server Development"
    },
    {
      icon: faGear,
      title: "Machine Learning"
    },
    {
      icon: faPen,
      title: "Writing"
    },
    {
      icon: faPersonWalking,
      title: "Sports"
    },
    {
      icon: faGamepad,
      title: "Video Games"
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
      experience_description: "My duties at Kickertech, a spinoff of TGLAB and subsidiary company of Betsson Group, includes:",
      duties: [
        {
          duty_title: "Frontend Development",
          duty_experiences: [
            {
              duty_xp: "Same duties as described in my TGLab experience."
            }
          ]
        },
        {
          duty_title: "Backend Development",
          duty_experiences: [
            {
              duty_xp: "ExpressJs (NodeJs)",
            },
            {
              duty_xp: "MVC architecture",
            },
            {
              duty_xp: "MySql, MongoDB, Prisma ORM",
            },
          ]
        },
        {
          duty_title: "Microservice",
          duty_experiences: [
            {
              duty_xp: "REST API",
            },
            {
              duty_xp: "RabbitMQ",
            },
            {
              duty_xp: "Docker",
            },
          ]
        },
        {
          duty_title: "Team/Customer Consultation",
          duty_experiences: [
            {
              duty_xp: "Sync-up meetings",
            }
          ]
        }
      ]
    },

    {
      role_icon: faCode,
      role_title: "Frontend Developer",
      organisation_icon: faBuilding,
      organisation_name: "TGLab UAB",
      experience_duration_icon: faCalendar,
      experience_duration: "November 2021 - July 2022",
      experience_description: " Worked in a multidisciplinary agile team building a B2B iGaming product:",
      duties: [
        {
          duty_title: "Frontend Development",
          duty_experiences: [
            {duty_xp: "Building and maintenance of responsive modularised components"},
            {duty_xp: "ReactJs"},
            {duty_xp: "Redux"},
            {duty_xp: "React Router"},
            {duty_xp: "Websocket Client"},
            {duty_xp: "Redux dev tools"},
          ]
        },
        {
          duty_title: "Customer Consultation",
          duty_experiences: [
            {
              duty_xp: "End-to-end communication and documentation of a feature in pipeline",
            },
            {
              duty_xp: "Planning",
            }
          ]
        }
      ]
    },

    {
      role_icon: faCode,
      role_title: "Fullstack Developer",
      organisation_icon: faBuilding,
      organisation_name: "Glospace Logistics",
      experience_duration_icon: faCalendar,
      experience_duration: "September 2019 - August 2021",
      experience_description: "                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
          "                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n" +
          "                    ea commodo consequat.",
      duties: [
        {
          duty_title: "Frontend Development",
          duty_experiences: [
            {duty_xp: "Building and maintenance of responsive modularised components"},
            {duty_xp: "ReactJs"},
            {duty_xp: "Redux"},
            {duty_xp: "React Router"},
            {duty_xp: "Websocket Client"},
            {duty_xp: "Redux dev tools"},
          ]
        },
        {
          duty_title: "Customer Consultation",
          duty_experiences: [
            {
              duty_xp: "End-to-end communication and documentation of a feature in pipeline",
            },
            {
              duty_xp: "Planning",
            }
          ]
        }
      ]
    },
  ]
}
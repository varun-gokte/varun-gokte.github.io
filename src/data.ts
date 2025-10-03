type JobType = {
  role: string,
  company: string,
  logo: string,
  start: string,
  end?: string,
  projects: {
    name: string,
    about: string,
    bullets: string[],
    tech_stack: string,
  }[]
}[];

const jobs: JobType = [
  {
    role: "Software Engineer",
    company: "WorkIPO",
    logo: "",
    start: "April 2025",
    projects: [
      {
        name: "ERP System",
        about: "An ERP system built with Flask (backend) and React (frontend)",
        bullets: [
          "Fixed bugs and refactored legacy code to improve maintainability and performance.",
          "Improved reliability by writing Playwright tests, performing QA, and debugging issues across the stack.",
          "Reviewed pull requests and provided feedback to ensure code quality and consistency.",
          "Collaborated with teammates in agile sprints, contributing to planning, code reviews, and iterative delivery.",
          "Streamlined development workflows by maintaining clean code practices and supporting smooth releases."
        ],
        tech_stack: "React, Flask, PostgreSQL, Material UI, Tailwind, SQLAlchemy, Playwright"
      }
    ]
  },
  {
    role: "Software Developer",
    company: "Beacon Trusteeship/Codium Techlabs",
    logo: "",
    start: "February 2024",
    end: "March 2025",
    projects: [
      {
        name: "Report Building Tool",
        about: "A Full-stack financial reporting platform",
        bullets: [
          "Developed drag-and-drop UI for customizable charts, tables, and graphs. ",
          "Integrated AI analysis (OpenAI API) and multi-API financial data fetching.",
          "Enabled saving/loading templates, backend CRUD, and data scraping (Puppeteer)."
        ],
        tech_stack: " React, Craft.js, Node.js, Express, Puppeteer, OpenAI API, Probe42 API, Google News API, MongoDB"
      },
      {
        name: "Document Management System (DMS)",
        about: "React-based financial document platform ",
        bullets: [
          "Implemented authentication, role-based access control, and secure permissions.",
          "Built dynamic dashboard and real-time updates via WebSockets.",
          "Integrated multiple backend APIs for financial transaction management."
        ],
        tech_stack: " Tech Stack: React, Node.js, Express, Shadcn/ui, socket.io, MongoDB"
      }
    ]
  }
];


type ProjectType = {
  name: string,
  bullets: string[],
  tech_stack: string,
  github?: string,
  deployment?: string
}[];

const projects: ProjectType = [
  {
    name: "Resume Anaylser",
    bullets: ["TBD"],
    tech_stack: "Flask",
    github: "",
  },
  {
    name: "Sentiment Analysis Tool using Machine Learning",
    bullets: [
      "Developed a sentiment analysis app leveraging the Natural Language Toolkit (NLTK) and a Naïve Bayes Classifier to classify tweets as positive or negative.",
      "Trained the model on a dataset of 10,000 tweets to enhance accuracy and performance."
    ],
    tech_stack: "Python, Natural Language Toolkit (NLTK)",
    github: ""
  },
  {
    name: "Blog Website using Django",
    bullets: [
      "A blog website with user registration, post creation, and interaction features."
    ],
    tech_stack: "HTML, CSS, JavaScript, Django, SQLite, Deployed using AWS Elastic Beanstalk",
    github: ""
  },
  {
    name: "Portfolio Website",
    bullets: [],
    tech_stack: "React, MUI, Tailwind CSS, Framer Motion",
    github: ""
  }
];

export {jobs, projects}
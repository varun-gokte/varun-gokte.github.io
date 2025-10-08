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
        about: "Internal client tool developed with React, Flask and PostgreSQL",
        bullets: [
          "Developed and maintained RESTful APIs to enable seamless data exchange between frontend and backend.",
          "Designed and implemented PostgreSQL database schemas and queries using SQLAlchemy to support application functionality and ensure efficient data management.",
          "Refactored legacy code and optimized queries, boosting system performance by 30%.",
          "Implemented Playwright tests to improve reliability, expanding automated coverage by 20%.",
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
        about: "Financial reporting platform in React and Node.js",
        bullets: [
          "Developed a drag-and-drop interface (using Craft.js) for customizable charts and reports.",
          "Integrated AI insights (OpenAI API) and automated multi-API financial data fetching.",
          "Built backend for saving templates, data scraping and efficient CRUD operations."
        ],
        tech_stack: " React, Craft.js, Node.js, Express, MongoDB, Mongoose,  Puppeteer, OpenAI API, Probe42 API"
      },
      {
        name: "Document Management System (DMS)",
        about: "Financial document platform using React",
        bullets: [
          "Developed secure frontend with authentication, role-based access, and dynamic dashboards.",
          "Implemented real-time updates via WebSockets and integrated frontend with backend APIs.",
          "Built responsive UI using React and Shadcn/ui for a modern, consistent design."
        ],
        tech_stack: "React, Shadcn/ui, WebSockets"
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
    name: "Resume Anaylzer",
    bullets: [
      "Developed a Flask app that evaluates resumes against job descriptions, returning a match score using Sentence Transformers and Cosine Similarity.",
      "Integrated a Dockerized PostgreSQL database to store resumes and job descriptions, supporting scalable data management."
    ],
    tech_stack: "Flask, PostgreSQL, Docker, Sentence Transformer, PDFPlumber",
    github: "https://github.com/varun-gokte/resume_analyzer",
    // deployment: "https://resume-analyzer-fs4v.onrender.com"
  },
  {
    name: "Sentiment Analysis Tool using Machine Learning",
    bullets: [
      "Developed a sentiment analysis app leveraging the Natural Language Toolkit (NLTK) and a Naïve Bayes Classifier to classify tweets as positive or negative.",
      "Built and trained the model on a dataset of 10,000 tweets sourced from Kaggle, using Google Colab for development and experimentation."
    ],
    tech_stack: "Python, Natural Language Toolkit (NLTK), Google Colab",
    github: "https://github.com/varun-gokte/sentiment_analysis"
  },
  {
    name: "Blog Website using Django",
    bullets: [
      "Implemented user authentication with Django’s built-in system, allowing secure registration and login.",
      "Allowed users to create, view, edit, and delete posts, and leave comments on others’ posts."
    ],
    tech_stack: "HTML, CSS, JavaScript, Django, SQLite",
    github: "https://github.com/varun-gokte/django-blog-app"
  },
  {
    name: "Portfolio Website",
    bullets: [
      "Built and deployed this portfolio website on GitHub Pages to showcase projects and experience.",
      "Designed a fully responsive, modern UI using Material UI, Tailwind, and Framer Motion animations."
    ],
    tech_stack: " React, Tailwind, Material UI, Framer Motion",
    github: "https://github.com/varun-gokte/varun-gokte.github.io"
  }
];

const skillsByCategory = {
  "Languages": ["JavaScript", "TypeScript", "Python", "Java"],
  "Frontend": ["React", "Tailwind", "Material UI", "HTML & CSS"],
  "Backend": ["Node.js", "Express", "Django", "Flask", "WebSockets"],
  "Databases & ORMs": ["MongoDB", "SQL", "Mongoose", "SQLAlchemy"],
  "Machine Learning / AI": ["Scikit-learn", "TensorFlow", "NLTK", "OpenAI API"],
  "DevOps & Cloud": ["Docker", "Git/GitHub", "AWS Elastic Beanstalk", "Vercel"],
  "Tools": ["Linux", "Google Colab", "Kaggle", "Cursor"]
};

const categoryColors: { [key: string]: string } = {
  "Languages": "bg-blue-100 text-blue-700",
  "Frontend": "bg-green-100 text-green-700",
  "Backend": "bg-purple-100 text-purple-700",
  "Databases & ORMs": "bg-yellow-100 text-yellow-700",
  "Machine Learning / AI": "bg-red-100 text-red-700",
  "DevOps & Cloud": "bg-indigo-100 text-indigo-700",
  "Tools": "bg-pink-100 text-pink-700", 
};

export {jobs, projects, skillsByCategory, categoryColors}